import { PulseDot } from "@/registry/components/loading-ui/pulse-dot";

export function PulseDotDuration() {
  return (
    <div className="flex items-center gap-8 *:size-3">
      <PulseDot className="[--duration:800ms]" />
      <PulseDot className="[--duration:1.2s]" />
      <PulseDot className="[--duration:1.8s]" />
    </div>
  );
}
