export const SITE = {
  id: "loading-ui",
  name: "Loading UI",
  url: "https://loading-ui.com",
  title: "Loading UI - spinners, loaders and animations",
  description:
    "Loading UI offers free, open source spinners, loaders, and animations for SaaS, web apps, docs sites, and polished loading states.",
  image: {
    url: "/banner.png",
    alt: `Loading UI preview image`,
  },
  author: {
    name: "Bart Zagrodzki",
    twitter: "@bzagrodzki",
  },
} as const;

type MetadataImage = {
  url: string;
  alt?: string;
};

type MetadataInput = {
  title?: string;
  description?: string;
  type?: "website" | "article";
  image?: MetadataImage;
};

export function getMetadata({
  title,
  description = SITE.description,
  type = "website",
  image,
}: MetadataInput = {}) {
  const resolvedTitle = title ? `${title} - ${SITE.name}` : SITE.title;
  const resolvedImage = image ?? SITE.image;

  return [
    { title: resolvedTitle },
    { name: "description", content: description },
    { property: "og:site_name", content: SITE.name },
    { property: "og:title", content: resolvedTitle },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: resolvedTitle },
    { name: "twitter:description", content: description },
    { property: "og:image", content: resolvedImage.url },
    { property: "og:image:alt", content: resolvedImage.alt ?? resolvedTitle },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { name: "twitter:image", content: resolvedImage.url },
    { name: "twitter:image:alt", content: resolvedImage.alt ?? resolvedTitle },
  ];
}
