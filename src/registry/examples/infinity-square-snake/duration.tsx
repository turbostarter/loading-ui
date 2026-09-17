import { InfinitySquareSnake } from "@/registry/components/loading-ui/infinity-square-snake";

export function InfinitySquareSnakeDuration() {
  return (
    <div className="flex flex-col items-center gap-5">
      <InfinitySquareSnake className="[--duration:2.2s]" />
      <InfinitySquareSnake className="[--duration:3.2s]" />
      <InfinitySquareSnake className="[--duration:4.8s]" />
    </div>
  );
}
