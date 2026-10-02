import { Link as RouterLink } from "@tanstack/react-router";
import type { ComponentProps } from "react";

type LinkProps = Omit<ComponentProps<"a">, "href"> & {
  href?: string;
  prefetch?: boolean;
};

function isExternalHref(href: string) {
  return /^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(href);
}

export function Link({ href, prefetch, children, ...props }: LinkProps) {
  if (!href || isExternalHref(href) || props.download != null) {
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
