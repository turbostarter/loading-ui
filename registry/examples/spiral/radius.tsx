import { Spiral } from "@/registry/components/loading-ui/spiral";

export function SpiralRadius() {
  return (
    <div className="flex items-center gap-6">
      <Spiral className="size-16" radius={20} />
      <Spiral className="size-16" radius={31.25} />
      <Spiral className="size-16" radius={40} />
    </div>
  );
}
