import { SquareSnake } from "@/registry/components/loading-ui/square-snake";

export function SquareSnakeDuration() {
  return (
    <div className="flex items-center gap-8">
      <SquareSnake className="[--duration:1.4s]" />
      <SquareSnake className="[--duration:2s]" />
      <SquareSnake className="[--duration:3s]" />
    </div>
  );
}
