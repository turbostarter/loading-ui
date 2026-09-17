import { Button } from "@/components/ui/button";
import { InfinityLoop } from "@/registry/components/loading-ui/infinity";

export default function InfinityButton() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button size="sm">
        <InfinityLoop className="h-4 w-5" data-icon="inline-start" />
        Syncing workspace
      </Button>
      <Button variant="outline" size="sm">
        <InfinityLoop className="h-4 w-5" data-icon="inline-start" />
        Keeping session active
      </Button>
    </div>
  );
}
