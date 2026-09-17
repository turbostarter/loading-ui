import { Spiral } from "@/registry/components/loading-ui/spiral";

export function SpiralDots() {
  return (
    <div className="flex items-center gap-6">
      <Spiral className="size-16" dots={6} />
      <Spiral className="size-16" dots={8} />
      <Spiral className="size-16" dots={12} />
    </div>
  );
}
