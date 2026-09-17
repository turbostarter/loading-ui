import { TwinOrbit } from "@/registry/components/loading-ui/twin-orbit";

export function TwinOrbitDuration() {
  return (
    <div className="flex items-center gap-16 *:size-4">
      <TwinOrbit className="[--duration:700ms]" />
      <TwinOrbit className="[--duration:1s]" />
      <TwinOrbit className="[--duration:1.6s]" />
    </div>
  );
}
