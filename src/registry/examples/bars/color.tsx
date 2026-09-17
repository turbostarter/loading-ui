import { Bars } from "@/registry/components/loading-ui/bars";

export function BarsColor() {
  return (
    <div className="flex items-center gap-6">
      <Bars className="h-10 w-12 text-[#2563eb]" />
      <Bars className="h-10 w-12 text-[#16a34a]" />
      <Bars className="h-10 w-12 text-[#e11d48]" />
    </div>
  );
}
