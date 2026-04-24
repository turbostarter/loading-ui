import { TextShimmerWave } from "@/registry/components/loading-ui/text-shimmer-wave";

export function TextShimmerWaveDuration() {
  return (
    <div className="flex flex-col items-center gap-3 text-sm font-medium">
      <TextShimmerWave duration={0.7}>Fast response</TextShimmerWave>
      <TextShimmerWave duration={1}>Analyzing request</TextShimmerWave>
      <TextShimmerWave duration={1.6}>Deep read</TextShimmerWave>
    </div>
  );
}
