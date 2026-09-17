import { ConcentricRing } from "@/registry/components/loading-ui/concentric-ring";

export function ConcentricRingRingWeight() {
  return (
    <div className="flex items-center gap-6 *:size-12">
      <ConcentricRing className="[&_[aria-hidden='true']]:border-[1px]" />
      <ConcentricRing className="[&_[aria-hidden='true']]:border-[2px]" />
      <ConcentricRing className="[&_[aria-hidden='true']]:border-[3px]" />
    </div>
  );
}
