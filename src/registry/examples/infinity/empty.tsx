import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { InfinityLoop } from "@/registry/components/loading-ui/infinity";

export default function InfinityEmpty() {
  return (
    <Empty className="w-full max-w-md">
      <EmptyHeader>
        <EmptyMedia variant="icon" className="h-12 w-14">
          <InfinityLoop className="h-7 w-9" />
        </EmptyMedia>
        <EmptyTitle>Sync is still running</EmptyTitle>
        <EmptyDescription>
          This workspace updates continuously while new activity is received.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
          View activity
        </Button>
      </EmptyContent>
    </Empty>
  );
}
