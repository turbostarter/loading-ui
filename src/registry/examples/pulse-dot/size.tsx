import { PulseDot } from "@/registry/components/loading-ui/pulse-dot";

export function PulseDotSize() {
  return (
    <div className="flex items-center gap-8">
      <PulseDot className="size-2" />
      <PulseDot className="size-2.5" />
      <PulseDot className="size-3" />
      <PulseDot className="size-4" />
    </div>
  );
}
