import { QuarterRing } from "@/registry/components/loading-ui/quarter-ring";

export function QuarterRingDuration() {
  return (
    <div className="flex items-center gap-6 *:size-12">
      <QuarterRing className="animation-duration-[650ms]" />
      <QuarterRing className="animation-duration-[1s]" />
      <QuarterRing className="animation-duration-[1.75s]" />
    </div>
  );
}
