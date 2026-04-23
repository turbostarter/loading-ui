import { OrbitRing } from "@/registry/components/loading-ui/orbit-ring";

export function OrbitRingRingWeight() {
  return (
    <div className="flex items-center gap-6 *:size-12">
      <OrbitRing className="[&_[aria-hidden='true']]:border-[1px]" />
      <OrbitRing className="[&_[aria-hidden='true']]:border-[2px]" />
      <OrbitRing className="[&_[aria-hidden='true']]:border-[3px]" />
    </div>
  );
}
