import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import { Header } from "@/components/common/header";
import { PageTreeProvider, usePageTree } from "@/components/docs/tree-context";
import { Providers } from "@/components/providers";
import { fonts } from "@/lib/fonts";
import { createHead } from "@/lib/metadata";
import { getSerializedPageTree } from "@/lib/server";
import { cn } from "@/lib/utils";
import "@/assets/styles/colors.css";
import "@/assets/styles/global.css";

const defaultHead = createHead();

export const Route = createRootRoute({
  loader: () => getSerializedPageTree(),
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      ...defaultHead.meta,
    ],
    links: [
      { rel: "icon", href: "/favicon.ico" },
      { rel: "icon", type: "image/svg+xml", href: "/icon.svg" },
      { rel: "apple-touch-icon", href: "/apple-icon.png" },
      ...defaultHead.links,
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  const pageTree = Route.useLoaderData();

  return (
    <RootDocument>
      <PageTreeProvider tree={pageTree}>
        <Providers>
          <RootHeader />
          <Outlet />
        </Providers>
      </PageTreeProvider>
    </RootDocument>
  );
}

function RootHeader() {
  const pageTree = usePageTree();
  return <Header tree={pageTree} />;
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body
        data-slot="layout"
        className={cn(
          "group/layout bg-background relative z-10 flex min-h-svh flex-col [--footer-height:--spacing(14)] [--header-height:--spacing(14)]",
          fonts,
        )}
      >
        {children}
        <Scripts />
      </body>
    </html>
  );
}
