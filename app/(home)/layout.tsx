import { Footer } from "@/components/common/footer";
import { getStars } from "@/lib/octokit";
import { getQueryClient } from "@/lib/query/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { unstable_cache as cache } from "next/cache";

export const getGitHubStars = cache(getStars, ["github-stars"], {
  revalidate: 3600,
});

export default async function Layout({ children }: LayoutProps<"/">) {
  const queryClient = getQueryClient();
  queryClient.setQueryData(["github-stars"], await getGitHubStars());

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="flex min-h-0 flex-1 flex-col">{children}</main>
      <Footer />
    </HydrationBoundary>
  );
}
