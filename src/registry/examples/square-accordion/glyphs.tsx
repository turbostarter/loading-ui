import { SquareAccordion } from "@/registry/components/loading-ui/square-accordion";

export function SquareAccordionGlyphs() {
  return (
    <div className="flex items-center gap-8">
      <SquareAccordion />
      <SquareAccordion blocks={["●", "◐", "○"]} track="·" />
      <div className="bg-muted rounded p-4 [--mask-color:var(--muted)]">
        <SquareAccordion blocks={["■", "▪", "▫"]} track="·" />
      </div>
    </div>
  );
}
