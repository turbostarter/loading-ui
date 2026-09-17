import { DashRing } from "@/registry/components/loading-ui/dash-ring";

export function DashRingColor() {
  return (
    <div className="flex items-center gap-6 *:size-12">
      <DashRing className="text-[#0891b2]" />
      <DashRing className="text-[#c026d3]" />
      <DashRing className="text-[#65a30d]" />
    </div>
  );
}
