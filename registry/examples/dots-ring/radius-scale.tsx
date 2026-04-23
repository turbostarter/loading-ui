import { DotsRing } from "@/registry/components/loading-ui/dots-ring";

export function DotsRingRadiusScale() {
  return (
    <div className="flex items-center gap-6">
      <DotsRing className="size-12" radiusScale={0.18} />
      <DotsRing className="size-12" radiusScale={0.28} />
      <DotsRing className="size-12" radiusScale={0.38} />
    </div>
  );
}
