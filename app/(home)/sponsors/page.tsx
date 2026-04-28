import {
  HeroSection,
  HeroSectionDescription,
  HeroSectionTitle,
  Section,
} from "@/components/common/section";
import {
  AdvertiseCta,
  SponsorsGrid,
  SponsorsCta,
  TierHeader,
} from "@/components/home/sponsors/sponsors";
import { Stats } from "@/components/home/sponsors/stats";
import { createMetadata } from "@/lib/metadata";
import { MAX, SPONSORS } from "@/lib/sponsors";

const TITLE = "Sponsors";
const DESCRIPTION =
  "Power the fastest growing UI library. Your support keeps Loading UI free and open-source for developers everywhere.";

export const metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
});

export default function Page(_: PageProps<"/sponsors">) {
  return (
    <>
      <HeroSection>
        <HeroSectionTitle>{TITLE}</HeroSectionTitle>
        <HeroSectionDescription>{DESCRIPTION}</HeroSectionDescription>

        <SponsorsCta />
      </HeroSection>

      <Stats />

      <Section id="diamond-sponsors" className="p-0!">
        <TierHeader tier="diamond" />

        <div className="bg-border grid grid-cols-1 gap-px md:grid-cols-2">
          <SponsorsGrid tier="diamond" />

          {Array.from({ length: SPONSORS.diamond.length % MAX.diamond }).map(
            (__, index) => (
              <AdvertiseCta key={index} tier="diamond" />
            ),
          )}
        </div>
      </Section>

      <Section id="gold-sponsors" className="p-0!">
        <TierHeader tier="gold" />

        <div className="bg-border grid grid-cols-1 gap-px md:grid-cols-2 lg:grid-cols-3">
          <SponsorsGrid tier="gold" />

          {Array.from({
            length: !SPONSORS.gold.length
              ? MAX.gold
              : SPONSORS.gold.length % MAX.gold,
          }).map((__, index) => (
            <AdvertiseCta key={index} tier="gold" />
          ))}
        </div>
      </Section>

      <Section id="silver-sponsors" className="p-0!">
        <TierHeader tier="silver" />

        <div className="bg-border grid grid-cols-1 gap-px md:grid-cols-2 lg:grid-cols-4">
          <SponsorsGrid tier="silver" />

          {Array.from({
            length: !SPONSORS.silver.length
              ? MAX.silver
              : SPONSORS.silver.length % MAX.silver,
          }).map((__, index) => (
            <AdvertiseCta key={index} tier="silver" />
          ))}
        </div>
      </Section>
    </>
  );
}
