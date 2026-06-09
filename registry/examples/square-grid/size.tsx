import { SquareGrid } from "@/registry/components/loading-ui/square-grid";

export function SquareGridSize() {
  return (
    <div className="flex items-center gap-8">
      <SquareGrid className="text-base" size={4} />
      <SquareGrid className="text-xl" size={5} />
      <SquareGrid className="text-3xl" size={6} />
    </div>
  );
}
