import { ConcentricRing } from "@/registry/components/loading-ui/concentric-ring";

export function ConcentricRingSize() {
  return (
    <div className="flex items-center gap-6">
      <ConcentricRing className="size-6" />
      <ConcentricRing className="size-8" />
      <ConcentricRing className="size-10" />
      <ConcentricRing className="size-12" />
    </div>
  );
}
