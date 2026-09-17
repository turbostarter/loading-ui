import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { Skeleton } from "@/registry/components/loading-ui/skeleton";

export function SkeletonCard() {
  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </CardHeader>
      <CardContent>
        <Skeleton className="aspect-video w-full rounded-lg" />
      </CardContent>
    </Card>
  );
}
