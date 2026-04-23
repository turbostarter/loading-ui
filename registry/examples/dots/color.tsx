import { Dots } from "@/registry/components/loading-ui/dots";

export function DotsColor() {
  return (
    <div className="flex items-center gap-8 *:w-16">
      <Dots className="text-[#0ea5e9]" />
      <Dots className="text-[#c026d3]" />
      <Dots className="text-[#ea580c]" />
    </div>
  );
}
