import { NextRequest, NextResponse } from "next/server";
import { isMarkdownPreferred, rewritePath } from "fumadocs-core/negotiation";
import { DOCS_CONTENT_ROUTE, DOCS_ROUTE } from "@/lib/constants";

const rewriteDocs = rewritePath(
  `${DOCS_ROUTE}{/*path}`,
  `${DOCS_CONTENT_ROUTE}{/*path}/content.md`,
);
const rewriteSuffix = rewritePath(
  `${DOCS_ROUTE}{/*path}.mdx`,
  `${DOCS_CONTENT_ROUTE}{/*path}/content.md`,
);

export default function proxy(request: NextRequest) {
  const result = rewriteSuffix.rewrite(request.nextUrl.pathname);
  if (result) {
    return NextResponse.rewrite(new URL(result, request.nextUrl));
  }

  if (isMarkdownPreferred(request)) {
    const docsResult = rewriteDocs.rewrite(request.nextUrl.pathname);

    if (docsResult) {
      return NextResponse.rewrite(new URL(docsResult, request.nextUrl));
    }
  }

  return NextResponse.next();
}
