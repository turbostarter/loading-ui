"use client";

import { RootProvider } from "fumadocs-ui/provider/tanstack";
import type { ReactNode } from "react";

import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClientProvider } from "@/lib/query/client";
import { ThemeProvider } from "@/components/theme-provider";
import { AnalyticsProvider } from "@/lib/analytics/provider";
import { Waitlist } from "@/components/waitlist";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider>
      <ThemeProvider defaultTheme="system" storageKey="theme">
        <AnalyticsProvider>
          <RootProvider
            theme={{
              enabled: false,
            }}
          >
            <TooltipProvider delay={0}>
              {children}
              <Waitlist />
            </TooltipProvider>
          </RootProvider>
        </AnalyticsProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
