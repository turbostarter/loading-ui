import { Bars } from "@/registry/components/loading-ui/bars";

export function BarsDuration() {
  return (
    <div className="flex items-center gap-6">
      <Bars className="h-10 w-12 [--duration:800ms]" />
      <Bars className="h-10 w-12 [--duration:1.2s]" />
      <Bars className="h-10 w-12 [--duration:1.8s]" />
    </div>
  );
}
