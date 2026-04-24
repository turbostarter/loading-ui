import { PulsatingDots } from "@/registry/components/loading-ui/pulsating-dots";

export function PulsatingDotsDuration() {
  return (
    <div className="flex items-center gap-8 *:w-16">
      <PulsatingDots duration={0.7} />
      <PulsatingDots duration={1} />
      <PulsatingDots duration={1.5} />
    </div>
  );
}
