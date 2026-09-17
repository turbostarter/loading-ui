import { Pulse } from "@/registry/components/loading-ui/pulse";

export function PulseColor() {
  return (
    <div className="flex items-center gap-6 *:size-12">
      <Pulse className="text-[#0ea5e9]" />
      <Pulse className="text-[#a855f7]" />
      <Pulse className="text-[#14b8a6]" />
    </div>
  );
}
