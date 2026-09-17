import { AnalyzingImage } from "@/registry/components/loading-ui/analyzing-image";
import { TextShimmer } from "@/registry/components/loading-ui/text-shimmer";

export function AnalyzingImageShimmer() {
  return (
    <div className="flex items-center gap-3">
      <AnalyzingImage className="text-primary size-14" />
      <div className="space-y-1">
        <TextShimmer as="p" className="font-medium">
          Analyzing image
        </TextShimmer>
        <p className="text-muted-foreground text-sm">
          Reading objects, text, and scene context.
        </p>
      </div>
    </div>
  );
}
