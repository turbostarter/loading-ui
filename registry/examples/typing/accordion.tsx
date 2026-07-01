import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Typing } from "@/registry/components/loading-ui/typing";

export default function TypingAccordion() {
  return (
    <Accordion defaultValue={["status"]} className="w-full max-w-md">
      <AccordionItem value="status">
        <AccordionTrigger className="items-center gap-3 py-4 hover:no-underline">
          <div className="bg-muted flex h-10 w-14 shrink-0 items-center justify-center rounded-md">
            <Typing className="w-8" />
          </div>
          <span className="flex flex-col gap-0.5 text-left">
            <span>Collaborators are typing</span>
            <span className="text-muted-foreground text-xs font-normal">
              Vertical motion reads like keystrokes. Expand for participant
              list.
            </span>
          </span>
        </AccordionTrigger>
        <AccordionContent>
          <ul className="text-muted-foreground list-inside list-disc space-y-1 text-sm">
            <li>Jamie - product brief</li>
            <li>Avery - legal review</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="history">
        <AccordionTrigger>Earlier revisions</AccordionTrigger>
        <AccordionContent>
          <p className="text-muted-foreground text-sm">
            Versions unlock after the current edit session settles.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
