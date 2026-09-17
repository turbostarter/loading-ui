import { Badge } from "@/components/ui/badge";
import { Terminal } from "@/registry/components/loading-ui/terminal";

export default function TerminalBadge() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Badge>
        <Terminal prompt="$" />
        Running
      </Badge>
      <Badge variant="secondary">
        <Terminal prompt=">" />
        Shell
      </Badge>
      <Badge variant="outline">
        <Terminal prompt="#" />
        Logs
      </Badge>
    </div>
  );
}
