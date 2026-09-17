import { Bars } from "@/registry/components/loading-ui/bars";

export function BarsCount() {
  return (
    <div className="flex items-center gap-6">
      <Bars className="h-10 w-10" bars={3} />
      <Bars className="h-10 w-16" bars={5} />
      <Bars className="h-10 w-24" bars={8} />
    </div>
  );
}
