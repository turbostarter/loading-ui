import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Swirling } from "@/registry/components/loading-ui/swirling";

export default function SwirlingEmpty() {
  return (
    <Empty className="w-full max-w-md">
      <EmptyHeader>
        <EmptyMedia variant="icon" className="size-14 rounded-full">
          <Swirling className="size-7 text-primary" />
        </EmptyMedia>
        <EmptyTitle>Building your campaign kit</EmptyTitle>
        <EmptyDescription>
          Layout variants, cropped assets, and share previews are still being
          assembled.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
          Notify me later
        </Button>
      </EmptyContent>
    </Empty>
  );
}
