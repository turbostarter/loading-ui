import {
  createCsrfMiddleware,
  createMiddleware,
  createStart,
} from "@tanstack/react-start";
import { isMarkdownPreferred, rewritePath } from "fumadocs-core/negotiation";

import { DOCS_CONTENT_ROUTE, DOCS_ROUTE } from "@/lib/constants";
import { getLLMText, source } from "@/lib/source";

const csrfMiddleware = createCsrfMiddleware({
  filter: (ctx) => ctx.handlerType === "serverFn",
});

const rewriteSuffix = rewritePath(
  `${DOCS_ROUTE}{/*path}.mdx`,
  `${DOCS_CONTENT_ROUTE}{/*path}/content.md`,
);
const rewriteDocs = rewritePath(
  `${DOCS_ROUTE}{/*path}`,
  `${DOCS_CONTENT_ROUTE}{/*path}/content.md`,
);

function slugsFromMarkdownPath(pathname: string) {
  const rest = pathname.startsWith(DOCS_CONTENT_ROUTE)
    ? pathname.slice(DOCS_CONTENT_ROUTE.length)
    : pathname;
  const parts = rest.split("/").filter(Boolean);
  if (parts.at(-1) === "content.md") {
    parts.pop();
  }
  return parts;
}

async function markdownResponse(pathname: string) {
  const page = source.getPage(slugsFromMarkdownPath(pathname));
  if (!page) {
    return new Response("Not Found", { status: 404 });
  }

  return new Response(await getLLMText(page), {
    headers: {
      "Content-Type": "text/markdown",
      Vary: "Accept",
    },
  });
}

const llmMiddleware = createMiddleware().server(async ({ next, request }) => {
  const url = new URL(request.url);
  const suffixPath = rewriteSuffix.rewrite(url.pathname);
  if (suffixPath) {
    return markdownResponse(suffixPath);
  }

  if (isMarkdownPreferred(request)) {
    const docsPath = rewriteDocs.rewrite(url.pathname);
    if (docsPath) {
      return markdownResponse(docsPath);
    }
  }

  return next();
});

export const startInstance = createStart(() => {
  return {
    requestMiddleware: [csrfMiddleware, llmMiddleware],
  };
});
