import { ArrowLeft, ArrowRight } from "lucide-react";
import { use } from "react";

import { DocsCopyPage } from "@/components/docs/copy-page";
import { DocsTableOfContents } from "@/components/docs/toc";
import { Link } from "@/components/common/link";
import { mdxComponents } from "@/components/mdx";
import { SponsorsSidebarCta } from "@/components/home/sponsors/sidebar-cta";
import { buttonVariants } from "@/components/ui/button";
import type { DocsPageData } from "@/lib/server";
import { docs } from "@/lib/source";
import { cn } from "@/lib/utils";

export function DocsPageView({
  path,
  title,
  description,
  markdownUrl,
  raw,
  neighbours,
}: Pick<
  DocsPageData,
  "path" | "title" | "description" | "markdownUrl" | "raw" | "neighbours"
>) {
  const page = docs.getPage(path);
  if (!page) {
    throw new Error(`unknown page: ${path}`);
  }

  const { toc } = use(page.load());
  const MDX = page.body;

  return (
    <main
      data-slot="docs"
      className="flex w-full scroll-mt-24 items-stretch text-[1.05rem] sm:text-[15px]"
    >
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="h-(--top-spacing) shrink-0" />
        <div className="mx-auto flex w-full max-w-[40rem] min-w-0 flex-1 flex-col gap-6 px-6 py-8 text-neutral-800 md:px-0 dark:text-neutral-300">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between md:items-start">
                <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight sm:text-3xl">
                  {title}
                </h1>
                <div className="docs-nav flex items-center gap-2">
                  <div className="hidden sm:block">
                    <DocsCopyPage page={raw} url={markdownUrl} />
                  </div>
                  <div className="ml-auto flex gap-1">
                    {neighbours.previous ? (
                      <Link
                        href={neighbours.previous.url}
                        className={cn(
                          buttonVariants({
                            variant: "secondary",
                            size: "icon-sm",
                          }),
                          "extend-touch-target shadow-none",
                        )}
                      >
                        <ArrowLeft />
                        <span className="sr-only">Previous</span>
                      </Link>
                    ) : null}
                    {neighbours.next ? (
                      <Link
                        href={neighbours.next.url}
                        className={cn(
                          buttonVariants({
                            variant: "secondary",
                            size: "icon-sm",
                          }),
                          "extend-touch-target shadow-none",
                        )}
                      >
                        <span className="sr-only">Next</span>
                        <ArrowRight />
                      </Link>
                    ) : null}
                  </div>
                </div>
              </div>
              {description ? (
                <p className="text-muted-foreground text-[1.05rem] sm:text-base sm:text-balance md:max-w-[80%]">
                  {description}
                </p>
              ) : null}
            </div>
          </div>
          <div className="w-full flex-1 *:data-[slot=alert]:first:mt-0">
            <MDX components={mdxComponents} />
          </div>
          <div className="flex h-16 w-full items-center gap-2">
            {neighbours.previous ? (
              <Link
                href={neighbours.previous.url}
                className={cn(
                  buttonVariants({
                    variant: "secondary",
                    size: "sm",
                  }),
                  "shadow-none",
                )}
              >
                <ArrowLeft /> {neighbours.previous.name}
              </Link>
            ) : null}
            {neighbours.next ? (
              <Link
                href={neighbours.next.url}
                className={cn(
                  buttonVariants({
                    variant: "secondary",
                  }),
                  "ml-auto shadow-none",
                )}
              >
                {neighbours.next.name} <ArrowRight />
              </Link>
            ) : null}
          </div>
        </div>
      </div>
      <div className="sticky top-(--header-height) z-30 ml-auto hidden h-[calc(100svh-var(--header-height))] w-(--sidebar-width) flex-col gap-6 overflow-hidden overscroll-none border-l pb-8 xl:flex">
        <div className="h-(--top-spacing) w-full shrink-0" />
        {toc?.length ? (
          <div className="no-scrollbar flex flex-col gap-8 overflow-y-auto px-6">
            <DocsTableOfContents toc={toc} />
          </div>
        ) : null}
        <SponsorsSidebarCta />
      </div>
    </main>
  );
}
