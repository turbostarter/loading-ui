import { ConcentricRing } from "@/registry/components/loading-ui/concentric-ring";

export function ConcentricRingColor() {
  return (
    <div className="flex items-center gap-6 *:size-12">
      <ConcentricRing className="text-[#2563eb]" />
      <ConcentricRing className="text-[#14b8a6]" />
      <ConcentricRing className="text-[#f97316]" />
    </div>
  );
}
