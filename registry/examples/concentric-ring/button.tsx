import { Button } from "@/components/ui/button";
import { ConcentricRing } from "@/registry/components/loading-ui/concentric-ring";

export default function ConcentricRingButton() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button size="sm">
        <ConcentricRing className="size-4" data-icon="inline-start" />
        Saving config
      </Button>
      <Button variant="outline" size="sm">
        <ConcentricRing className="size-4" data-icon="inline-start" />
        Refreshing logs
      </Button>
      <Button variant="secondary" size="sm">
        <ConcentricRing className="size-4" data-icon="inline-start" />
        Rebuilding cache
      </Button>
    </div>
  );
}
