"use client";

import { Icons } from "@/components/common/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { track } from "@vercel/analytics";

const RANKGROW_URL =
  "https://www.rankgrow.io?utm_source=loading-ui&utm_medium=referral";

export const RankgrowButton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLAnchorElement>) => (
  <a
    href={RANKGROW_URL}
    target="_blank"
    className={cn(
      "border-border text-foreground hover:bg-accent flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm font-medium transition-colors",
      className,
    )}
    onClick={() =>
      track("sponsor_clicked", {
        sponsor: "RankGrow",
        source: "header",
      })
    }
    {...props}
  >
    <Icons.rankgrow className="size-4" />
    RankGrow
  </a>
);

export const RankGrowMobileNavCta = ({
  className,
  ...props
}: React.ComponentProps<"a">) => {
  return (
    <a
      href={RANKGROW_URL}
      target="_blank"
      onClick={() =>
        track("sponsor_clicked", {
          sponsor: "RankGrow",
          source: "mobile-nav",
        })
      }
      className={cn(
        "group bg-surface text-surface-foreground relative flex flex-col gap-2 rounded-md p-5 text-sm",
        className,
      )}
      {...props}
    >
      <p className="text-base leading-tight font-semibold tracking-tight text-balance underline-offset-2 group-hover:underline">
        Rank higher on Google without hiring an agency.
      </p>
      <p className="text-muted-foreground">
        AI-powered SEO that grows your traffic.
      </p>
      <div
        className={cn(buttonVariants({ variant: "outline" }), "mt-2 w-full")}
      >
        Try <Icons.rankgrow className="size-4" /> RankGrow
      </div>
    </a>
  );
};
