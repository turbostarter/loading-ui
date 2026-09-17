import { AccordionLoader } from "@/registry/components/loading-ui/accordion-loader";

export function AccordionLoaderDuration() {
  return (
    <div className="flex flex-col items-center gap-5">
      <AccordionLoader className="[--duration:1.8s]" />
      <AccordionLoader className="[--duration:2.8s]" />
      <AccordionLoader className="[--duration:4s]" />
    </div>
  );
}
