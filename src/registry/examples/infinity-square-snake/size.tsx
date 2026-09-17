import { InfinitySquareSnake } from "@/registry/components/loading-ui/infinity-square-snake";

export function InfinitySquareSnakeSize() {
  return (
    <div className="flex flex-col items-center gap-6">
      <InfinitySquareSnake className="text-base" />
      <InfinitySquareSnake className="text-xl" />
      <InfinitySquareSnake className="text-3xl" />
    </div>
  );
}
