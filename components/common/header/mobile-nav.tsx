"use client";

import * as React from "react";
import Link, { type LinkProps } from "next/link";

import { PAGES_NEW } from "@/lib/docs";
import { getPagesFromFolder } from "@/lib/page-tree";
import { type source } from "@/lib/source";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const EXCLUDED_SECTIONS = new Set<string>([]);
const EXCLUDED_PAGES = new Set<string>([]);

export function MobileNav({
  tree,
  items,
  className,
}: {
  tree: typeof source.pageTree;
  items: { href: string; label: string }[];
  className?: string;
}) {
  const [open, setOpen] = React.useState(false);
  const topLevelPages = tree.children.filter(
    (
      item,
    ): item is (typeof tree.children)[number] & { url: string; name: string } =>
      !EXCLUDED_SECTIONS.has(item.$id ?? "") &&
      item.type !== "folder" &&
      "url" in item &&
      !EXCLUDED_PAGES.has(item.url),
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "extend-touch-target touch-manipulation items-center gap-2.5 p-0! hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 active:bg-transparent dark:hover:bg-transparent",
              className,
            )}
          >
            <div className="relative flex h-full w-4 items-center justify-center">
              <div className="relative size-4">
                <span
                  className={cn(
                    "bg-foreground absolute left-0 block h-0.5 w-4 transition-all duration-100",
                    open ? "top-[0.4rem] -rotate-45" : "top-1",
                  )}
                />
                <span
                  className={cn(
                    "bg-foreground absolute left-0 block h-0.5 w-4 transition-all duration-100",
                    open ? "top-[0.4rem] rotate-45" : "top-2.5",
                  )}
                />
              </div>
              <span className="sr-only">Toggle Menu</span>
            </div>
          </Button>
        }
      />
      <PopoverContent
        className="no-scrollbar bg-background/90 h-(--available-height) w-(--available-width) overflow-y-auto rounded-none border-none p-0 shadow-none ring-0 backdrop-blur duration-100 data-open:animate-none!"
        align="start"
        side="bottom"
        alignOffset={-16}
        sideOffset={14}
      >
        <div className="flex flex-col gap-10 overflow-auto p-5">
          <div className="flex flex-col gap-4">
            <div className="text-muted-foreground text-sm font-medium">
              Menu
            </div>
            <div className="flex flex-col gap-3">
              <MobileLink href="/" onOpenChange={setOpen}>
                Home
              </MobileLink>
              {items.map((item, index) => (
                <MobileLink key={index} href={item.href} onOpenChange={setOpen}>
                  {item.label}
                </MobileLink>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-muted-foreground text-sm font-medium">
              Sections
            </div>
            <div className="flex flex-col gap-3">
              {topLevelPages.map((item) => {
                return (
                  <MobileLink
                    key={item.url}
                    href={item.url}
                    onOpenChange={setOpen}
                  >
                    {item.name}
                    {PAGES_NEW.includes(item.url) && (
                      <span
                        className="flex size-2 rounded-full bg-blue-500"
                        title="New"
                      />
                    )}
                  </MobileLink>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-8">
            {tree?.children?.map((group) => {
              if (EXCLUDED_SECTIONS.has(group.$id ?? "")) {
                return null;
              }

              if (group.type !== "folder") {
                return null;
              }

              const pages = getPagesFromFolder(group);

              return (
                <div key={group.$id} className="flex flex-col gap-4">
                  <div className="text-muted-foreground text-sm font-medium">
                    {group.name}
                  </div>
                  <div className="flex flex-col gap-3">
                    {pages.map((item) => {
                      if (EXCLUDED_PAGES.has(item.url)) {
                        return null;
                      }

                      return (
                        <MobileLink
                          key={item.url}
                          href={item.url}
                          onOpenChange={setOpen}
                          className="flex items-center gap-2"
                        >
                          {item.name}
                          {PAGES_NEW.includes(item.url) && (
                            <span className="flex size-2 rounded-full bg-blue-500" />
                          )}
                        </MobileLink>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: LinkProps & {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      onClick={() => {
        onOpenChange?.(false);
      }}
      className={cn("flex items-center gap-2 text-2xl font-medium", className)}
      {...props}
    >
      {children}
    </Link>
  );
}
