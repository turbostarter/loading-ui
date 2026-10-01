import { createFileRoute, Outlet } from "@tanstack/react-router";

import { Footer } from "@/components/common/footer";

export const Route = createFileRoute("/_home")({
  component: HomeLayout,
});

function HomeLayout() {
  return (
    <>
      <main className="flex min-h-0 flex-1 flex-col">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
