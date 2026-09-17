import { Badge } from "@/components/ui/badge";
import { TextShimmerWave } from "@/registry/components/loading-ui/text-shimmer-wave";

export default function TextShimmerWaveBadge() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Badge>
        <TextShimmerWave as="span">Thinking</TextShimmerWave>
      </Badge>
      <Badge variant="secondary">
        <TextShimmerWave as="span">Composing</TextShimmerWave>
      </Badge>
      <Badge variant="outline">
        <TextShimmerWave as="span" duration={0.8}>
          Reading
        </TextShimmerWave>
      </Badge>
    </div>
  );
}
