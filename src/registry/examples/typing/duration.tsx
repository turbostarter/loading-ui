import { Typing } from "@/registry/components/loading-ui/typing";

export function TypingDuration() {
  return (
    <div className="flex items-end gap-8 *:w-16">
      <Typing className="[--duration:700ms]" />
      <Typing className="[--duration:1s]" />
      <Typing className="[--duration:1.5s]" />
    </div>
  );
}
