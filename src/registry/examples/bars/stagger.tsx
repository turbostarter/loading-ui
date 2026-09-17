import { Bars } from "@/registry/components/loading-ui/bars";

export function BarsStagger() {
  return (
    <div className="flex items-center gap-6">
      <Bars className="h-10 w-12 [--delay:100ms]" />
      <Bars className="h-10 w-12 [--delay:200ms]" />
      <Bars className="h-10 w-12 [--delay:320ms]" />
    </div>
  );
}
