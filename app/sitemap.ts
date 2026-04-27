import { source } from "@/lib/source";
import { baseUrl } from "@/lib/metadata";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl.toString(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...source.getPages().map((page) => ({
      url: new URL(page.url, baseUrl).toString(),
      changeFrequency: "weekly" as const,
      priority: page.url === "/docs" ? 0.9 : 0.7,
    })),
  ];
}
