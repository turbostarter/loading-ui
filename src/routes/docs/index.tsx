import { createFileRoute, notFound } from "@tanstack/react-router";
import { Suspense } from "react";

import { DocsPageView } from "@/components/docs/docs-page";
import { createMetadata } from "@/lib/metadata";
import { docs } from "@/lib/source";
import { getDocsPage } from "@/lib/server";

async function loadDocsPage(slugs: string[]) {
  const data = await getDocsPage({ data: slugs });
  if (!data) {
    throw notFound();
  }
  await docs.getPage(data.path)?.preload();
  return data;
}

export const Route = createFileRoute("/docs/")({
  loader: () => loadDocsPage([]),
  head: ({ loaderData }) =>
    loaderData
      ? createMetadata({
          title: loaderData.title,
          description: loaderData.description,
          alternates: { canonical: loaderData.url },
          openGraph: {
            url: loaderData.url,
            images: [
              ["/api/og", ...loaderData.slugs, "image.png"].join("/"),
            ],
          },
        })
      : {},
  component: DocsIndexPage,
});

function DocsIndexPage() {
  const data = Route.useLoaderData();

  return (
    <Suspense>
      <DocsPageView
        path={data.path}
        title={data.title}
        description={data.description}
        markdownUrl={data.markdownUrl}
        raw={data.raw}
        neighbours={data.neighbours}
      />
    </Suspense>
  );
}
