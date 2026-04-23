import { QuarterRing } from "@/registry/components/loading-ui/quarter-ring";

export function QuarterRingSize() {
  return (
    <div className="flex items-center gap-6">
      <QuarterRing className="size-6" />
      <QuarterRing className="size-8" />
      <QuarterRing className="size-10" />
      <QuarterRing className="size-12" />
    </div>
  );
}
