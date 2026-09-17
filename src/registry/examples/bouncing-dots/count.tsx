import { BouncingDots } from "@/registry/components/loading-ui/bouncing-dots";

export function BouncingDotsCount() {
  return (
    <div className="flex flex-col items-center gap-8">
      <BouncingDots dots={3} className="w-16" />
      <BouncingDots dots={4} className="w-20" />
      <BouncingDots dots={5} className="w-24" />
    </div>
  );
}
