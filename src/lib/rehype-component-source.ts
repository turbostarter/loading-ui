import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { createHash } from "node:crypto";
import { LRUCache } from "lru-cache";
import { formatCode } from "./format-code.ts";
import { highlightCode } from "./highlight-code.ts";
import type { ComponentSourceData } from "./component-source-data.ts";

type Attribute = {
  type: string;
  name?: string;
  value?: unknown;
};

type Node = {
  type: string;
  name?: string | null;
  attributes?: Attribute[];
  children?: Node[];
};

const sourceCache = new LRUCache<string, Promise<string>>({ max: 500 });

function stringAttribute(node: Node, name: string) {
  const attribute = node.attributes?.find((item) => item.name === name);
  return typeof attribute?.value === "string" ? attribute.value : undefined;
}

function dataAttribute(name: string, data: ComponentSourceData): Attribute {
  return {
    type: "mdxJsxAttribute",
    name,
    value: {
      type: "mdxJsxAttributeValueExpression",
      value: JSON.stringify(data),
      data: {
        estree: {
          type: "Program",
          sourceType: "module",
          body: [
            {
              type: "ExpressionStatement",
              expression: {
                type: "ObjectExpression",
                properties: Object.entries(data).map(([key, value]) => ({
                  type: "Property",
                  key: { type: "Identifier", name: key },
                  value: { type: "Literal", value },
                  kind: "init",
                  method: false,
                  shorthand: false,
                  computed: false,
                })),
              },
            },
          ],
        },
      },
    },
  };
}

// Run after remark's processed Markdown export, so LLM text stays readable.
export function rehypeComponentSource({ root = process.cwd() } = {}) {
  return async (tree: Node, file: { data: Record<string, unknown> }) => {
    const nodes: Node[] = [];
    function visit(node: Node) {
      if (node.name === "ComponentPreview" || node.name === "ComponentSource") {
        nodes.push(node);
      }
      node.children?.forEach(visit);
    }
    visit(tree);
    if (!nodes.length) return;

    const examplesRoot = path.join(root, "src/registry/examples");
    const files = await readdir(examplesRoot, { recursive: true });
    const examples = new Map(
      files
        .filter(
          (name) => /\.(tsx|ts)$/.test(name) && !name.includes("__index__"),
        )
        .map((name) => [
          name
            .replace(/\.(tsx|ts)$/, "")
            .split(path.sep)
            .join("-"),
          path.join(examplesRoot, name),
        ]),
    );
    // Fumadocs exposes its dependency tracker under this key.
    // oxlint-disable-next-line no-underscore-dangle
    const compiler = file.data._compiler as
      | { addDependency: (filePath: string) => void }
      | undefined;

    await Promise.all(
      nodes.map(async (node) => {
        const name = stringAttribute(node, "name");
        const src = stringAttribute(node, "src");
        if (!name && !src) {
          throw new Error(
            `${node.name} needs a static name or src to compile its code.`,
          );
        }
        const sourcePath = src
          ? path.resolve(root, src)
          : (examples.get(name!) ??
            path.join(root, "public/r", `${name}.json`));
        compiler?.addDependency(sourcePath);
        const content = await readFile(sourcePath, "utf8");
        let raw = content;
        if (!src && !examples.has(name!)) {
          const registry = JSON.parse(content) as {
            files?: { content?: string }[];
          };
          raw = registry.files?.[0]?.content ?? "";
        }
        if (!raw) throw new Error(`Missing component source: ${name ?? src}`);

        const key = createHash("sha256").update(raw).digest("hex");
        let formatted = sourceCache.get(key);
        if (!formatted) {
          formatted = formatCode(raw);
          sourceCache.set(key, formatted);
        }
        let code = await formatted;
        const maxLines = node.attributes?.find(
          (item) => item.name === "maxLines",
        )?.value as { type?: string; value?: string } | undefined;
        if (maxLines?.value) {
          const count = Number(maxLines.value);
          if (!Number.isInteger(count) || count < 1) {
            throw new Error(
              "ComponentSource maxLines must be a positive integer literal.",
            );
          }
          code = code.split("\n").slice(0, count).join("\n");
        }
        const language =
          stringAttribute(node, "language") ??
          stringAttribute(node, "title")?.split(".").pop() ??
          "tsx";
        const data = {
          code,
          language,
          highlightedCode: await highlightCode(code, language),
        };
        node.attributes ??= [];
        node.attributes.push(dataAttribute("sourceData", data));
        if (node.name === "ComponentPreview") {
          const preview = code.split("\n").slice(0, 3).join("\n");
          node.attributes.push(
            dataAttribute("sourcePreviewData", {
              code: preview,
              language,
              highlightedCode: await highlightCode(preview, language),
            }),
          );
        }
      }),
    );
  };
}
