import { SquareSnake } from "@/registry/components/loading-ui/square-snake";

export function SquareSnakeSize() {
  return (
    <div className="flex items-center gap-8">
      <SquareSnake className="text-base" size={4} />
      <SquareSnake className="text-xl" size={5} />
      <SquareSnake className="text-3xl" size={6} />
    </div>
  );
}
