import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { QuarterRing } from "@/registry/components/loading-ui/quarter-ring";

export default function QuarterRingEmpty() {
  return (
    <Empty className="w-full max-w-md rounded-xl border border-dashed bg-muted/20">
      <EmptyHeader>
        <EmptyMedia variant="icon" className="size-12 rounded-full border">
          <QuarterRing className="size-6 text-primary" />
        </EmptyMedia>
        <EmptyTitle>Sketching a compact preview</EmptyTitle>
        <EmptyDescription>
          The quarter arc keeps the footprint small while thumbnails and
          summaries are still being distilled from the full document.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
          Open raw file
        </Button>
      </EmptyContent>
    </Empty>
  );
}
