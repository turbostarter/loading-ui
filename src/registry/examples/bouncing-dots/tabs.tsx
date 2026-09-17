import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BouncingDots } from "@/registry/components/loading-ui/bouncing-dots";

export default function BouncingDotsTabs() {
  return (
    <Tabs defaultValue="live" className="w-full max-w-md">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="live">Live</TabsTrigger>
        <TabsTrigger value="history">History</TabsTrigger>
      </TabsList>
      <TabsContent value="live">
        <div className="bg-card rounded-xl border p-6 shadow-xs">
          <div className="flex flex-col items-center gap-3">
            <BouncingDots className="w-14" />
            <div className="text-center">
              <p className="text-sm font-medium">Ingest still stretching</p>
              <p className="text-muted-foreground mt-1 text-xs">
                Switch tabs freely; the animation loops until the stream closes.
              </p>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="history">
        <div className="text-muted-foreground rounded-xl border border-dashed p-5 text-sm">
          Past runs collapse here once the live buffer finishes.
        </div>
      </TabsContent>
    </Tabs>
  );
}
