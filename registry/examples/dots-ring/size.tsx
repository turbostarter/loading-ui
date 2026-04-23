import { DotsRing } from "@/registry/components/loading-ui/dots-ring";

export function DotsRingSize() {
  return (
    <div className="flex items-center gap-6">
      <DotsRing className="size-6" />
      <DotsRing className="size-8" />
      <DotsRing className="size-10" />
      <DotsRing className="size-12" />
    </div>
  );
}
