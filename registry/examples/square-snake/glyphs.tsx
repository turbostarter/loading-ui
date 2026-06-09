import { SquareSnake } from "@/registry/components/loading-ui/square-snake";

export function SquareSnakeGlyphs() {
  return (
    <div className="flex items-center gap-8">
      <SquareSnake />
      <SquareSnake blocks={["●", "◐", "○", "·"]} />
      <SquareSnake blocks={["■", "▪", "▫", "·"]} />
    </div>
  );
}
