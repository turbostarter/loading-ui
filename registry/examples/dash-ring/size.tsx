import { DashRing } from "@/registry/components/loading-ui/dash-ring";

export function DashRingSize() {
  return (
    <div className="flex items-center gap-6">
      <DashRing className="size-6" />
      <DashRing className="size-8" />
      <DashRing className="size-10" />
      <DashRing className="size-12" />
    </div>
  );
}
