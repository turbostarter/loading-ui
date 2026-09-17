import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FadeArc } from "@/registry/components/loading-ui/fade-arc";

export default function FadeArcTabs() {
  return (
    <Tabs defaultValue="live" className="w-full max-w-md">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="live">Live feed</TabsTrigger>
        <TabsTrigger value="archive">Archive</TabsTrigger>
      </TabsList>
      <TabsContent value="live">
        <div className="bg-card text-card-foreground rounded-xl border p-5 shadow-xs">
          <div className="flex items-start gap-3">
            <div className="bg-muted rounded-full p-2 leading-0">
              <FadeArc className="size-5" />
            </div>
            <div className="space-y-1">
              <div className="font-medium">Refreshing live data</div>
              <p className="text-muted-foreground text-sm">
                New events will appear here once the stream catches up.
              </p>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="archive">
        <div className="text-muted-foreground rounded-xl border border-dashed p-5 text-sm">
          Archived entries stay available while the live feed reloads.
        </div>
      </TabsContent>
    </Tabs>
  );
}
