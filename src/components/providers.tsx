"use client";

import { RootProvider } from "fumadocs-ui/provider/tanstack";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClientProvider } from "@/lib/query/client";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider>
      <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
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
