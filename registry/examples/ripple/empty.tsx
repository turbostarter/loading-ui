import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Ripple } from "@/registry/components/loading-ui/ripple";

export default function RippleEmpty() {
  return (
    <Empty className="w-full max-w-md">
      <EmptyHeader>
        <EmptyMedia variant="icon" className="size-14 rounded-full border">
          <Ripple className="size-8" />
        </EmptyMedia>
        <EmptyTitle>Widening the search</EmptyTitle>
        <EmptyDescription>
          Each ring is a soft ping into your data, great when you want motion
          that feels expansive rather than frantic.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
          Narrow filters
        </Button>
      </EmptyContent>
    </Empty>
  );
}
