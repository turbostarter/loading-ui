import { InfinityLoop } from "@/registry/components/loading-ui/infinity";

export function InfinityDuration() {
  return (
    <div className="flex items-center gap-6">
      <InfinityLoop className="h-10 w-14 [--duration:900ms]" />
      <InfinityLoop className="h-10 w-14 [--duration:2s]" />
      <InfinityLoop className="h-10 w-14 [--duration:3.5s]" />
    </div>
  );
}
