"use client";

import { RankgrowButton, RankGrowMobileNavCta } from "./rankgrow";
import { TurbostarterButton, TurboStarterMobileNavCta } from "./turbostarter";
import { getRouteApi } from "@tanstack/react-router";

const rootRoute = getRouteApi("__root__");

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
  const { diamondSponsorId } = rootRoute.useLoaderData();
  const Cta = HEADER_CTAS[diamondSponsorId as DiamondSponsorId];

  if (!Cta) {
    return null;
  }

  return <Cta {...props} />;
};

export const DiamondSponsorMobileNavCta = ({
  ...props
}: React.ComponentProps<"a">) => {
  const { diamondSponsorId } = rootRoute.useLoaderData();
  const Cta = MOBILE_NAV_CTAS[diamondSponsorId as DiamondSponsorId];

  if (!Cta) {
    return null;
  }

  return <Cta {...props} />;
};
