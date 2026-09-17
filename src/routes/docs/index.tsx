import { createFileRoute, notFound } from "@tanstack/react-router";
import { Suspense } from "react";

import { DocsPageView } from "@/components/docs/docs-page";
import { createMetadata } from "@/lib/metadata";
import { getDocsPage } from "@/lib/server";
import { docs, source } from "@/lib/source";

export const Route = createFileRoute("/docs/")({
  loader: async () => {
    const data = await getDocsPage({ data: [] });
    if (!data) {
      throw notFound();
    }

    await docs.getPage(data.path)?.preload();

    return data;
  },
  head: () => {
    const page = source.getPage([]);
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
  component: DocsIndexPage,
});

function DocsIndexPage() {
  const data = Route.useLoaderData();

  return (
    <Suspense>
      <DocsPageView {...data} />
    </Suspense>
  );
}
