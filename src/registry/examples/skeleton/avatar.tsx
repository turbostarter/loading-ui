import { Skeleton } from "@/registry/components/loading-ui/skeleton";

export function SkeletonAvatar() {
  return (
    <div className="flex items-center gap-4">
      <Skeleton className="size-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[160px]" />
        <Skeleton className="h-4 w-[96px]" />
      </div>
    </div>
  );
}
