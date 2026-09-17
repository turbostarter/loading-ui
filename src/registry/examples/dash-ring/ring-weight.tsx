import { DashRing } from "@/registry/components/loading-ui/dash-ring";

export function DashRingRingWeight() {
  return (
    <div className="flex items-center gap-6 *:size-12">
      <DashRing className="[&_circle]:stroke-[1.25]" />
      <DashRing className="[&_circle]:stroke-[2]" />
      <DashRing className="[&_circle]:stroke-[3]" />
    </div>
  );
}
