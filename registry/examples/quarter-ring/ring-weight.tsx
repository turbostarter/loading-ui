import { QuarterRing } from "@/registry/components/loading-ui/quarter-ring";

export function QuarterRingRingWeight() {
  return (
    <div className="flex items-center gap-6 *:size-12">
      <QuarterRing className="border-t border-r border-r-transparent" />
      <QuarterRing className="border-t-2 border-r-2 border-r-transparent" />
      <QuarterRing className="border-t-[3px] border-r-[3px] border-r-transparent" />
    </div>
  );
}
