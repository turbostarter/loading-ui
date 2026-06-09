import { AccordionLoader } from "@/registry/components/loading-ui/accordion-loader";

export function AccordionLoaderGlyphs() {
  return (
    <div className="flex flex-col items-center gap-5">
      <AccordionLoader blocks={["█", "▓", "▒"]} track="░" />
      <AccordionLoader blocks={["●", "◐", "○"]} track="·" />
      <div className="bg-muted rounded p-4 [--mask-color:var(--muted)]">
        <AccordionLoader blocks={["■", "▪", "▫"]} track="·" />
      </div>
    </div>
  );
}
