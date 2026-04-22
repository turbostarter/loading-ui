"use client";

import { getPagesFromFolder } from "@/lib/page-tree";
import type { source } from "@/lib/source";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { PAGES_NEW } from "@/lib/docs";
import { usePathname } from "next/navigation";

const EXCLUDED_SECTIONS = new Set<string>([]);
const EXCLUDED_PAGES = new Set<string>([]);

export function DocsSidebar({
  tree,
  ...props
}: React.ComponentProps<typeof Sidebar> & { tree: typeof source.pageTree }) {
  const pathname = usePathname();
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
    <Sidebar
      className="sticky top-(--header-height) z-30 hidden h-[calc(100svh-var(--header-height))] overscroll-none border-r bg-transparent px-4 [--sidebar-menu-width:--spacing(56)] lg:flex"
      collapsible="none"
      {...props}
    >
      <SidebarContent className="no-scrollbar w-(--sidebar-menu-width) overflow-x-hidden pb-8">
        {topLevelPages.length > 0 && (
          <SidebarGroup className="pt-6">
            <SidebarGroupContent>
              <SidebarMenu>
                {topLevelPages.map((item) => (
                  <SidebarMenuItem key={item.url}>
                    <SidebarMenuButton
                      isActive={item.url === pathname}
                      className="data-[active=true]:border-accent data-[active=true]:bg-accent 3xl:fixed:w-full 3xl:fixed:max-w-48 relative h-[30px] w-fit overflow-visible border border-transparent text-[0.8rem] font-medium after:absolute after:inset-x-0 after:-inset-y-1 after:z-0 after:rounded-md"
                      render={
                        <Link href={item.url}>
                          <span className="absolute inset-0 flex w-(--sidebar-menu-width) bg-transparent" />
                          {item.name}
                          {PAGES_NEW.includes(item.url) && (
                            <span
                              className="flex size-2 rounded-full bg-blue-500"
                              title="New"
                            />
                          )}
                        </Link>
                      }
                    />
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
        {tree.children.map((item) => {
          if (EXCLUDED_SECTIONS.has(item.$id ?? "")) {
            return null;
          }

          if (item.type !== "folder") {
            return null;
          }

          return (
            <SidebarGroup key={item.$id}>
              <SidebarGroupLabel className="text-muted-foreground font-medium">
                {item.name}
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {getPagesFromFolder(item).map((page) => {
                    if (EXCLUDED_PAGES.has(page.url)) {
                      return null;
                    }

                    return (
                      <SidebarMenuItem key={page.url}>
                        <SidebarMenuButton
                          isActive={page.url === pathname}
                          className="data-[active=true]:border-accent data-[active=true]:bg-accent 3xl:fixed:w-full 3xl:fixed:max-w-48 relative h-[30px] w-fit overflow-visible border border-transparent text-[0.8rem] font-medium after:absolute after:inset-x-0 after:-inset-y-1 after:z-0 after:rounded-md"
                          render={
                            <Link href={page.url}>
                              <span className="absolute inset-0 flex w-(--sidebar-menu-width) bg-transparent" />
                              {page.name}
                              {PAGES_NEW.includes(page.url) && (
                                <span
                                  className="flex size-2 rounded-full bg-blue-500"
                                  title="New"
                                />
                              )}
                            </Link>
                          }
                        />
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          );
        })}
        <div className="from-background via-background/80 to-background/50 pointer-events-none absolute inset-x-2 -bottom-1 z-10 h-16 shrink-0 bg-linear-to-t blur-xs" />
      </SidebarContent>
    </Sidebar>
  );
}
