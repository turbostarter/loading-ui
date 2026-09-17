import { Terminal } from "@/registry/components/loading-ui/terminal";

export function TerminalPrompt() {
  return (
    <div className="flex flex-col items-center gap-3 text-sm">
      <Terminal prompt="$" />
      <Terminal prompt=">" />
      <Terminal prompt="#" />
    </div>
  );
}
