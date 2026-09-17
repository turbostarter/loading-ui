import { PulsatingDots } from "@/registry/components/loading-ui/pulsating-dots";

export function PulsatingDotsColor() {
  return (
    <div className="flex items-center gap-8 *:w-16">
      <PulsatingDots className="text-[#2563eb]" />
      <PulsatingDots className="text-[#16a34a]" />
      <PulsatingDots className="text-[#e11d48]" />
    </div>
  );
}
