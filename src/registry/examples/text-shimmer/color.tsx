import { TextShimmer } from "@/registry/components/loading-ui/text-shimmer";

export function TextShimmerColor() {
  return (
    <div className="flex flex-col items-center gap-3 text-sm font-medium">
      <TextShimmer baseColor="#64748b" shimmerColor="#2563eb">
        Scanning document
      </TextShimmer>
      <TextShimmer baseColor="#64748b" shimmerColor="#16a34a">
        Preparing export
      </TextShimmer>
      <TextShimmer baseColor="#64748b" shimmerColor="#e11d48">
        Retrying upload
      </TextShimmer>
    </div>
  );
}
