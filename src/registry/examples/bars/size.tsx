import { Bars } from "@/registry/components/loading-ui/bars";

export function BarsSize() {
  return (
    <div className="flex items-end gap-6">
      <Bars className="h-6 w-8" />
      <Bars className="h-10 w-12" />
      <Bars className="h-14 w-16" />
    </div>
  );
}
