import { createFileRoute } from "@tanstack/react-router";

import { absoluteUrl } from "@/lib/metadata";
import { source } from "@/lib/source";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = [
          {
            loc: absoluteUrl("/"),
            changefreq: "weekly",
            priority: "1.0",
          },
          ...source.getPages().map((page) => ({
            loc: absoluteUrl(page.url),
            changefreq: "weekly",
            priority: page.url === "/docs" ? "0.9" : "0.7",
          })),
        ];

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (entry) => `  <url>
    <loc>${entry.loc}</loc>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
          },
        });
      },
    },
  },
});
