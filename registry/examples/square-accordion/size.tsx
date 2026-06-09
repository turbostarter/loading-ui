import { SquareAccordion } from "@/registry/components/loading-ui/square-accordion";

export function SquareAccordionSize() {
  return (
    <div className="flex items-center gap-8">
      <SquareAccordion className="text-base" size={4} />
      <SquareAccordion className="text-xl" size={5} />
      <SquareAccordion className="text-3xl" size={6} />
    </div>
  );
}
