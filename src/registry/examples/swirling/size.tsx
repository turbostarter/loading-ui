import { Swirling } from "@/registry/components/loading-ui/swirling";

export function SwirlingSize() {
  return (
    <div className="flex items-center gap-6">
      <Swirling className="size-8" />
      <Swirling className="size-12" />
      <Swirling className="size-16" />
      <Swirling className="size-20" />
    </div>
  );
}
