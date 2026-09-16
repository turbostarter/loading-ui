import { createFileRoute, Outlet } from "@tanstack/react-router";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { Footer } from "@/components/common/footer";
import { createQueryClient } from "@/lib/query/utils";
import { getGitHubStarsFn } from "@/lib/server";

export const Route = createFileRoute("/_home")({
  loader: async () => {
    const stars = await getGitHubStarsFn();
    const queryClient = createQueryClient();
    queryClient.setQueryData(["github-stars"], stars);
    return { stars, dehydratedState: dehydrate(queryClient) };
  },
  component: HomeLayout,
});

function HomeLayout() {
  const { dehydratedState } = Route.useLoaderData();

  return (
    <HydrationBoundary state={dehydratedState}>
      <main className="flex min-h-0 flex-1 flex-col">
        <Outlet />
      </main>
      <Footer />
    </HydrationBoundary>
  );
}
