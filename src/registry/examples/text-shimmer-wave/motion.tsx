import { TextShimmerWave } from "@/registry/components/loading-ui/text-shimmer-wave";

export function TextShimmerWaveMotion() {
  return (
    <div className="flex flex-col items-center gap-3 text-sm font-medium">
      <TextShimmerWave zDistance={4} yDistance={-1} rotateYDistance={4}>
        Subtle wave
      </TextShimmerWave>
      <TextShimmerWave>Default wave</TextShimmerWave>
      <TextShimmerWave zDistance={16} yDistance={-4} rotateYDistance={16}>
        Strong wave
      </TextShimmerWave>
    </div>
  );
}
