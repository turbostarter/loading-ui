"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClientProvider } from "@/lib/query/client";
import { RootProvider } from "fumadocs-ui/provider/next";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider>
      <ThemeProvider
        attribute="class"
        enableSystem
        disableTransitionOnChange
        scriptProps={
          typeof window === "undefined"
            ? undefined
            : ({ type: "application/json" } as const)
        }
      >
        <RootProvider
          theme={{
            enabled: false,
          }}
        >
          <TooltipProvider delay={0}>{children}</TooltipProvider>
        </RootProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
