import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MorphingInfinity } from "@/registry/components/loading-ui/morphing-infinity";

export default function MorphingInfinityTabs() {
  return (
    <Tabs defaultValue="reply" className="w-full max-w-md">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="reply">Reply</TabsTrigger>
        <TabsTrigger value="sources">Sources</TabsTrigger>
      </TabsList>
      <TabsContent value="reply">
        <div className="bg-card text-card-foreground rounded-xl border p-5 shadow-xs">
          <div className="flex items-start gap-3">
            <MorphingInfinity className="-mt-0.5 size-6 shrink-0" />
            <div className="space-y-1">
              <div className="font-medium">Drafting response</div>
              <p className="text-muted-foreground text-sm">
                Assembling a structured answer from the current workspace
                context.
              </p>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="sources">
        <div className="text-muted-foreground rounded-xl border border-dashed p-5 text-sm">
          Sources will appear after the response is ready.
        </div>
      </TabsContent>
    </Tabs>
  );
}
