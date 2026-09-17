import { Typing } from "@/registry/components/loading-ui/typing";

export function TypingCount() {
  return (
    <div className="flex flex-col items-center gap-8">
      <Typing dots={3} className="w-16" />
      <Typing dots={4} className="w-20" />
      <Typing dots={5} className="w-24" />
    </div>
  );
}
