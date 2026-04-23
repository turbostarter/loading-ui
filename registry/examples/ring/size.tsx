import { Ring } from "@/registry/components/loading-ui/ring";

export function RingSize() {
  return (
    <div className="flex items-center gap-6">
      <Ring className="size-6" />
      <Ring className="size-8" />
      <Ring className="size-10" />
      <Ring className="size-12" />
    </div>
  );
}
