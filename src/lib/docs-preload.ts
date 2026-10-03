import { createServerFn } from "@tanstack/react-start";

import {
  componentSourceQueryInput,
  type ComponentSourceQueryInput,
} from "@/lib/component-source-query";
import { getComponentSource } from "@/lib/get-component-source";
import { readFileFromRoot } from "@/lib/read-file";

const attr = (tag: string, key: string) =>
  new RegExp(`\\b${key}=(?:"([^"]*)"|\\{"([^"]*)"\\})`)
    .exec(tag)
    ?.slice(1)
    .find(Boolean);

function docsMdxPath(pagePath: string) {
  return pagePath.endsWith(".mdx")
    ? `src/content/docs/${pagePath}`
    : `src/content/docs/${pagePath}.mdx`;
}

export async function collectDocsPreloads(pagePath: string) {
  const mdx = await readFileFromRoot(docsMdxPath(pagePath));

  const previewNames = new Set<string>();
  const sourceInputs: ComponentSourceQueryInput[] = [];

  for (const [tag] of mdx.matchAll(/<ComponentPreview\b[^>]*>/g)) {
    const name = attr(tag, "name");
    if (!name) continue;
    previewNames.add(name);
    sourceInputs.push(
      componentSourceQueryInput({ name }),
      componentSourceQueryInput({ name, maxLines: 3 }),
    );
  }

  for (const [tag] of mdx.matchAll(/<ComponentSource\b[^>]*>/g)) {
    const input = componentSourceQueryInput({
      name: attr(tag, "name"),
      src: attr(tag, "src"),
      title: attr(tag, "title"),
      language: attr(tag, "language"),
    });
    if (input.name || input.src) sourceInputs.push(input);
  }

  const sources = await Promise.all(
    sourceInputs.map(async (input) => ({
      input,
      data: await getComponentSource({ data: input }),
    })),
  );

  return { names: [...previewNames], sources };
}

export const getDocsPreloads = createServerFn({ method: "GET" })
  .validator((input: { path: string }) => input)
  .handler(async ({ data }) => collectDocsPreloads(data.path));
