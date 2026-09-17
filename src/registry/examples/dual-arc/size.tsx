import { DualArc } from "@/registry/components/loading-ui/dual-arc";

export function DualArcSize() {
  return (
    <div className="flex items-center gap-6">
      <DualArc className="size-4 border-[3px]" />
      <DualArc className="size-6 border-[4px]" />
      <DualArc className="size-8 border-[5px]" />
      <DualArc className="size-10 border-[6px]" />
    </div>
  );
}
