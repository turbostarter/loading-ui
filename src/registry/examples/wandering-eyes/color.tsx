import { WanderingEyes } from "@/registry/components/loading-ui/wandering-eyes";

export function WanderingEyesColor() {
  return (
    <div className="flex flex-col items-center">
      <WanderingEyes className="h-20 w-[180px] text-[#2563eb]" />
      <WanderingEyes className="h-20 w-[180px] text-[#16a34a]" />
      <WanderingEyes className="h-20 w-[180px] text-[#e11d48]" />
    </div>
  );
}
