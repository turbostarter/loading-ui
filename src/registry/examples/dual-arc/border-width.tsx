import { DualArc } from "@/registry/components/loading-ui/dual-arc";

export function DualArcBorderWidth() {
  return (
    <div className="flex items-center gap-6 *:size-12">
      <DualArc className="border-[2px]" />
      <DualArc className="border-[4px]" />
      <DualArc className="border-[6px]" />
    </div>
  );
}
