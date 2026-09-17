import { TextShimmerWave } from "@/registry/components/loading-ui/text-shimmer-wave";

export function TextShimmerWaveColor() {
  return (
    <div className="flex flex-col items-center gap-3 text-sm font-medium">
      <TextShimmerWave baseColor="#64748b" shimmerColor="#2563eb">
        Reading message
      </TextShimmerWave>
      <TextShimmerWave baseColor="#64748b" shimmerColor="#16a34a">
        Drafting reply
      </TextShimmerWave>
      <TextShimmerWave baseColor="#64748b" shimmerColor="#e11d48">
        Retrying answer
      </TextShimmerWave>
    </div>
  );
}
