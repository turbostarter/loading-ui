import assert from "node:assert/strict";
import { test } from "node:test";
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { tmpdir } from "node:os";
import { rehypeComponentSource } from "./rehype-component-source.ts";
import type { ComponentSourceData } from "./component-source-data.ts";

type TestNode = {
  type: string;
  name: string;
  attributes: { type: string; name: string; value: unknown }[];
};

function component(name: string, source: string): TestNode {
  return {
    type: "mdxJsxFlowElement",
    name,
    attributes: [{ type: "mdxJsxAttribute", name: "name", value: source }],
  };
}

function data(node: TestNode, name = "sourceData") {
  const attribute = node.attributes.find((item) => item.name === name);
  assert.ok(attribute);
  const expression = attribute.value as { value: string };
  return JSON.parse(expression.value) as ComponentSourceData;
}

void test("precompiles previews and registry code, tracks changes, and rejects missing sources", async () => {
  const root = await mkdtemp(path.join(tmpdir(), "loading-ui-source-"));
  try {
    const examples = path.join(root, "src/registry/examples/ring");
    const registry = path.join(root, "public/r");
    await Promise.all([
      mkdir(examples, { recursive: true }),
      mkdir(registry, { recursive: true }),
    ]);
    const examplePath = path.join(examples, "demo.tsx");
    const raw =
      'import { Ring } from "@/registry/components/ring";\n\nexport function Demo() {\n  return <Ring />;\n}';
    await Promise.all([
      writeFile(examplePath, raw),
      writeFile(
        path.join(registry, "ring.json"),
        JSON.stringify({
          files: [{ content: "export const Ring = () => <svg />;" }],
        }),
      ),
    ]);
    const preview = component("ComponentPreview", "ring-demo");
    const source = component("ComponentSource", "ring");
    source.attributes.push({
      type: "mdxJsxAttribute",
      name: "title",
      value: "ring.tsx",
    });
    const dependencies: string[] = [];
    const transform = rehypeComponentSource({ root });
    await transform(
      { type: "root", children: [preview, source] },
      {
        data: {
          _compiler: {
            addDependency: (file: string) => dependencies.push(file),
          },
        },
      },
    );
    const full = data(preview);
    assert.ok(full.code.includes('"@/components/ring"'));
    assert.ok(full.highlightedCode.includes("data-line"));
    assert.equal(
      data(preview, "sourcePreviewData").code,
      full.code.split("\n").slice(0, 3).join("\n"),
    );
    assert.equal(data(source).language, "tsx");
    assert.ok(data(source).code.includes("<svg />"));
    assert.deepEqual(
      dependencies.sort(),
      [examplePath, path.join(registry, "ring.json")].sort(),
    );

    await writeFile(examplePath, "export const Changed = () => null;");
    const changed = component("ComponentPreview", "ring-demo");
    await transform({ type: "root", children: [changed] }, { data: {} });
    assert.ok(data(changed).code.includes("Changed"));

    await assert.rejects(
      transform(
        { type: "root", children: [component("ComponentSource", "missing")] },
        { data: {} },
      ),
      /ENOENT/,
    );
    await assert.rejects(
      transform(
        {
          type: "root",
          children: [
            {
              type: "mdxJsxFlowElement",
              name: "ComponentPreview",
              attributes: [],
            },
          ],
        },
        { data: {} },
      ),
      /static name or src/,
    );
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
