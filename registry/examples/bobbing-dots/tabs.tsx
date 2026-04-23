import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BobbingDots } from "@/registry/components/loading-ui/bobbing-dots";

export default function BobbingDotsTabs() {
  return (
    <Tabs defaultValue="preview" className="w-full max-w-md">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="timeline">Timeline</TabsTrigger>
      </TabsList>
      <TabsContent value="preview">
        <div className="relative overflow-hidden rounded-xl border bg-card bg-gradient-to-br from-primary/5 via-card to-muted/30 p-8 shadow-xs">
          <div className="flex flex-col items-center gap-4">
            <BobbingDots className="text-primary w-14" dots={4} />
            <div className="space-y-1 text-center">
              <p className="text-sm font-medium">Rendering motion study</p>
              <p className="text-muted-foreground text-xs">
                Tab away—the bounce keeps looping so the panel feels alive.
              </p>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="timeline">
        <div className="rounded-xl border border-dashed p-5 text-sm text-muted-foreground">
          Keyframes appear here once the playful pass completes.
        </div>
      </TabsContent>
    </Tabs>
  );
}
