import { TwinOrbit } from "@/registry/components/loading-ui/twin-orbit";

export function TwinOrbitSize() {
  return (
    <div className="flex items-center gap-16">
      <TwinOrbit className="size-2.5" />
      <TwinOrbit className="size-3.5" />
      <TwinOrbit className="size-5" />
    </div>
  );
}
