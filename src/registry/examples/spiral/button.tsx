import { Button } from "@/components/ui/button";
import { Spiral } from "@/registry/components/loading-ui/spiral";

export default function SpiralButton() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button size="sm">
        <Spiral className="size-4" dots={6} data-icon="inline-start" />
        Building prompt
      </Button>
      <Button variant="outline" size="sm">
        <Spiral className="size-4" dots={8} data-icon="inline-start" />
        Generating reply
      </Button>
      <Button variant="secondary" size="sm">
        <Spiral className="size-4" dots={10} data-icon="inline-start" />
        Preparing draft
      </Button>
    </div>
  );
}
