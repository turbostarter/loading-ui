import { BouncingDots } from "@/registry/components/loading-ui/bouncing-dots";

export function BouncingDotsSize() {
  return (
    <div className="flex flex-col items-center gap-8">
      <BouncingDots className="w-10" />
      <BouncingDots className="w-14" />
      <BouncingDots className="w-20" />
      <BouncingDots className="w-28" />
    </div>
  );
}
