import env from "../env.config";
import type { Metadata } from "next/types";

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    metadataBase: baseUrl,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: baseUrl,
      images: "/images/banner.png",
      siteName: "Loading UI",
      type: "website",
      ...override.openGraph,
    },
    twitter: {
      card: "summary_large_image",
      creator: "@bzagrodzki",
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      images: "/images/banner.png",
      site: "@turbostarter_",
      ...override.twitter,
    },
  };
}

export const baseUrl =
  env.NODE_ENV === "development"
    ? new URL("http://localhost:3000")
    : new URL(env.NEXT_PUBLIC_SITE_URL ?? "https://loading-ui.com");
