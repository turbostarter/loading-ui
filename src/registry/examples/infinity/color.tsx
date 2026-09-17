import { InfinityLoop } from "@/registry/components/loading-ui/infinity";

export function InfinityColor() {
  return (
    <div className="flex items-center gap-6">
      <InfinityLoop className="h-10 w-14 text-[#2563eb]" />
      <InfinityLoop className="h-10 w-14 text-[#16a34a]" />
      <InfinityLoop className="h-10 w-14 text-[#e11d48]" />
    </div>
  );
}
