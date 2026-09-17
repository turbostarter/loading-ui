import { Skeleton } from "@/registry/components/loading-ui/skeleton";

export function SkeletonTable() {
  return (
    <div className="w-full max-w-lg rounded-xl border">
      <div className="grid grid-cols-[1.5fr_1fr_1fr] gap-4 border-b p-3">
        <Skeleton className="h-4 w-[120px]" />
        <Skeleton className="h-4 w-[72px]" />
        <Skeleton className="h-4 w-[88px]" />
      </div>
      {Array.from({ length: 4 }, (_, index) => (
        <div
          key={index}
          className="grid grid-cols-[1.5fr_1fr_1fr] gap-4 border-b p-3 last:border-b-0"
        >
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      ))}
    </div>
  );
}
