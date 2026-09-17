import { Typing } from "@/registry/components/loading-ui/typing";

export function TypingColor() {
  return (
    <div className="flex items-end gap-10 *:w-16">
      <Typing className="text-[#10b981]" />
      <Typing className="text-[#8b5cf6]" />
      <Typing className="text-[#f43f5e]" />
    </div>
  );
}
