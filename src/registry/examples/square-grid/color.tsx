import { SquareGrid } from "@/registry/components/loading-ui/square-grid";

export function SquareGridColor() {
  return (
    <div className="flex items-center gap-8">
      <SquareGrid className="text-[#2563eb]" />
      <SquareGrid className="text-[#16a34a]" />
      <SquareGrid className="text-[#e11d48]" />
    </div>
  );
}
