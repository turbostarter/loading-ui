import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PulseDot } from "@/registry/components/loading-ui/pulse-dot";

export default function PulseDotTabs() {
  return (
    <Tabs defaultValue="reply" className="w-full max-w-md">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="reply">Reply</TabsTrigger>
        <TabsTrigger value="sources">Sources</TabsTrigger>
      </TabsList>
      <TabsContent value="reply">
        <div className="bg-muted/40 text-muted-foreground flex items-center gap-2 rounded-xl border px-4 py-6 text-sm">
          <PulseDot className="mr-1 size-3 shrink-0" />
          <span>
            Same single-dot idiom you see in{" "}
            <span className="text-foreground font-medium">ChatGPT</span> while a
            response is generating: minimal chrome, clear “still working” cue.
          </span>
        </div>
      </TabsContent>
      <TabsContent value="sources">
        <div className="text-muted-foreground rounded-xl border border-dashed p-5 text-sm">
          Citations load after the assistant finishes the visible reply.
        </div>
      </TabsContent>
    </Tabs>
  );
}
