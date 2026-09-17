import { Button } from "@/components/ui/button";
import { SatelliteRing } from "@/registry/components/loading-ui/satellite-ring";

export default function SatelliteRingButton() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button size="sm">
        <SatelliteRing className="size-4" data-icon="inline-start" />
        Broadcasting deltas
      </Button>
      <Button variant="outline" size="sm">
        <SatelliteRing className="size-4" data-icon="inline-start" />
        Reconciling nodes
      </Button>
      <Button variant="secondary" size="sm">
        <SatelliteRing className="size-4" data-icon="inline-start" />
        Staging rollout
      </Button>
    </div>
  );
}
