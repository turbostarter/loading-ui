import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Arc } from "@/registry/components/loading-ui/arc";

export default function ArcEmpty() {
  return (
    <Empty className="w-full max-w-md">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Arc className="size-5 border-[3px]" />
        </EmptyMedia>
        <EmptyTitle>Building your dashboard</EmptyTitle>
        <EmptyDescription>
          Fresh usage metrics are being prepared now. This usually takes a few
          seconds.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
          View cached data
        </Button>
      </EmptyContent>
    </Empty>
  );
}
