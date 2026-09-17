import { QuarterRing } from "@/registry/components/loading-ui/quarter-ring";

export function QuarterRingColor() {
  return (
    <div className="flex items-center gap-6 *:size-12">
      <QuarterRing className="text-[#0ea5e9]" />
      <QuarterRing className="text-[#7c3aed]" />
      <QuarterRing className="text-[#ea580c]" />
    </div>
  );
}
