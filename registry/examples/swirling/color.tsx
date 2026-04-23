import { Swirling } from "@/registry/components/loading-ui/swirling";

export function SwirlingColor() {
  return (
    <div className="flex items-center gap-6 *:size-16">
      <Swirling className="text-[#2563eb]" />
      <Swirling className="text-[#8b5cf6]" />
      <Swirling className="text-[#f97316]" />
    </div>
  );
}
