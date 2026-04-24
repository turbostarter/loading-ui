import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TextBlink } from "@/registry/components/loading-ui/text-blink";

export default function TextBlinkTabs() {
  return (
    <Tabs defaultValue="draft" className="w-full max-w-md">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="draft">Draft</TabsTrigger>
        <TabsTrigger value="history">History</TabsTrigger>
      </TabsList>
      <TabsContent value="draft">
        <div className="bg-muted/40 rounded-lg border p-4 text-sm">
          <TextBlink as="p" className="mb-1">
            Autosaving current revision
          </TextBlink>
          <p className="text-muted-foreground">
            Keep the copy short so the blink reads as status, not decoration.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="history">
        <div className="text-muted-foreground rounded-lg border border-dashed p-5 text-sm">
          Saved revisions appear here after the current update settles.
        </div>
      </TabsContent>
    </Tabs>
  );
}
