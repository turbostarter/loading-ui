import { Skeleton } from "@/registry/components/loading-ui/skeleton";

export function SkeletonText() {
  return (
    <div className="w-full max-w-md space-y-3">
      <Skeleton className="h-5 w-2/3" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-11/12" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  );
}
