import { DualArc } from "@/registry/components/loading-ui/dual-arc";

export function DualArcColor() {
  return (
    <div className="flex items-center gap-6 *:size-12">
      <DualArc className="text-[#2563eb]" />
      <DualArc className="text-[#14b8a6]" />
      <DualArc className="text-[#f97316]" />
    </div>
  );
}
