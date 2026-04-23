import { DotsRing } from "@/registry/components/loading-ui/dots-ring";

export function DotsRingDotScale() {
  return (
    <div className="flex items-center gap-6">
      <DotsRing className="size-12" dotScale={0.2} />
      <DotsRing className="size-12" dotScale={0.28} />
      <DotsRing className="size-12" dotScale={0.36} />
    </div>
  );
}
