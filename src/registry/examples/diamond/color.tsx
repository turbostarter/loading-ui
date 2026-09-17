import { Diamond } from "@/registry/components/loading-ui/diamond";

export function DiamondColor() {
  return (
    <div className="flex items-center gap-4">
      <Diamond className="size-8 text-[#2563eb]" />
      <Diamond className="size-8 text-[#16a34a]" />
      <Diamond className="size-8 text-[#e11d48]" />
    </div>
  );
}
