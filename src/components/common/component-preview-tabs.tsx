"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function ComponentPreviewTabs({
  className,
  previewClassName,
  align = "center",
  hideCode = false,
  chromeLessOnMobile = false,
  component,
  source,
  sourcePreview,
  ...props
}: React.ComponentProps<"div"> & {
  previewClassName?: string;
  align?: "center" | "start" | "end";
  hideCode?: boolean;
  chromeLessOnMobile?: boolean;
  component: React.ReactNode;
  source: React.ReactNode;
  sourcePreview?: React.ReactNode;
}) {
  const [isMobileCodeVisible, setIsMobileCodeVisible] = React.useState(false);

  return (
    <div
      data-slot="component-preview"
      className={cn(
        "group relative mt-4 mb-12 flex flex-col overflow-hidden rounded-xl border",
        className,
      )}
      {...props}
    >
      <PreviewWrapper
        align={align}
        chromeLessOnMobile={chromeLessOnMobile}
        previewClassName={previewClassName}
      >
        {component}
      </PreviewWrapper>
      {!hideCode && (
        <div
          data-slot="code"
          data-mobile-code-visible={isMobileCodeVisible}
          className="relative overflow-hidden **:data-rehype-pretty-code-figure:m-0! **:data-rehype-pretty-code-figure:rounded-t-none **:data-rehype-pretty-code-figure:border-t **:data-[slot=copy-button]:right-4 **:data-[slot=copy-button]:hidden data-[mobile-code-visible=true]:**:data-[slot=copy-button]:flex [&_pre]:max-h-72"
        >
          {isMobileCodeVisible ? (
            source
          ) : (
            <div className="relative">
              {sourcePreview}
              <div className="absolute inset-0 flex items-center justify-center py-4">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, var(--color-code), color-mix(in oklab, var(--color-code) 80%, transparent), transparent)",
                  }}
                />
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  className="bg-background text-foreground hover:bg-muted dark:bg-background dark:text-foreground dark:hover:bg-muted relative z-10 rounded-lg shadow-none"
                  onClick={() => {
                    setIsMobileCodeVisible(true);
                  }}
                >
                  View Code
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function PreviewWrapper({
  align,
  chromeLessOnMobile,
  previewClassName,
  children,
}: {
  align: "center" | "start" | "end";
  chromeLessOnMobile: boolean;
  previewClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <div data-slot="preview">
      <div
        data-align={align}
        data-chromeless={chromeLessOnMobile}
        className={cn(
          "preview relative flex h-72 w-full justify-center p-10 data-[align=center]:items-center data-[align=end]:items-end data-[align=start]:items-start data-[chromeless=true]:h-auto data-[chromeless=true]:p-0",
          previewClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
}
