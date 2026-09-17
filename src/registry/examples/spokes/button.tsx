import { Button } from "@/components/ui/button";
import { Spokes } from "@/registry/components/loading-ui/spokes";

export default function SpokesButton() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button size="sm">
        <Spokes className="size-4" data-icon="inline-start" />
        Saving changes
      </Button>
      <Button variant="outline" size="sm">
        <Spokes className="size-4" data-icon="inline-start" />
        Syncing records
      </Button>
      <Button variant="secondary" size="sm">
        <Spokes className="size-4" data-icon="inline-start" />
        Preparing export
      </Button>
    </div>
  );
}
