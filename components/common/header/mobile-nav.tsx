"use client";

import * as React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PAGES_NEW } from "@/lib/docs";
import { getPagesFromFolder } from "@/lib/page-tree";
import { type source } from "@/lib/source";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const SIDEBAR_LINK_CLASS_NAME =
  "data-[active=true]:border-accent data-[active=true]:bg-accent relative flex h-[30px] w-fit items-center gap-2 overflow-visible rounded-md border border-transparent px-2 text-[0.8rem] font-medium after:absolute after:inset-x-0 after:-inset-y-1 after:z-0 after:rounded-md";

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
  const pathname = usePathname();
  const topLevelPages = tree.children.filter(
    (
      item,
    ): item is (typeof tree.children)[number] & { url: string; name: string } =>
      item.type !== "folder" && "url" in item,
  );
  const groups = tree.children.filter(
    (
      item,
    ): item is (typeof tree.children)[number] & {
      type: "folder";
      $id?: string | null;
      name: string;
    } => item.type === "folder",
  );
  const trigger = (
    <Button
      variant="ghost"
      className={cn(
        "extend-touch-target h-8 touch-manipulation items-center justify-start gap-2.5 p-0! hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 active:bg-transparent dark:hover:bg-transparent",
        className,
      )}
    >
      <div className="relative flex h-8 w-4 items-center justify-center">
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
      <span className="flex h-8 items-center text-lg leading-none font-medium">
        Menu
      </span>
    </Button>
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger render={trigger} />
      <PopoverContent
        className="no-scrollbar bg-background/90 max-h-[calc(100svh-var(--header-height)-1.5rem)] w-[min(24rem,calc(100vw-2rem))] overflow-y-auto rounded-none border-none p-0 shadow-none backdrop-blur duration-100 data-open:animate-none!"
        align="start"
        side="bottom"
        alignOffset={-16}
        sideOffset={14}
      >
        <div className="flex flex-col gap-12 overflow-auto px-6 py-6">
          <div className="flex flex-col gap-4">
            <div className="text-muted-foreground text-sm font-medium">
              Menu
            </div>
            <div className="flex flex-col gap-1">
              <MobileNavLink
                href="/"
                isActive={pathname === "/"}
                onOpenChange={setOpen}
              >
                Home
              </MobileNavLink>
              {items.map(item => (
                <MobileNavLink
                  key={item.href}
                  href={item.href}
                  isActive={pathname === item.href}
                  onOpenChange={setOpen}
                >
                  {item.label}
                </MobileNavLink>
              ))}
            </div>
          </div>
          {topLevelPages.length > 0 ? (
            <div className="flex flex-col gap-4">
              <div className="text-muted-foreground text-sm font-medium">
                Docs
              </div>
              <div className="flex flex-col gap-1">
                {topLevelPages.map(item => (
                  <MobileNavLink
                    key={item.url}
                    href={item.url}
                    isActive={item.url === pathname}
                    onOpenChange={setOpen}
                  >
                    {item.name}
                    {PAGES_NEW.includes(item.url) ? (
                      <span
                        className="flex size-2 rounded-full bg-blue-500"
                        title="New"
                      />
                    ) : null}
                  </MobileNavLink>
                ))}
              </div>
            </div>
          ) : null}
          <div className="flex flex-col gap-8">
            {groups.map(group => (
              <div
                key={group.$id ?? group.name}
                className="flex flex-col gap-4"
              >
                <div className="text-muted-foreground text-sm font-medium">
                  {group.name}
                </div>
                <div className="flex flex-col gap-1">
                  {getPagesFromFolder(group).map(page => (
                    <MobileNavLink
                      key={page.url}
                      href={page.url}
                      isActive={page.url === pathname}
                      onOpenChange={setOpen}
                    >
                      {page.name}
                      {PAGES_NEW.includes(page.url) ? (
                        <span
                          className="flex size-2 rounded-full bg-blue-500"
                          title="New"
                        />
                      ) : null}
                    </MobileNavLink>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

function MobileNavLink({
  href,
  isActive,
  onOpenChange,
  children,
}: {
  href: string;
  isActive: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      data-active={isActive}
      onClick={() => onOpenChange?.(false)}
      className={SIDEBAR_LINK_CLASS_NAME}
    >
      <span className="absolute inset-0 flex bg-transparent" />
      {children}
    </Link>
  );
}
