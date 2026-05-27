import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MorphingInfinity } from "@/registry/components/loading-ui/morphing-infinity";

export default function MorphingInfinityTabs() {
  return (
    <Tabs defaultValue="reply" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="reply">Reply</TabsTrigger>
        <TabsTrigger value="sources">Sources</TabsTrigger>
      </TabsList>
      <TabsContent value="reply" className="bg-card rounded-md border p-4">
        <MorphingInfinity className="-mx-3 -my-2" />
      </TabsContent>
      <TabsContent
        value="sources"
        className="bg-card text-muted-foreground rounded-md border p-4 text-sm"
      >
        Sources will appear after the response is ready.
      </TabsContent>
    </Tabs>
  );
}
