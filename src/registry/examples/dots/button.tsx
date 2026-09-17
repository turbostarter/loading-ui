import { Button } from "@/components/ui/button";
import { Dots } from "@/registry/components/loading-ui/dots";

export default function DotsButton() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button size="sm">
        <Dots className="mx-1 w-7" data-icon="inline-start" />
        Posting comment
      </Button>
      <Button variant="outline" size="sm">
        <Dots className="mx-1 w-7" data-icon="inline-start" />
        Saving draft
      </Button>
      <Button variant="secondary" size="sm">
        <Dots className="mx-1 w-7" data-icon="inline-start" />
        Syncing mentions
      </Button>
    </div>
  );
}
