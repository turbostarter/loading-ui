import { ClockRing } from "@/registry/components/loading-ui/clock-ring";

export function ClockRingColor() {
  return (
    <div className="flex items-center gap-6 *:size-12">
      <ClockRing className="text-[#10b981]" />
      <ClockRing className="text-[#f43f5e]" />
      <ClockRing className="text-[#d97706]" />
    </div>
  );
}
