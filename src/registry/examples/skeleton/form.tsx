import { Skeleton } from "@/registry/components/loading-ui/skeleton";

export function SkeletonForm() {
  return (
    <div className="w-full max-w-sm space-y-4">
      <div className="space-y-2">
        <Skeleton className="h-4 w-[88px]" />
        <Skeleton className="h-9 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-[120px]" />
        <Skeleton className="h-9 w-full" />
      </div>
      <Skeleton className="h-9 w-[104px]" />
    </div>
  );
}
