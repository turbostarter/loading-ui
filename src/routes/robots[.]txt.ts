import { createFileRoute } from "@tanstack/react-router";

import { absoluteUrl, baseUrl } from "@/lib/metadata";

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: async () => {
        const body = `User-agent: *
Allow: /

Sitemap: ${absoluteUrl("/sitemap.xml")}
Host: ${baseUrl.origin}
`;

        return new Response(body, {
          headers: {
            "Content-Type": "text/plain",
          },
        });
      },
    },
  },
});
