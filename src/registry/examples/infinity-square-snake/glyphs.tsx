import { InfinitySquareSnake } from "@/registry/components/loading-ui/infinity-square-snake";

export function InfinitySquareSnakeGlyphs() {
  return (
    <div className="flex flex-col items-center gap-5">
      <InfinitySquareSnake />
      <InfinitySquareSnake blocks={["●", "◐", "○", "·"]} />
      <InfinitySquareSnake blocks={["■", "▪", "▫", "·"]} />
    </div>
  );
}
