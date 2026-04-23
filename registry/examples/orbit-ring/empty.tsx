import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { OrbitRing } from "@/registry/components/loading-ui/orbit-ring";

export default function OrbitRingEmpty() {
  return (
    <Empty className="w-full max-w-md">
      <EmptyHeader>
        <EmptyMedia variant="icon" className="size-14 rounded-full">
          <OrbitRing className="size-7 text-primary" />
        </EmptyMedia>
        <EmptyTitle>Mapping your workspace</EmptyTitle>
        <EmptyDescription>
          Projects, dependencies, and recent branches are still being connected
          into a fresh view.
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
