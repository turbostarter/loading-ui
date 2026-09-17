import { Button } from "@/components/ui/button";
import { Typing } from "@/registry/components/loading-ui/typing";

export default function TypingButton() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button size="sm" variant="ghost" disabled className="gap-2">
        <Typing className="w-9" />
        <span>Someone is typing…</span>
      </Button>
      <Button size="sm" variant="outline" disabled className="gap-2">
        <Typing className="w-8" />
        <span>Search suggesting</span>
      </Button>
      <Button size="sm" variant="secondary" disabled className="gap-2">
        <Typing className="w-8" />
        <span>Co-author editing</span>
      </Button>
    </div>
  );
}
