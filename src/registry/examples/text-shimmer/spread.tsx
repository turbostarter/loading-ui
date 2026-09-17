import { TextShimmer } from "@/registry/components/loading-ui/text-shimmer";

export function TextShimmerSpread() {
  return (
    <div className="flex flex-col items-center gap-3 text-sm font-medium">
      <TextShimmer spread={1}>Narrow highlight</TextShimmer>
      <TextShimmer spread={2}>Default highlight</TextShimmer>
      <TextShimmer spread={4}>Broad highlight</TextShimmer>
    </div>
  );
}
