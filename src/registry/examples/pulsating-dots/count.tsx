import { PulsatingDots } from "@/registry/components/loading-ui/pulsating-dots";

export function PulsatingDotsCount() {
  return (
    <div className="flex flex-col items-center gap-7">
      <PulsatingDots dots={3} className="w-16" />
      <PulsatingDots dots={4} className="w-20" />
      <PulsatingDots dots={5} className="w-24" />
    </div>
  );
}
