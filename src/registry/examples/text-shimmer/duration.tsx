import { TextShimmer } from "@/registry/components/loading-ui/text-shimmer";

export function TextShimmerDuration() {
  return (
    <div className="flex flex-col items-center gap-3 text-sm font-medium">
      <TextShimmer duration={1}>Fast scan</TextShimmer>
      <TextShimmer duration={2}>Generating summary</TextShimmer>
      <TextShimmer duration={3}>Slow background read</TextShimmer>
    </div>
  );
}
