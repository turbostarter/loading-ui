import { Pulse } from "@/registry/components/loading-ui/pulse";

export function PulseRingWeight() {
  return (
    <div className="flex items-center gap-6 *:size-12">
      <Pulse className="[&>span[aria-hidden]]:border" />
      <Pulse className="[&>span[aria-hidden]]:border-2" />
      <Pulse className="[&>span[aria-hidden]]:border-[3px]" />
    </div>
  );
}
