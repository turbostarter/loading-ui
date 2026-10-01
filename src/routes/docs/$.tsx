import { createFileRoute, notFound } from "@tanstack/react-router";

import { DocsPageContent } from "@/components/docs/docs-page";
import { createMetadata } from "@/lib/metadata";
import { getDocsPage } from "@/lib/docs-page-data";
import { source } from "@/lib/source";

export const Route = createFileRoute("/docs/$")({
  loader: ({ params }) => {
    const slugs = params._splat?.split("/").filter(Boolean) ?? [];
    const data = getDocsPage(slugs);

    if (!data) {
      throw notFound();
    }

    return data;
  },
  head: ({ params }) => {
    const slugs = params._splat?.split("/").filter(Boolean) ?? [];
    const page = source.getPage(slugs);
    if (!page) {
      return {};
    }

    const image = ["/api/og", ...page.slugs, "image.png"].join("/");

    return createMetadata({
      title: page.data.title,
      description: page.data.description,
      alternates: { canonical: page.url },
      openGraph: {
        url: page.url,
        images: [image],
      },
      twitter: {
        images: [image],
      },
    })();
  },
  component: DocsSplatPage,
});

function DocsSplatPage() {
  const data = Route.useLoaderData();

  return <DocsPageContent {...data} />;
}
