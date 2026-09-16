import env from "../env.config";

export const SITE_NAME = "Loading UI";
export const SITE_DESCRIPTION =
  "Free and open source CSS and React loaders, spinners, and animations to create polished, accessible loading states for modern web apps.";
export const DEFAULT_TITLE =
  "Loading UI - spinners, loaders, and loading animations for the web";

export const baseUrl =
  env.NODE_ENV === "development"
    ? new URL("http://localhost:3000")
    : new URL(
        `https://${env.VERCEL_PROJECT_PRODUCTION_URL ?? "loading-ui.com"}`,
      );

export type HeadMeta = {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
};

export function absoluteUrl(path = "/") {
  return new URL(path, baseUrl).toString();
}

export function createHead(override: HeadMeta = {}) {
  const title = override.title ?? DEFAULT_TITLE;
  const description = override.description ?? SITE_DESCRIPTION;
  const url = absoluteUrl(override.canonical ?? "/");
  const image = override.image?.startsWith("http")
    ? override.image
    : absoluteUrl(override.image ?? "/images/banner.png");

  const links = override.canonical
    ? [{ rel: "canonical" as const, href: url }]
    : [];

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:creator", content: "@bzagrodzki" },
      { name: "twitter:site", content: "@turbostarter_" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    links,
  };
}

export function pageTitle(title: string) {
  return `${title} - ${SITE_NAME}`;
}
