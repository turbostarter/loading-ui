import { SatelliteRing } from "@/registry/components/loading-ui/satellite-ring";

export function SatelliteRingRingWeight() {
  return (
    <div className="flex items-center gap-6 *:size-12">
      <SatelliteRing className="border" />
      <SatelliteRing className="border-2" />
      <SatelliteRing className="border-[3px]" />
    </div>
  );
}
