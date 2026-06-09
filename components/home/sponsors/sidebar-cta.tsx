"use client";

import { ThemedImage } from "@/components/common/themed-image";
import { TIER_TITLES } from "@/components/home/sponsors/sponsors";
import { SPONSORS, SponsorTier } from "@/lib/sponsors";
import { cn } from "@/lib/utils";
import { track } from "@vercel/analytics";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export const SponsorsSidebarCta = () => {
  return (
    <div className="group text-surface-foreground relative flex flex-col gap-4 border-y px-6 py-5 text-sm">
      <div className="flex items-baseline justify-between">
        <span className="leading-tight font-medium tracking-tight">
          Sponsors
        </span>

        <Link
          href="/sponsors"
          className="text-primary inline-flex items-center gap-1 text-xs font-medium opacity-80 hover:opacity-100"
        >
          Become a sponsor
          <ExternalLink className="size-3 shrink-0 opacity-80" aria-hidden />
        </Link>
      </div>

      <div className="flex flex-col gap-2">
        {Object.entries(TIER_TITLES).map(([tier, title]) => {
          const sponsors = SPONSORS[tier as SponsorTier];

          return (
            sponsors.length > 0 && (
              <div key={tier} className="flex flex-col gap-1.5">
                <span className="text-muted-foreground/50 text-xs font-medium tracking-wide uppercase">
                  {title}
                </span>

                <ul
                  className={cn("grid gap-1", {
                    "grid-cols-1": tier === "diamond",
                    "grid-cols-2": tier === "gold",
                    "grid-cols-3": tier === "silver",
                  })}
                >
                  {sponsors.map((sponsor) => (
                    <li key={sponsor.id}>
                      <a
                        href={sponsor.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group/sponsor bg-background/25 hover:bg-accent flex h-12 items-center justify-center rounded-md border transition-colors"
                        onClick={() =>
                          track("sponsor_clicked", {
                            sponsor: sponsor.name,
                            source: "sidebar",
                          })
                        }
                      >
                        {"sm" in sponsor.image ? (
                          <sponsor.image.sm className="text-foreground h-full px-3 py-2" />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center px-4">
                            <ThemedImage
                              light={sponsor.image.light}
                              dark={sponsor.image.dark}
                              alt={sponsor.name}
                              width={332}
                              height={122}
                              className="w-full object-contain"
                            />
                          </div>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )
          );
        })}
      </div>

      <p className="text-muted-foreground text-center text-[11px]">
        45k+ users monthly · Limited spots
      </p>
    </div>
  );
};
