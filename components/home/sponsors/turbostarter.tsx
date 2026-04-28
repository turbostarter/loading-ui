"use client";

import { Icons } from "@/components/common/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { track } from "@vercel/analytics";

export const TURBOSTARTER_URL = "https://www.turbostarter.dev?ref=loading-ui";

export const TurbostarterButton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLAnchorElement>) => (
  <a
    href={`${TURBOSTARTER_URL}?utm_source=loading-ui&utm_medium=referral`}
    target="_blank"
    className={cn(
      "border-border text-foreground hover:bg-accent flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm font-medium transition-colors",
      className,
    )}
    onClick={() =>
      track("sponsor_clicked", {
        sponsor: "turbostarter",
        source: "header",
      })
    }
    {...props}
  >
    <Icons.turbostarter className="size-4" />
    TurboStarter
  </a>
);

export function TurbostarterSidebarCta({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "group bg-surface text-surface-foreground relative flex flex-col gap-2 border-y p-6 text-sm",
        className,
      )}
      {...props}
    >
      <p className="text-base leading-tight tracking-tight font-semibold text-balance underline-offset-2 group-hover:underline">
        Build your SaaS in days, not months. On all platforms.
      </p>
      <p className="text-muted-foreground">
        Trusted by 280+ developers and founders.
      </p>
      <p className="text-muted-foreground">
        Get web, mobile and extension setup in minutes, so you can focus on your
        product.
      </p>
      <Button variant="outline" size="sm" className="mt-2 w-fit">
        Try TurboStarter
      </Button>
      <a
        href={`${TURBOSTARTER_URL}?utm_source=loading-ui&utm_medium=referral`}
        target="_blank"
        className="absolute inset-0"
        onClick={() =>
          track("sponsor_clicked", {
            sponsor: "turbostarter",
            source: "docs",
          })
        }
      >
        <span className="sr-only">Try TurboStarter</span>
      </a>
    </div>
  );
}

export const TurboStarterMobileNavCta = ({
  className,
  ...props
}: React.ComponentProps<"a">) => {
  return (
    <a
      href={`${TURBOSTARTER_URL}?utm_source=loading-ui&utm_medium=referral`}
      target="_blank"
      onClick={() =>
        track("sponsor_clicked", {
          sponsor: "turbostarter",
          source: "mobile-nav",
        })
      }
      className={cn(
        "group bg-surface text-surface-foreground relative flex flex-col gap-2 p-5 rounded-md text-sm",
        className,
      )}
      {...props}
    >
      <p className="text-base leading-tight tracking-tight font-semibold text-balance underline-offset-2 group-hover:underline">
        Build your SaaS in days, not months. On all platforms.
      </p>
      <p className="text-muted-foreground">
        Trusted by 280+ developers and founders.
      </p>
      <div
        className={cn(buttonVariants({ variant: "outline" }), "mt-2 w-full")}
      >
        Try <Icons.turbostarter className="size-4" /> TurboStarter
      </div>
    </a>
  );
};
