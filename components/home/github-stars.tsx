"use client";

import { Icons } from "@/components/common/icons";
import { buttonVariants } from "@/components/ui/button";
import { GITHUB_URL } from "@/lib/constants";
import { Star } from "lucide-react";
import { track } from "@vercel/analytics";

export const GitHubStars = ({ stars }: { stars: number }) => {
  return (
    <a
      className={buttonVariants({
        className: "px-3.5 md:h-10",
      })}
      href={GITHUB_URL}
      target="_blank"
      rel="noreferrer noopener"
      onClick={() => track("github_clicked", { source: "hero" })}
    >
      <span className="sr-only">Star on GitHub</span>
      <Icons.gitHub className="size-3.5 md:size-4" />
      <div className="border-background/25 ml-1.5 flex h-full items-center justify-center gap-1.5 border-l pl-2.5">
        <Star className="-mt-px size-3.5 fill-current text-yellow-500 md:size-4" />
        {stars}
      </div>
    </a>
  );
};
