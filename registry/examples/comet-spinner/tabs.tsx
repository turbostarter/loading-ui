import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CometSpinner } from "@/registry/components/loading-ui/comet-spinner";

export default function CometSpinnerTabs() {
  return (
    <Tabs defaultValue="transfer" className="w-full max-w-md">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="transfer">Transfer</TabsTrigger>
        <TabsTrigger value="integrity">Integrity</TabsTrigger>
      </TabsList>
      <TabsContent value="transfer">
        <div className="bg-card text-card-foreground rounded-xl border p-5 shadow-xs">
          <div className="flex items-start gap-3">
            <CometSpinner className="size-3 [--duration:1.5s]" />
            <div className="space-y-1">
              <div className="font-medium">Burst upload active</div>
              <p className="text-muted-foreground text-sm">
                Throughput is spiking while the tail catches up to the head—
                other tabs stay usable.
              </p>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="integrity">
        <div className="text-muted-foreground rounded-xl border border-dashed p-5 text-sm">
          Checksums will appear here once the comet pass finishes.
        </div>
      </TabsContent>
    </Tabs>
  );
}
