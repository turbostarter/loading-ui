export const SITE_NAME = "Loading UI";
export const SITE_DESCRIPTION =
  "Free and open source CSS and React loaders, spinners, and animations to create polished, accessible loading states for modern web apps.";
export const DEFAULT_TITLE =
  "Loading UI - spinners, loaders, and loading animations for the web";

const SITE_NAME_TEMPLATE = `%s - ${SITE_NAME}`;
const PRODUCTION_HOST = "www.loading-ui.com";

type OpenGraphType =
  | "article"
  | "book"
  | "profile"
  | "website"
  | "video.movie"
  | "video.episode"
  | "video.other"
  | "video.tv_show";

type TwitterCard = "summary_large_image";

export type Metadata = {
  title?: string;
  description?: string;
  alternates?: {
    canonical?: string;
  };
  openGraph?: {
    title?: string;
    description?: string;
    url?: string;
    images?: string | readonly string[];
    siteName?: string;
    type?: OpenGraphType;
  };
  twitter?: {
    card?: TwitterCard;
    title?: string;
    description?: string;
    images?: string | readonly string[];
    creator?: string;
    site?: string;
  };
};

type ResolvedImage = {
  url: string;
  width: number;
  height: number;
  alt: string;
};

export function getBaseUrl() {
  if (import.meta.env.DEV) {
    return new URL("http://localhost:3000");
  }

  const siteUrl = import.meta.env.SSR ? process.env.SITE_URL : undefined;
  if (siteUrl) {
    return new URL(siteUrl);
  }

  return new URL(`https://${PRODUCTION_HOST}`);
}

export const baseUrl = getBaseUrl();

export function absoluteUrl(path = "/") {
  return new URL(path, baseUrl).toString();
}

function formatTitle(title: string) {
  return SITE_NAME_TEMPLATE.replace("%s", title);
}

function resolveDocumentTitle(title?: string) {
  return title ? formatTitle(title) : DEFAULT_TITLE;
}

function resolveUrl(url: string) {
  return url.startsWith("http") ? url : absoluteUrl(url);
}

function resolveImage(images?: string | readonly string[]): ResolvedImage {
  const path = Array.isArray(images) ? images[0] : images;

  return {
    url: path ? resolveUrl(path) : absoluteUrl("/images/banner.png"),
    width: 1200,
    height: 630,
    alt: SITE_NAME,
  };
}

function resolveMetadata(override: Metadata = {}): Metadata {
  const description = override.description ?? SITE_DESCRIPTION;
  const title = resolveDocumentTitle(override.title);
  const canonical = override.alternates?.canonical;
  const defaultImage = "/images/banner.png";

  const openGraph = {
    title,
    description,
    url: canonical ? absoluteUrl(canonical) : baseUrl.toString(),
    images: defaultImage,
    siteName: SITE_NAME,
    type: "website" as const,
    ...override.openGraph,
  };

  const twitter = {
    card: "summary_large_image" as const,
    creator: "@bzagrodzki",
    site: "@turbostarter_",
    title,
    description,
    images: openGraph.images,
    ...override.twitter,
  };

  return {
    ...override,
    title,
    description,
    openGraph,
    twitter,
    ...(canonical ? { alternates: { canonical } } : {}),
  };
}

function metadataToHead(metadata: Metadata) {
  const title = metadata.title ?? DEFAULT_TITLE;
  const description = metadata.description ?? SITE_DESCRIPTION;
  const og = metadata.openGraph ?? {};
  const twitter = metadata.twitter ?? {};
  const image = resolveImage(twitter.images ?? og.images);
  const ogUrl = og.url ? resolveUrl(og.url) : baseUrl.toString();
  const canonical = metadata.alternates?.canonical;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: og.title ?? title },
      { property: "og:description", content: og.description ?? description },
      { property: "og:url", content: ogUrl },
      { property: "og:site_name", content: og.siteName ?? SITE_NAME },
      { property: "og:type", content: og.type ?? "website" },
      { property: "og:image", content: image.url },
      { property: "og:image:width", content: String(image.width) },
      { property: "og:image:height", content: String(image.height) },
      { property: "og:image:alt", content: image.alt },
      {
        name: "twitter:card",
        content: twitter.card ?? "summary_large_image",
      },
      { name: "twitter:creator", content: twitter.creator ?? "@bzagrodzki" },
      { name: "twitter:site", content: twitter.site ?? "@turbostarter_" },
      { name: "twitter:title", content: twitter.title ?? title },
      {
        name: "twitter:description",
        content: twitter.description ?? description,
      },
      { name: "twitter:image", content: image.url },
    ],
    ...(canonical
      ? {
          links: [
            {
              rel: "canonical" as const,
              href: absoluteUrl(canonical),
            },
          ],
        }
      : {}),
  };
}

export function createMetadata(override: Metadata = {}) {
  const metadata = resolveMetadata(override);
  return () => metadataToHead(metadata);
}

export const defaultMetadata = createMetadata();
