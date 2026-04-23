import { Spiral } from "@/registry/components/loading-ui/spiral";

export function SpiralSize() {
  return (
    <div className="flex items-center gap-6">
      <Spiral className="size-8" />
      <Spiral className="size-12" />
      <Spiral className="size-16" />
      <Spiral className="size-20" />
    </div>
  );
}
