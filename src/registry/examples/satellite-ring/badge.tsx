import { Badge } from "@/components/ui/badge";
import { SatelliteRing } from "@/registry/components/loading-ui/satellite-ring";

export default function SatelliteRingBadge() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 [--radius:1.2rem]">
      <Badge>
        <SatelliteRing className="size-3.5" />
        Orbiting
      </Badge>
      <Badge variant="secondary">
        <SatelliteRing className="size-3.5" />
        Fan-out
      </Badge>
      <Badge variant="outline">
        <SatelliteRing className="size-3.5" />
        Mesh sync
      </Badge>
    </div>
  );
}
