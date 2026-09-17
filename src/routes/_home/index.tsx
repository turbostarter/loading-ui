import { createFileRoute, getRouteApi } from "@tanstack/react-router";

import { ColorPicker } from "@/components/common/color-picker";
import { Examples } from "@/components/home/examples/examples";
import { Hero } from "@/components/home/hero";
import { createMetadata } from "@/lib/metadata";

const homeRoute = getRouteApi("/_home");

export const Route = createFileRoute("/_home/")({
  head: createMetadata({
    alternates: { canonical: "/" },
  }),
  component: HomePage,
});

function HomePage() {
  const { stars } = homeRoute.useLoaderData();

  return (
    <>
      <Hero stars={stars} />
      <ColorPicker className="container border-b py-6 md:py-8 @[1400px]:border-x" />
      <Examples />
    </>
  );
}
