import { SquareSnake } from "@/registry/components/loading-ui/square-snake";

export function SquareSnakeColor() {
  return (
    <div className="flex items-center gap-8">
      <SquareSnake className="text-[#2563eb]" />
      <SquareSnake className="text-[#16a34a]" />
      <SquareSnake className="text-[#e11d48]" />
    </div>
  );
}
