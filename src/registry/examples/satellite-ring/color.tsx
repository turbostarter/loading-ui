import { SatelliteRing } from "@/registry/components/loading-ui/satellite-ring";

export function SatelliteRingColor() {
  return (
    <div className="flex items-center gap-6 *:size-12">
      <SatelliteRing className="text-[#0ea5e9]" />
      <SatelliteRing className="text-[#a855f7]" />
      <SatelliteRing className="text-[#eab308]" />
    </div>
  );
}
