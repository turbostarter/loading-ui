import { Link as RouterLink } from "@tanstack/react-router";
import type { ComponentProps } from "react";

type LinkProps = Omit<ComponentProps<"a">, "href"> & {
  href: string;
  prefetch?: boolean;
};

function isExternalHref(href: string) {
  return (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#")
  );
}

export function Link({ href, prefetch, children, ...props }: LinkProps) {
  if (isExternalHref(href)) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <RouterLink
      to={href}
      preload={prefetch === false ? false : undefined}
      {...props}
    >
      {children}
    </RouterLink>
  );
}
