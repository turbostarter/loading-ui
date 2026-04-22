"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

export function CopyButton({
  value,
  className,
  variant = "ghost",
  icon = <Copy />,
  onClick,
  ...props
}: React.ComponentProps<typeof Button> & {
  value: string;
  src?: string;
  icon?: React.ReactNode;
}) {
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  return (
    <Button
      data-slot="copy-button"
      data-copied={isCopied}
      size="icon"
      variant={variant}
      className={cn(
        "bg-code absolute top-3 right-2 z-10 size-7 hover:opacity-100 focus-visible:opacity-100",
        className,
      )}
      onClick={async (e) => {
        await copyToClipboard(value);
        onClick?.(e);
      }}
      {...props}
    >
      <span className="sr-only">Copy</span>
      {isCopied ? <Check /> : icon}
    </Button>
  );
}
