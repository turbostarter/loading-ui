import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Spiral } from "@/registry/components/loading-ui/spiral";

export default function SpiralEmpty() {
  return (
    <Empty className="w-full max-w-md">
      <EmptyHeader>
        <EmptyMedia variant="icon" className="size-14 rounded-full">
          <Spiral className="size-7 text-primary" dots={10} />
        </EmptyMedia>
        <EmptyTitle>Organizing your workspace</EmptyTitle>
        <EmptyDescription>
          Repositories, files, and recent changes are still being mapped into a
          fresh project view.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
          Open previous snapshot
        </Button>
      </EmptyContent>
    </Empty>
  );
}
