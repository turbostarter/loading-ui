import { Button } from "@/components/ui/button";
import { Pulse } from "@/registry/components/loading-ui/pulse";

export default function PulseButton() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button size="sm">
        <Pulse className="size-4" data-icon="inline-start" />
        Warming cache
      </Button>
      <Button variant="outline" size="sm">
        <Pulse className="size-4" data-icon="inline-start" />
        Soft retry
      </Button>
      <Button variant="secondary" size="sm">
        <Pulse className="size-4" data-icon="inline-start" />
        Holding connection
      </Button>
    </div>
  );
}
