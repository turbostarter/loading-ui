import { DotsRing } from "@/registry/components/loading-ui/dots-ring";

export function DotsRingDots() {
  return (
    <div className="flex items-center gap-6">
      <DotsRing className="size-12" dots={6} />
      <DotsRing className="size-12" dots={8} />
      <DotsRing className="size-12" dots={12} />
    </div>
  );
}
