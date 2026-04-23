import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Dots } from "@/registry/components/loading-ui/dots";

export default function DotsEmpty() {
  return (
    <Empty className="w-full">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Dots className="w-6" />
        </EmptyMedia>
        <EmptyTitle>No messages yet</EmptyTitle>
        <EmptyDescription>
          When the first participant starts typing, swap this empty state for a
          slim row—the dots read instantly as “someone is composing.”
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm">Start thread</Button>
      </EmptyContent>
    </Empty>
  );
}
