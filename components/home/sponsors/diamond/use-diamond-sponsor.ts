"use client";

import * as React from "react";

import { SPONSORS, type Sponsor } from "@/lib/sponsors";

const STORAGE_KEY = "diamond-sponsor-id";

function getOrPickDiamondSponsor(): Sponsor {
  const sponsors = SPONSORS.diamond;
  const stored = sessionStorage.getItem(STORAGE_KEY);
  const existing = sponsors.find(sponsor => sponsor.id === stored);

  if (existing) {
    return existing;
  }

  const picked = sponsors[Math.floor(Math.random() * sponsors.length)];
  sessionStorage.setItem(STORAGE_KEY, picked.id);
  return picked;
}

export function useDiamondSponsor() {
  const [sponsor, setSponsor] = React.useState<Sponsor>(SPONSORS.diamond[0]);

  React.useEffect(() => {
    setSponsor(getOrPickDiamondSponsor());
  }, []);

  return sponsor;
}
