import { Button } from "@/components/ui/button";
import { Swirling } from "@/registry/components/loading-ui/swirling";

export default function SwirlingButton() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button size="sm">
        <Swirling className="size-4" data-icon="inline-start" />
        Generating preview
      </Button>
      <Button variant="outline" size="sm">
        <Swirling className="size-4" data-icon="inline-start" />
        Rendering assets
      </Button>
      <Button variant="secondary" size="sm">
        <Swirling className="size-4" data-icon="inline-start" />
        Preparing export
      </Button>
    </div>
  );
}
