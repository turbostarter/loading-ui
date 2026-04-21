import { RootProvider } from "fumadocs-ui/provider/next";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/common/header";
import { ThemeProvider } from "next-themes";
import { createMetadata } from "@/lib/metadata";
import { fonts } from "@/lib/fonts";
import "./global.css";

export const metadata = createMetadata({
  title: {
    template: "%s - Loading UI",
    default: "Loading UI - spinners, loaders and animations",
  },
  description:
    "Loading UI offers free, open source spinners, loaders, and animations for SaaS, web apps, docs sites, and polished loading states.",
});

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        data-slot="layout"
        className={cn(
          "group/layout bg-background relative z-10 flex min-h-svh flex-col [--footer-height:--spacing(14)] [--header-height:--spacing(14)]",
          fonts,
        )}
      >
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
            <TooltipProvider delay={0}>
              <Header />
              {children}
            </TooltipProvider>
          </RootProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
