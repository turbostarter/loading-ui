import { Pulse } from "@/registry/components/loading-ui/pulse";

export function PulseDuration() {
  return (
    <div className="flex items-center gap-6 *:size-12">
      <Pulse className="[--duration:900ms]" />
      <Pulse className="[--duration:1.5s]" />
      <Pulse className="[--duration:2.25s]" />
    </div>
  );
}
