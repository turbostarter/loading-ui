import { ConcentricRing } from "@/registry/components/loading-ui/concentric-ring";

export function ConcentricRingDuration() {
  return (
    <div className="flex items-center gap-6 *:size-12">
      <ConcentricRing className="animation-duration-[700ms]" />
      <ConcentricRing className="animation-duration-[1s]" />
      <ConcentricRing className="animation-duration-[1.6s]" />
    </div>
  );
}
