import { Arc } from "@/registry/components/loading-ui/arc";

export function ArcSize() {
  return (
    <div className="flex items-center gap-6">
      <Arc className="size-4 border-[3px]" />
      <Arc className="size-6 border-[4px]" />
      <Arc className="size-8 border-[5px]" />
      <Arc className="size-10 border-[6px]" />
    </div>
  );
}
