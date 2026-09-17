import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SatelliteRing } from "@/registry/components/loading-ui/satellite-ring";

export default function SatelliteRingAccordion() {
  return (
    <Accordion defaultValue={["rollout"]} className="w-full max-w-md">
      <AccordionItem value="rollout">
        <AccordionTrigger className="items-center gap-3 py-4 hover:no-underline">
          <div className="bg-muted flex size-9 shrink-0 items-center justify-center rounded-full">
            <SatelliteRing className="size-4" />
          </div>
          <span className="flex flex-col gap-0.5 text-left">
            <span>Regional rollout in flight</span>
            <span className="text-muted-foreground text-xs font-normal">
              Edge caches and workers are receiving the latest bundle.
            </span>
          </span>
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-muted-foreground pb-2 text-sm">
            Satellites stay visible while shards catch up so operators can tell
            the propagation is still moving, not stalled.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="health">
        <AccordionTrigger>Health checks</AccordionTrigger>
        <AccordionContent>
          <p className="text-muted-foreground pb-2 text-sm">
            Synthetic probes will flip to green once all regions acknowledge the
            new revision.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
