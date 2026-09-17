"use client";

import { Analytics } from "@vercel/analytics/react";
import { RootProvider } from "fumadocs-ui/provider/tanstack";
import type { ReactNode } from "react";

import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClientProvider } from "@/lib/query/client";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider>
      <RootProvider
        theme={{
          enabled: false,
        }}
      >
        <TooltipProvider delay={0}>{children}</TooltipProvider>
      </RootProvider>
      <Analytics />
    </QueryClientProvider>
  );
}
