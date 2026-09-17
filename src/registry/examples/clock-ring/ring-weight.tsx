import { ClockRing } from "@/registry/components/loading-ui/clock-ring";

export function ClockRingRingWeight() {
  return (
    <div className="flex items-center gap-6 *:size-12">
      <ClockRing className="border" />
      <ClockRing className="border-2" />
      <ClockRing className="border-[3px]" />
    </div>
  );
}
