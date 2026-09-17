import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DotsRing } from "@/registry/components/loading-ui/dots-ring";

export default function DotsRingTabs() {
  return (
    <Tabs defaultValue="overview" className="w-full max-w-md">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="activity">Activity</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <div className="bg-card text-card-foreground rounded-xl border p-5 shadow-xs">
          <div className="flex items-start gap-3">
            <div className="bg-primary/10 flex size-9 items-center justify-center rounded-full">
              <DotsRing className="size-5" dots={8} dotScale={0.22} />
            </div>
            <div className="space-y-1">
              <div className="font-medium">Refreshing overview</div>
              <p className="text-muted-foreground text-sm">
                Loading the latest metrics and repository activity.
              </p>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="activity">
        <div className="text-muted-foreground rounded-xl border border-dashed p-5 text-sm">
          Historical activity stays available while the overview reloads.
        </div>
      </TabsContent>
    </Tabs>
  );
}
