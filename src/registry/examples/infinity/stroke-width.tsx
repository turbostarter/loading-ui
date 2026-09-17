import { InfinityLoop } from "@/registry/components/loading-ui/infinity";

export function InfinityStrokeWidth() {
  return (
    <div className="flex items-center gap-6">
      <InfinityLoop className="h-10 w-14 [&_path]:[stroke-width:6]" />
      <InfinityLoop className="h-10 w-14 [&_path]:[stroke-width:10]" />
      <InfinityLoop className="h-10 w-14 [&_path]:[stroke-width:14]" />
    </div>
  );
}
