"use client";

import { buttonVariants } from "@/components/ui/button";
import { GITHUB_URL } from "@/lib/constants";
import { track } from "@vercel/analytics";
import Link from "next/link";

export const RequestComponent = () => {
  return (
    <div className="bg-background flex min-h-0 w-full min-w-0 flex-1 flex-col items-center justify-center gap-4 self-stretch px-8 py-16 sm:w-auto sm:min-w-40">
      <div className="flex flex-col items-center gap-2">
        <span className="text-lg font-medium">Missing component?</span>
        <p className="text-muted-foreground max-w-md text-center text-sm text-pretty">
          We're always looking for new components to add to the library. If you
          have an idea for a component, please let us know.
        </p>
      </div>
      <Link
        href={`${GITHUB_URL}/issues/new?template=feature_request.yml&labels=new-component`}
        target="_blank"
        rel="noreferrer noopener"
        className={buttonVariants({
          variant: "outline",
          className: "px-3",
        })}
        onClick={() => track("request_component_clicked")}
      >
        Request a component
      </Link>
    </div>
  );
};
