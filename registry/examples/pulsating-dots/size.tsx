import { PulsatingDots } from "@/registry/components/loading-ui/pulsating-dots";

export function PulsatingDotsSize() {
  return (
    <div className="flex flex-col items-center gap-7">
      <PulsatingDots className="w-12" />
      <PulsatingDots className="w-18" />
      <PulsatingDots className="w-24" />
    </div>
  );
}
