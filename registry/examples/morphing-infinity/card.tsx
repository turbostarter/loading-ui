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
        <MorphingInfinity className="bg-muted/40 rounded-md border" />
      </CardContent>
    </Card>
  );
}
