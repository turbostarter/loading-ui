import { TwinOrbit } from "@/registry/components/loading-ui/twin-orbit";

export function TwinOrbitColor() {
  return (
    <div className="flex items-center gap-16 *:size-4">
      <TwinOrbit className="text-[#2563eb]" />
      <TwinOrbit className="text-[#16a34a]" />
      <TwinOrbit className="text-[#e11d48]" />
    </div>
  );
}
