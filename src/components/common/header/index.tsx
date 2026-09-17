"use client";

import { LINKS, Links } from "@/components/common/header/links";
import { Logo } from "@/components/common/header/logo";
import { Link } from "@/components/common/link";
import { GitHub } from "@/components/common/header/github";
import { ThemeSwitcher } from "@/components/common/theme-switcher";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import type { source } from "@/lib/source";
import { DiamondSponsorHeaderCta } from "@/components/home/sponsors/diamond";
import { Search } from "@/components/common/header/search";
import { MobileNav } from "@/components/common/header/mobile-nav";

export const Header = ({ tree }: { tree: typeof source.pageTree }) => {
  return (
    <header className="bg-background/80 sticky inset-x-0 top-0 z-40 h-(--header-height) border-b backdrop-blur-sm transition-colors">
      <div className="container mx-auto flex size-full items-center justify-between gap-2 px-3 md:px-4">
        <nav className="flex items-center gap-3">
          <Link
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "h-auto px-3 py-1.5",
            )}
            href="/"
          >
            <Logo />
          </Link>
          <Links className="hidden gap-1 md:flex" />
        </nav>

        <div className="flex flex-auto items-center justify-end md:gap-2">
          <Search className="hidden md:flex" />
          <GitHub />
          <DiamondSponsorHeaderCta className="hidden md:flex" />
          <ThemeSwitcher />
          <MobileNav tree={tree} items={LINKS} className="md:hidden" />
        </div>
      </div>
    </header>
  );
};
