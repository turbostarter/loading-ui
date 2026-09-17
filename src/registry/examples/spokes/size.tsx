import { Spokes } from "@/registry/components/loading-ui/spokes";

export function SpokesSize() {
  return (
    <div className="flex items-center gap-6">
      <Spokes className="size-4" />
      <Spokes className="size-6" />
      <Spokes className="size-8" />
      <Spokes className="size-10" />
    </div>
  );
}
