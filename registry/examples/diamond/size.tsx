import { Diamond } from "@/registry/components/loading-ui/diamond";

export function DiamondSize() {
  return (
    <div className="flex items-center gap-4">
      <Diamond className="size-6" />
      <Diamond className="size-8" />
      <Diamond className="size-10" />
    </div>
  );
}
