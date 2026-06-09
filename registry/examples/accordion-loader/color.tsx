import { AccordionLoader } from "@/registry/components/loading-ui/accordion-loader";

export function AccordionLoaderColor() {
  return (
    <div className="flex flex-col items-center gap-5">
      <AccordionLoader className="text-[#2563eb]" />
      <AccordionLoader className="text-[#16a34a]" />
      <AccordionLoader className="text-[#e11d48]" />
    </div>
  );
}
