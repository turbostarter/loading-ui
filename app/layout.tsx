import { Analytics } from "@vercel/analytics/next";
import { cn } from "@/lib/utils";
import { Header } from "@/components/common/header";
import { createMetadata } from "@/lib/metadata";
import { fonts } from "@/lib/fonts";
import { Providers } from "../components/providers";
import "./global.css";

export const metadata = createMetadata({
  title: {
    template: "%s - Loading UI",
    default:
      "Loading UI - spinners, loaders, and loading animations for the web",
  },
  description:
    "Free and open source CSS and React loaders, spinners, and animations to create polished, accessible loading states for modern web apps.",
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
        <Providers>
          <Header />
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
