import { Ring } from "@/registry/components/loading-ui/ring";
import { Installer } from "@/components/common/installer";
import {
  HeroSection,
  HeroSectionDescription,
  HeroSectionTitle,
} from "@/components/common/section";
import { getCLICommand } from "@/lib/registry";
import { Index } from "@/registry/__index__";

import { getGitHubStars } from "@/app/(home)/layout";
import { GitHubStars } from "./github-stars";

export const Hero = async () => {
  const stars = await getGitHubStars();

  return (
    <HeroSection>
      <HeroSectionTitle>
        Your users deserve a{" "}
        <Ring className="inline-block size-[0.9em] translate-x-0.5 -translate-y-0.5 animate-spin md:translate-x-1 md:-translate-y-1.5" />{" "}
        loading state
      </HeroSectionTitle>

      <HeroSectionDescription>
        A curated collection of spinners, loaders and animations for your next
        project. Free and open source, forever.
      </HeroSectionDescription>

      <div className="mx-auto inline-flex w-fit flex-wrap items-center justify-center gap-3">
        <Installer
          command={getCLICommand(Object.keys(Index)[0])}
          className="w-60 text-xs md:w-72"
        />
        <GitHubStars stars={stars} />
      </div>
    </HeroSection>
  );
};
