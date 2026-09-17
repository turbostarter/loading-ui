import { SquareGrid } from "@/registry/components/loading-ui/square-grid";

export function SquareGridDuration() {
  return (
    <div className="flex items-center gap-8">
      <SquareGrid className="[--duration:1.8s]" />
      <SquareGrid className="[--duration:2.8s]" />
      <SquareGrid className="[--duration:4s]" />
    </div>
  );
}
