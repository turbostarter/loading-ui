import { AccordionLoader } from "@/registry/components/loading-ui/accordion-loader";

export function AccordionLoaderSize() {
  return (
    <div className="flex flex-col items-center gap-6">
      <AccordionLoader className="text-base" trackLength={10} />
      <AccordionLoader className="text-xl" trackLength={16} />
      <AccordionLoader className="text-3xl" trackLength={20} />
    </div>
  );
}
