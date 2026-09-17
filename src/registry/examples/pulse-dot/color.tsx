import { PulseDot } from "@/registry/components/loading-ui/pulse-dot";

export function PulseDotColor() {
  return (
    <div className="flex items-center gap-8 *:size-3">
      <PulseDot className="text-[#0ea5e9]" />
      <PulseDot className="text-[#a855f7]" />
      <PulseDot className="text-[#f97316]" />
    </div>
  );
}
