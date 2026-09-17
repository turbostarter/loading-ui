import { Badge } from "@/components/ui/badge";
import { Typing } from "@/registry/components/loading-ui/typing";

export default function TypingBadge() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 [--radius:1.2rem]">
      <Badge variant="outline" className="gap-2 py-1 pr-2.5 pl-2 font-normal">
        <Typing className="w-7" />
        Typing
      </Badge>
      <Badge variant="secondary" className="gap-2 py-1 pr-2.5 pl-2 font-normal">
        <Typing className="w-7" />
        Autocomplete
      </Badge>
      <Badge className="gap-2 py-1 pr-2.5 pl-2 font-normal">
        <Typing className="w-7" />
        Live doc
      </Badge>
    </div>
  );
}
