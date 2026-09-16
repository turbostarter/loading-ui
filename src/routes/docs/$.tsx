import { createFileRoute, notFound } from "@tanstack/react-router";
import { Suspense } from "react";

import { DocsPageView } from "@/components/docs/docs-page";
import { createHead, pageTitle } from "@/lib/metadata";
import { docs } from "@/lib/source";
import { getDocsPage } from "@/lib/server";

export const Route = createFileRoute("/docs/$")({
  loader: async ({ params }) => {
    const slugs = params._splat?.split("/").filter(Boolean) ?? [];
    const data = await getDocsPage({ data: slugs });
    if (!data) {
      throw notFound();
    }
    await docs.getPage(data.path)?.preload();
    return data;
  },
  head: ({ loaderData }) =>
    loaderData
      ? createHead({
          title: pageTitle(loaderData.title),
          description: loaderData.description,
          canonical: loaderData.url,
          image: ["/api/og", ...loaderData.slugs, "image.png"].join("/"),
        })
      : {},
  component: DocsSplatPage,
});

function DocsSplatPage() {
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
