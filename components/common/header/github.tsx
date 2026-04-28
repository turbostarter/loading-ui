"use client";

import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/common/icons";
import { GITHUB_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { track } from "@vercel/analytics";

export const GitHub = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      href={GITHUB_URL}
      target="_blank"
      rel="noreferrer noopener"
      className={cn(buttonVariants({ variant: "ghost" }), className)}
      onClick={() =>
        track("github_clicked", {
          source: "header",
        })
      }
      {...props}
    >
      <Icons.gitHub className="size-4" />
      <span className="sr-only">GitHub</span>
    </a>
  );
};
