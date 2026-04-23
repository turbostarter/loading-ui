import { Dots } from "@/registry/components/loading-ui/dots";

export function DotsCount() {
  return (
    <div className="flex gap-8 flex-col items-center">
      <Dots dots={3} className="w-16" />
      <Dots dots={4} className="w-20" />
      <Dots dots={5} className="w-24" />
    </div>
  );
}
