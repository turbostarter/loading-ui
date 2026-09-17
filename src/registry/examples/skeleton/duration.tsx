import { Skeleton } from "@/registry/components/loading-ui/skeleton";

export function SkeletonDuration() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <Skeleton className="h-4 w-full [--duration:1s]" />
      <Skeleton className="h-4 w-5/6 [--duration:2s]" />
      <Skeleton className="h-4 w-2/3 [--duration:3s]" />
    </div>
  );
}
