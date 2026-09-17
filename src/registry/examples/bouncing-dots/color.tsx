import { BouncingDots } from "@/registry/components/loading-ui/bouncing-dots";

export function BouncingDotsColor() {
  return (
    <div className="flex items-end gap-10 *:w-16">
      <BouncingDots className="text-[#f59e0b]" />
      <BouncingDots className="text-[#ec4899]" />
      <BouncingDots className="text-[#3b82f6]" />
    </div>
  );
}
