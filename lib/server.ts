import { createServerFn } from "@tanstack/react-start";
import { findNeighbour } from "fumadocs-core/page-tree";
import { z } from "zod";

import { getGitHubStars } from "@/lib/github-stars";
import { getPageMarkdownUrl, source } from "@/lib/source";

export type DocsNeighbour = { url: string; name: string } | null;

export type DocsPageData = {
  path: string;
  title: string;
  description: string | undefined;
  markdownUrl: string;
  raw: string;
  slugs: string[];
  url: string;
  neighbours: {
    previous: DocsNeighbour;
    next: DocsNeighbour;
  };
};

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

export const getSerializedPageTree = createServerFn({ method: "GET" }).handler(
  async () => source.serializePageTree(source.getPageTree()),
);

export const getGitHubStarsFn = createServerFn({ method: "GET" }).handler(() =>
  getGitHubStars(),
);

export const getDocsPage = createServerFn({ method: "GET" })
  .validator(z.array(z.string()))
  .handler(async ({ data: slugs }): Promise<DocsPageData | null> => {
    const page = source.getPage(slugs);
    if (!page) {
      return null;
    }

    const neighbours = findNeighbour(source.getPageTree(), page.url);

    return {
      path: page.path,
      title: page.data.title,
      description: page.data.description,
      markdownUrl: getPageMarkdownUrl(page).url,
      raw: await page.data.getText("raw"),
      slugs: page.slugs,
      url: page.url,
      neighbours: {
        previous: neighbourFrom(neighbours.previous),
        next: neighbourFrom(neighbours.next),
      },
    };
  });
