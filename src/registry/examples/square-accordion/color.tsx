import { SquareAccordion } from "@/registry/components/loading-ui/square-accordion";

export function SquareAccordionColor() {
  return (
    <div className="flex items-center gap-8">
      <SquareAccordion className="text-[#2563eb]" />
      <SquareAccordion className="text-[#16a34a]" />
      <SquareAccordion className="text-[#e11d48]" />
    </div>
  );
}
