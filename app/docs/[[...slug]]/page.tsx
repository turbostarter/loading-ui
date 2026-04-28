import { getPageMarkdownUrl, source } from "@/lib/source";
import { notFound } from "next/navigation";
import { DocsCopyPage } from "@/components/docs/copy-page";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { findNeighbour } from "fumadocs-core/page-tree";
import { DocsTableOfContents } from "@/components/docs/toc";
import { mdxComponents } from "@/components/mdx";
import { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { TurbostarterSidebarCta } from "@/components/home/sponsors/turbostarter";

export default async function Page(props: PageProps<"/docs/[[...slug]]">) {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) {
    return notFound();
  }

  const MDX = page.data.body;
  const markdownUrl = getPageMarkdownUrl(page).url;
  const neighbours = findNeighbour(source.getPageTree(), page.url);

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
                  {page.data.title}
                </h1>
                <div className="docs-nav flex items-center gap-2">
                  <div className="hidden sm:block">
                    <DocsCopyPage
                      page={await page.data.getText("raw")}
                      url={markdownUrl}
                    />
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
              {page.data.description ? (
                <p className="text-muted-foreground text-[1.05rem] sm:text-base sm:text-balance md:max-w-[80%]">
                  {page.data.description}
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
        {page.data.toc?.length ? (
          <div className="no-scrollbar flex flex-col gap-8 overflow-y-auto px-6">
            <DocsTableOfContents toc={page.data.toc} />
          </div>
        ) : null}
        <TurbostarterSidebarCta />
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata({
  params,
}: PageProps<"/docs/[[...slug]]">): Promise<Metadata> {
  const { slug = [] } = await params;
  const page = source.getPage(slug);

  if (!page) {
    return notFound();
  }

  const image = ["/api/og", ...slug, "image.png"].join("/");

  return createMetadata({
    title: page.data.title,
    openGraph: {
      url: `/docs/${page.slugs.join("/")}`,
      images: [image],
    },
    twitter: {
      images: [image],
    },
    ...(page.data.description && {
      description: page.data.description,
    }),
  });
}
