import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { AnalyzingImage } from "@/registry/components/loading-ui/analyzing-image";
import { TextShimmer } from "@/registry/components/loading-ui/text-shimmer";

export default function AnalyzingImageEmpty() {
  return (
    <Empty className="w-full max-w-md">
      <EmptyHeader>
        <EmptyMedia
          variant="icon"
          className="size-14 [--loading-ui-analyzing-image-background:var(--muted)]"
        >
          <AnalyzingImage className="size-8" />
        </EmptyMedia>
        <EmptyTitle>
          <TextShimmer as="span">Analyzing upload</TextShimmer>
        </EmptyTitle>
        <EmptyDescription>
          Visual details are still being extracted from the image.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
          Cancel
        </Button>
      </EmptyContent>
    </Empty>
  );
}
