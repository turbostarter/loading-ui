import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Dots } from "@/registry/components/loading-ui/dots";

export default function DotsAccordion() {
  return (
    <Accordion defaultValue={["draft"]} className="w-full max-w-md">
      <AccordionItem value="draft">
        <AccordionTrigger className="items-center gap-3 py-4 hover:no-underline">
          <div className="bg-primary/10 flex h-10 w-14 shrink-0 items-center justify-center rounded-md">
            <Dots className="w-9 text-primary" />
          </div>
          <span className="flex flex-col gap-0.5 text-left">
            <span>Answer is being composed</span>
            <span className="text-muted-foreground text-xs font-normal">
              Expand to see prompts we are weaving into the final reply.
            </span>
          </span>
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-muted-foreground text-sm">
            Blinking dots sell the “still writing” beat without stealing focus
            from the accordion chrome.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="sources">
        <AccordionTrigger>Sources queued</AccordionTrigger>
        <AccordionContent>
          <p className="text-muted-foreground text-sm">
            Citations attach after the visible answer stabilizes.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
