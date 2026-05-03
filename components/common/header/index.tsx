import { LINKS, Links } from "@/components/common/header/links";
import { Logo } from "@/components/common/header/logo";
import Link from "next/link";

import { Search } from "@/components/common/header/search";
import { GitHub } from "@/components/common/header/github";
import { ThemeSwitcher } from "@/components/common/theme-switcher";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { source } from "@/lib/source";
import { MobileNav } from "@/components/common/header/mobile-nav";
import { TurbostarterButton } from "@/components/home/sponsors/turbostarter";

export const Header = () => {
  return (
    <header className="bg-fd-background/80 sticky inset-x-0 top-0 z-40 h-(--header-height) border-b backdrop-blur-sm transition-colors">
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
          <TurbostarterButton className="hidden md:flex" />
          <ThemeSwitcher />
          <MobileNav
            tree={source.pageTree}
            items={LINKS}
            className="md:hidden"
          />
        </div>
      </div>
    </header>
  );
};
