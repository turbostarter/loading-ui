import { DualArc } from "@/registry/components/loading-ui/dual-arc";

export function DualArcDuration() {
  return (
    <div className="flex items-center gap-6 *:size-12">
      <DualArc className="animation-duration-[700ms]" />
      <DualArc className="animation-duration-[1s]" />
      <DualArc className="animation-duration-[1.6s]" />
    </div>
  );
}
