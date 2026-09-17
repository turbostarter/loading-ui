"use client";

import { useDiamondSponsor } from "@/components/home/sponsors/diamond/use-diamond-sponsor";

import { RankgrowButton, RankGrowMobileNavCta } from "./rankgrow";
import { TurbostarterButton, TurboStarterMobileNavCta } from "./turbostarter";

const HEADER_CTAS = {
  turbostarter: TurbostarterButton,
  rankgrow: RankgrowButton,
} as const;

const MOBILE_NAV_CTAS = {
  turbostarter: TurboStarterMobileNavCta,
  rankgrow: RankGrowMobileNavCta,
} as const;

type DiamondSponsorId = keyof typeof HEADER_CTAS;

export const DiamondSponsorHeaderCta = ({
  ...props
}: React.HTMLAttributes<HTMLAnchorElement>) => {
  const sponsor = useDiamondSponsor();
  const Cta = HEADER_CTAS[sponsor.id as DiamondSponsorId];

  if (!Cta) {
    return null;
  }

  return <Cta {...props} />;
};

export const DiamondSponsorMobileNavCta = ({
  ...props
}: React.ComponentProps<"a">) => {
  const sponsor = useDiamondSponsor();
  const Cta = MOBILE_NAV_CTAS[sponsor.id as DiamondSponsorId];

  if (!Cta) {
    return null;
  }

  return <Cta {...props} />;
};
