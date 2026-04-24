import { Button } from "@/components/ui/button";
import { TextShimmerWave } from "@/registry/components/loading-ui/text-shimmer-wave";

export default function TextShimmerWaveButton() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button size="sm">
        <TextShimmerWave as="span">Thinking</TextShimmerWave>
      </Button>
      <Button variant="outline" size="sm">
        <TextShimmerWave as="span">Analyzing request</TextShimmerWave>
      </Button>
      <Button variant="secondary" size="sm">
        <TextShimmerWave as="span" duration={0.8}>
          Drafting reply
        </TextShimmerWave>
      </Button>
    </div>
  );
}
