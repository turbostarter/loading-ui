import { Spiral } from "@/registry/components/loading-ui/spiral";

export function SpiralColor() {
  return (
    <div className="flex items-center gap-6 *:size-16">
      <Spiral className="text-[#2563eb]" />
      <Spiral className="text-[#8b5cf6]" />
      <Spiral className="text-[#f97316]" />
    </div>
  );
}
