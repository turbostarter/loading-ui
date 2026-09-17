import { ClockRing } from "@/registry/components/loading-ui/clock-ring";

export function ClockRingDuration() {
  return (
    <div className="flex items-center gap-6 *:size-12">
      <ClockRing className="[--duration:600ms]" />
      <ClockRing className="[--duration:1.5s]" />
      <ClockRing className="[--duration:2.2s]" />
    </div>
  );
}
