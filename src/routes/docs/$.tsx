import { createFileRoute, notFound } from "@tanstack/react-router";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { DocsPageContent } from "@/components/docs/docs-page";
import { collectDocsPreloads } from "@/lib/docs-preload";
import { createMetadata } from "@/lib/metadata";
import { getDocsPage } from "@/lib/docs-page-data";
import { createQueryClient } from "@/lib/query/utils";
import { source } from "@/lib/source";

export const Route = createFileRoute("/docs/$")({
  loader: async ({ params }) => {
    const slugs = params._splat?.split("/").filter(Boolean) ?? [];
    const data = getDocsPage(slugs);

    if (!data) {
      throw notFound();
    }

    const preloads = await collectDocsPreloads(data.path);
    const queryClient = createQueryClient();

    for (const { input, data: sourceData } of preloads.sources) {
      queryClient.setQueryData(["component-source", input], sourceData);
    }

    return {
      ...data,
      dehydratedState: dehydrate(queryClient),
    };
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
  const { dehydratedState, ...data } = Route.useLoaderData();

  return (
    <HydrationBoundary state={dehydratedState}>
      <DocsPageContent {...data} />
    </HydrationBoundary>
  );
}
