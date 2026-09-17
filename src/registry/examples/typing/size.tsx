import { Typing } from "@/registry/components/loading-ui/typing";

export function TypingSize() {
  return (
    <div className="flex flex-col items-center gap-8">
      <Typing className="w-10" />
      <Typing className="w-14" />
      <Typing className="w-20" />
      <Typing className="w-28" />
    </div>
  );
}
