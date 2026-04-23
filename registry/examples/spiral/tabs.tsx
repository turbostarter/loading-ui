import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Spiral } from "@/registry/components/loading-ui/spiral";

export default function SpiralTabs() {
  return (
    <Tabs defaultValue="summary" className="w-full max-w-md">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="summary">Summary</TabsTrigger>
        <TabsTrigger value="changes">Changes</TabsTrigger>
      </TabsList>
      <TabsContent value="summary">
        <div className="bg-card text-card-foreground rounded-xl border p-5 shadow-xs">
          <div className="flex items-start gap-3">
            <div className="rounded-full bg-primary/10 p-2 text-primary">
              <Spiral className="size-5" dots={8} />
            </div>
            <div className="space-y-1">
              <div className="font-medium">Generating summary</div>
              <p className="text-muted-foreground text-sm">
                Pulling together the latest edits, risks, and recommendations.
              </p>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="changes">
        <div className="rounded-xl border border-dashed p-5 text-sm text-muted-foreground">
          File changes stay available while the summary view updates.
        </div>
      </TabsContent>
    </Tabs>
  );
}
