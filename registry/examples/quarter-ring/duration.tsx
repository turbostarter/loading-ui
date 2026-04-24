import { QuarterRing } from "@/registry/components/loading-ui/quarter-ring";

export function QuarterRingDuration() {
  return (
    <div className="flex items-center gap-6 *:size-12">
      <QuarterRing className="[--duration:650ms]" />
      <QuarterRing className="[--duration:1s]" />
      <QuarterRing className="[--duration:1.75s]" />
    </div>
  );
}
