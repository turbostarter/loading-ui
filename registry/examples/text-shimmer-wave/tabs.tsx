import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TextShimmerWave } from "@/registry/components/loading-ui/text-shimmer-wave";

export default function TextShimmerWaveTabs() {
  return (
    <Tabs defaultValue="reply" className="w-full max-w-md">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="reply">Reply</TabsTrigger>
        <TabsTrigger value="sources">Sources</TabsTrigger>
      </TabsList>
      <TabsContent value="reply">
        <div className="bg-muted/40 rounded-lg border p-4 text-sm">
          <TextShimmerWave as="p" className="mb-1">
            Composing response
          </TextShimmerWave>
          <p className="text-muted-foreground">
            Keep wave text short so each character remains readable while it
            moves.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="sources">
        <div className="text-muted-foreground rounded-lg border border-dashed p-5 text-sm">
          Sources appear after the reply starts streaming.
        </div>
      </TabsContent>
    </Tabs>
  );
}
