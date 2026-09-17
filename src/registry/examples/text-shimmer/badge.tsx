import { Badge } from "@/components/ui/badge";
import { TextShimmer } from "@/registry/components/loading-ui/text-shimmer";

export default function TextShimmerBadge() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Badge>
        <TextShimmer as="span">Generating</TextShimmer>
      </Badge>
      <Badge variant="secondary">
        <TextShimmer as="span">Indexing</TextShimmer>
      </Badge>
      <Badge variant="outline">
        <TextShimmer as="span" duration={1.5}>
          Summarizing
        </TextShimmer>
      </Badge>
    </div>
  );
}
