import { InfinitySquareSnake } from "@/registry/components/loading-ui/infinity-square-snake";

export function InfinitySquareSnakeColor() {
  return (
    <div className="flex flex-col items-center gap-5">
      <InfinitySquareSnake className="text-[#2563eb]" />
      <InfinitySquareSnake className="text-[#16a34a]" />
      <InfinitySquareSnake className="text-[#e11d48]" />
    </div>
  );
}
