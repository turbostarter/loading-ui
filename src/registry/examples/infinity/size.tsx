import { InfinityLoop } from "@/registry/components/loading-ui/infinity";

export function InfinitySize() {
  return (
    <div className="flex items-center gap-6">
      <InfinityLoop className="h-6 w-8" />
      <InfinityLoop className="h-10 w-14" />
      <InfinityLoop className="h-16 w-20" />
    </div>
  );
}
