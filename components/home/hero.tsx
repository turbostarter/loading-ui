import { Ring } from "@/registry/components/loading-ui/ring";
import { Installer } from "@/components/common/installer";
import { Section } from "@/components/common/section";
import { getCLICommand } from "@/lib/registry";
import { Index } from "@/registry/__index__";

import { unstable_cache as cache } from "next/cache";
import { octokit } from "@/lib/octokit";
import { buttonVariants } from "@/components/ui/button";
import { GITHUB_URL } from "@/lib/constants";
import { Icons } from "@/components/common/icons";
import { Star } from "lucide-react";

const getGitHubStars = cache(
  async () => {
    try {
      const { data } = await octokit.rest.repos.get({
        owner: "turbostarter",
        repo: "loading-ui",
      });
      return data.stargazers_count;
    } catch (error) {
      console.error(error);
      return 0;
    }
  },
  ["github-stats"],
  {
    revalidate: 3600,
  },
);

export const Hero = () => {
  const stars = getGitHubStars();

  return (
    <Section id="hero">
      <div className="mx-auto flex flex-col items-center justify-center gap-6 text-balance">
        <h1 className="max-w-2xl text-center text-4xl font-semibold tracking-[-0.06em]! text-balance sm:text-5xl md:text-6xl xl:text-7xl">
          Your users deserve a{" "}
          <Ring className="inline-block size-[0.9em] translate-x-0.5 -translate-y-0.5 animate-spin md:translate-x-1 md:-translate-y-1.5" />{" "}
          loading state
        </h1>

        <p className="text-muted-foreground mx-auto max-w-2xl text-center lg:text-lg xl:text-xl 2xl:text-2xl">
          A curated collection of spinners, loaders and animations for your next
          project. Free and open source, forever.
        </p>

        <div className="mx-auto inline-flex w-fit justify-center flex-wrap items-center gap-3">
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
            <div className="border-l border-background/25 h-full ml-1.5 flex items-center justify-center pl-2.5 gap-1.5">
              <Star className="size-3.5 md:size-4 text-yellow-500 fill-current -mt-px" />
              {stars}
            </div>
          </a>
        </div>
      </div>
    </Section>
  );
};
