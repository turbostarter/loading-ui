import { Dots } from "@/registry/components/loading-ui/dots";

export function DotsSize() {
  return (
    <div className="flex gap-8 flex-col items-center">
      <Dots className="w-10" />
      <Dots className="w-14" />
      <Dots className="w-20" />
      <Dots className="w-28" />
    </div>
  );
}
