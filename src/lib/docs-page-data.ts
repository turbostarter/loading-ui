import { findNeighbour } from "fumadocs-core/page-tree";

import { getPageMarkdownUrl, source } from "@/lib/source";

export type DocsNeighbour = { url: string; name: string } | null;

function neighbourFrom(
  node: { url: string; name: unknown } | undefined,
): DocsNeighbour {
  if (!node) {
    return null;
  }

  return {
    url: node.url,
    name: typeof node.name === "string" ? node.name : node.url,
  };
}

export function getDocsPage(slugs: string[]) {
  const page = source.getPage(slugs);
  if (!page) {
    return null;
  }

  const neighbours = findNeighbour(source.getPageTree(), page.url);

  return {
    path: page.path,
    markdownUrl: getPageMarkdownUrl(page).url,
    neighbours: {
      previous: neighbourFrom(neighbours.previous),
      next: neighbourFrom(neighbours.next),
    },
  };
}
