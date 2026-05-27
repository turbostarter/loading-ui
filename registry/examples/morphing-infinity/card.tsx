import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MorphingInfinity } from "@/registry/components/loading-ui/morphing-infinity";

export default function MorphingInfinityCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Assistant workspace</CardTitle>
        <CardDescription>Reviewing files and recent changes.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="bg-muted/40 flex items-start gap-3 rounded-md border p-4">
          <MorphingInfinity className="-mt-1 size-6 shrink-0" />
          <div className="space-y-1">
            <div className="text-sm font-medium">Reviewing context</div>
            <p className="text-muted-foreground text-sm">
              Scanning files and recent changes before drafting a reply.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
