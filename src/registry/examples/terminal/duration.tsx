import { Terminal } from "@/registry/components/loading-ui/terminal";

export function TerminalDuration() {
  return (
    <div className="flex flex-col items-center gap-3 text-sm">
      <Terminal className="[--duration:600ms]" prompt="$" />
      <Terminal className="[--duration:1s]" prompt="$" />
      <Terminal className="[--duration:1.5s]" prompt="$" />
    </div>
  );
}
