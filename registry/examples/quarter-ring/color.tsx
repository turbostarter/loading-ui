import { QuarterRing } from "@/registry/components/loading-ui/quarter-ring";

export function QuarterRingColor() {
  return (
    <div className="flex items-center gap-6 *:size-12">
      <QuarterRing className="text-sky-600 dark:text-sky-400" />
      <QuarterRing className="text-violet-600 dark:text-violet-400" />
      <QuarterRing className="text-orange-600 dark:text-orange-400" />
    </div>
  );
}
