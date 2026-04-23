import { DotsRing } from "@/registry/components/loading-ui/dots-ring";

export function DotsRingDuration() {
  return (
    <div className="flex items-center gap-6">
      <DotsRing className="size-12" duration="700ms" />
      <DotsRing className="size-12" duration="1s" />
      <DotsRing className="size-12" duration="1.5s" />
    </div>
  );
}
