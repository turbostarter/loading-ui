import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { DualArc } from "@/registry/components/loading-ui/dual-arc";

export default function DualArcTabs() {
  return (
    <Tabs defaultValue="overview" className="w-full max-w-md">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="history">History</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <div className="bg-card text-card-foreground rounded-xl border p-5 shadow-xs">
          <div className="flex items-start gap-3">
            <div className="rounded-full bg-primary/10 p-2 text-primary">
              <DualArc className="size-5 border-[3px]" />
            </div>
            <div className="space-y-1">
              <div className="font-medium">Refreshing activity overview</div>
              <p className="text-muted-foreground text-sm">
                Pulling the latest runs, events, and deployment metadata.
              </p>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="history">
        <div className="rounded-xl border border-dashed p-5 text-sm text-muted-foreground">
          Historical events stay available while the current overview refreshes.
        </div>
      </TabsContent>
    </Tabs>
  );
}
