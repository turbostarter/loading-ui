import { Classic } from "@/registry/components/loading-ui/classic";

export function ClassicSize() {
  return (
    <div className="flex items-center gap-6">
      <Classic className="size-4" />
      <Classic className="size-6" />
      <Classic className="size-8" />
      <Classic className="size-10" />
    </div>
  );
}
