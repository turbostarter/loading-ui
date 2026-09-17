import { BobbingDots } from "@/registry/components/loading-ui/bobbing-dots";

export function BobbingDotsSize() {
  return (
    <div className="flex flex-col items-center gap-8">
      <BobbingDots className="w-10" />
      <BobbingDots className="w-14" />
      <BobbingDots className="w-20" />
      <BobbingDots className="w-28" />
    </div>
  );
}
