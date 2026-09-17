import { Arc } from "@/registry/components/loading-ui/arc";

export function ArcBorderWidth() {
  return (
    <div className="flex items-center gap-6 *:size-12">
      <Arc className="border-[2px]" />
      <Arc className="border-[4px]" />
      <Arc className="border-[6px]" />
    </div>
  );
}
