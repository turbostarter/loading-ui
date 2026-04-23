import { DashRing } from "@/registry/components/loading-ui/dash-ring";

export function DashRingColor() {
  return (
    <div className="flex items-center gap-6 *:size-12">
      <DashRing className="text-cyan-600 dark:text-cyan-400" />
      <DashRing className="text-fuchsia-600 dark:text-fuchsia-400" />
      <DashRing className="text-lime-600 dark:text-lime-400" />
    </div>
  );
}
