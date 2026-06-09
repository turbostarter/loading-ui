import { SquareAccordion } from "@/registry/components/loading-ui/square-accordion";

export function SquareAccordionDuration() {
  return (
    <div className="flex items-center gap-8">
      <SquareAccordion className="[--duration:2.4s]" />
      <SquareAccordion className="[--duration:3.5s]" />
      <SquareAccordion className="[--duration:5s]" />
    </div>
  );
}
