"use client";

import { MAX, Sponsor, SPONSORS, SponsorTier } from "@/lib/sponsors";
import { buttonVariants } from "@/components/ui/button";
import { EMAIL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { track } from "@vercel/analytics";
import { ArrowUpRight, Gem, Crown, Medal, Megaphone } from "lucide-react";

export const SponsorCard = ({
  tier,
  sponsor,
}: {
  tier: SponsorTier;
  sponsor: Sponsor;
}) => {
  return (
    <a
      href={sponsor.url}
      target="_blank"
      rel="noreferrer noopener"
      className="group/sponsor bg-background hover:bg-accent transition-colors"
      onClick={() =>
        track("sponsor_clicked", { sponsor: sponsor.name, source: "sponsors" })
      }
    >
      <div
        className={cn("w-full border-b", {
          "h-[260px]": tier === "diamond",
          "h-[200px]": tier === "gold",
          "h-[170px]": tier === "silver",
        })}
      >
        <sponsor.image className="size-full p-8 md:p-12 lg:p-16" />
      </div>
      <div className="flex items-center justify-between px-6 py-4">
        <div className="inline-flex items-center gap-2 text-sm tracking-tight md:text-base">
          <span className=" truncate font-medium ">{sponsor.name}</span>
          <span className="text-muted-foreground">
            {new URL(sponsor.url).hostname}
          </span>
        </div>
        <ArrowUpRight className="size-4 opacity-0 transition-opacity group-hover/sponsor:opacity-100 pointer-coarse:opacity-100" />
      </div>
    </a>
  );
};

const SPONSOR_CHECKOUT_LINKS = {
  diamond:
    "https://turbostarter.lemonsqueezy.com/checkout/buy/3a95e025-f05f-4dcf-bd51-5dbb4b87fd1e?enabled=1586301",
  gold: "https://turbostarter.lemonsqueezy.com/checkout/buy/cb7953d5-778d-4a0d-98a1-1bcc68ace60d?enabled=1586296",
  silver:
    "https://turbostarter.lemonsqueezy.com/checkout/buy/e309dd4f-a685-40eb-a364-d4c62ed2d98e?enabled=1586280",
} as const;

export const AdvertiseCta = ({ tier }: { tier: SponsorTier }) => {
  return (
    <a
      href={SPONSOR_CHECKOUT_LINKS[tier]}
      className={cn(
        "group/sponsor bg-background hover:bg-accent text-muted-foreground hover:text-foreground flex h-full  flex-col items-center justify-center gap-6 p-16 tracking-tight transition-colors",
        {
          "min-h-[250px] ": tier === "diamond",
          "min-h-[220px]": tier === "gold",
          "min-h-[180px]": tier === "silver",
        },
      )}
      rel="nofollow noopener noreferrer"
      target="_blank"
      onClick={() =>
        track("sponsor_outbound_click", {
          tier,
        })
      }
    >
      <Megaphone className="size-8 md:size-10" strokeWidth={1.5} />
      <div className="flex flex-col items-center">
        <span className="md:text-lg">Become a Sponsor</span>
        <span className="text-sm md:text-base">
          {MAX[tier] - SPONSORS[tier].length} / {MAX[tier]} spots left
        </span>
      </div>
    </a>
  );
};

export const SponsorsCta = () => {
  return (
    <a
      href={`mailto:${EMAIL}`}
      className={buttonVariants({ size: "lg" })}
      target="_blank"
      rel="noreferrer noopener"
      onClick={() => track("sponsor_cta_clicked")}
    >
      Become a Sponsor
    </a>
  );
};

const TIER_ICONS = {
  diamond: Gem,
  gold: Crown,
  silver: Medal,
} as const;

const TIER_TITLES = {
  diamond: "Diamond",
  gold: "Gold",
  silver: "Silver",
} as const;

export const TierHeader = ({ tier }: { tier: SponsorTier }) => {
  const Icon = TIER_ICONS[tier];
  const title = TIER_TITLES[tier];

  return (
    <header className="flex w-full justify-center border-b px-6 py-3 md:py-4">
      <h2 className="text-lg font-medium tracking-tighter md:text-xl lg:text-2xl">
        <Icon className="-mt-1 mr-1 inline-block size-[0.9em]" /> {title}
      </h2>
    </header>
  );
};

export const SponsorsGrid = ({ tier }: { tier: SponsorTier }) => {
  return SPONSORS[tier].map((sponsor) => (
    <SponsorCard key={sponsor.id} tier={tier} sponsor={sponsor} />
  ));
};
