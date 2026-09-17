import { Pulse } from "@/registry/components/loading-ui/pulse";

export function PulseSize() {
  return (
    <div className="flex items-center gap-6">
      <Pulse className="size-6" />
      <Pulse className="size-8" />
      <Pulse className="size-10" />
      <Pulse className="size-12" />
    </div>
  );
}
