import { TextShimmerWave } from "@/registry/components/loading-ui/text-shimmer-wave";

export function TextShimmerDemo() {
  return (
    <TextShimmerWave className="text-xl" duration={1}>
      Thinking...
    </TextShimmerWave>
  );
}
