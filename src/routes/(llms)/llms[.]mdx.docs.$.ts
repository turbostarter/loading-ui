import { createFileRoute } from "@tanstack/react-router";

import { getLLMText, source } from "@/lib/source";

export const Route = createFileRoute("/(llms)/llms.mdx/docs/$")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const slug = params._splat?.split("/").filter(Boolean) ?? [];
        const page = source.getPage(slug.slice(0, -1));
        if (!page) {
          return new Response("Not Found", { status: 404 });
        }

        return new Response(await getLLMText(page), {
          headers: {
            "Content-Type": "text/markdown",
          },
        });
      },
    },
  },
});
