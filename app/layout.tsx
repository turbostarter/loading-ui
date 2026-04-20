import { RootProvider } from "fumadocs-ui/provider/next";
import { Inter, Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import "./global.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/common/header";
import { ThemeProvider } from "next-themes";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(inter.className, "font-sans", geist.variable)}
      suppressHydrationWarning
    >
      <body
        data-slot="layout"
        className="group/layout bg-background relative z-10 flex min-h-svh flex-col [--footer-height:--spacing(14)] [--header-height:--spacing(14)]"
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
            <TooltipProvider>
              <Header />
              {children}
            </TooltipProvider>
          </RootProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
