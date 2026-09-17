import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { InfinityLoop } from "@/registry/components/loading-ui/infinity";

export default function InfinityCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <div className="flex items-center gap-3">
          <InfinityLoop className="h-8 w-10 text-[#2563eb]" />
          <div>
            <CardTitle>Background sync</CardTitle>
            <CardDescription>Keeping project data up to date.</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3 text-sm">
        <div className="flex items-center justify-between">
          <span>Repositories</span>
          <span className="text-muted-foreground">Live</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Usage events</span>
          <span className="text-muted-foreground">Streaming</span>
        </div>
      </CardContent>
    </Card>
  );
}
