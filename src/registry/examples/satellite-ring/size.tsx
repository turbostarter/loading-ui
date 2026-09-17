import { SatelliteRing } from "@/registry/components/loading-ui/satellite-ring";

export function SatelliteRingSize() {
  return (
    <div className="flex items-center gap-6">
      <SatelliteRing className="size-6" />
      <SatelliteRing className="size-8" />
      <SatelliteRing className="size-10" />
      <SatelliteRing className="size-12" />
    </div>
  );
}
