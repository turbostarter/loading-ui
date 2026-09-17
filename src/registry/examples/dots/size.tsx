import { Dots } from "@/registry/components/loading-ui/dots";

export function DotsSize() {
  return (
    <div className="flex flex-col items-center gap-8">
      <Dots className="w-10" />
      <Dots className="w-14" />
      <Dots className="w-20" />
      <Dots className="w-28" />
    </div>
  );
}
