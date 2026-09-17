import { ClockRing } from "@/registry/components/loading-ui/clock-ring";

export function ClockRingSize() {
  return (
    <div className="flex items-center gap-6">
      <ClockRing className="size-6" />
      <ClockRing className="size-8" />
      <ClockRing className="size-10" />
      <ClockRing className="size-12" />
    </div>
  );
}
