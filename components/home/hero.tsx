import { Ring } from "@/registry/components/loading-ui/ring";
import { Installer } from "@/components/common/installer";
import {
  HeroSection,
  HeroSectionDescription,
  HeroSectionTitle,
} from "@/components/common/section";
import { getCLICommand } from "@/lib/registry";
import { Index } from "@/registry/__index__";

import { buttonVariants } from "@/components/ui/button";
import { GITHUB_URL } from "@/lib/constants";
import { Icons } from "@/components/common/icons";
import { Star } from "lucide-react";
import { getGitHubStars } from "@/app/(home)/layout";

export const Hero = () => {
  const stars = getGitHubStars();

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
        <a
          className={buttonVariants({
            className: "px-3.5 md:h-10",
          })}
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer noopener"
        >
          <span className="sr-only">Star on GitHub</span>
          <Icons.gitHub className="size-3.5 md:size-4" />
          <div className="border-background/25 ml-1.5 flex h-full items-center justify-center gap-1.5 border-l pl-2.5">
            <Star className="-mt-px size-3.5 fill-current text-yellow-500 md:size-4" />
            {stars}
          </div>
        </a>
      </div>
    </HeroSection>
  );
};
