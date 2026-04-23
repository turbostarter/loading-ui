import { OrbitRing } from "@/registry/components/loading-ui/orbit-ring";

export function OrbitRingDuration() {
  return (
    <div className="flex items-center gap-6 *:size-12">
      <OrbitRing className="animation-duration-[700ms]" />
      <OrbitRing className="animation-duration-[1s]" />
      <OrbitRing className="animation-duration-[1.6s]" />
    </div>
  );
}
