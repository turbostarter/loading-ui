import { Terminal } from "@/registry/components/loading-ui/terminal";

export function TerminalColor() {
  return (
    <div className="flex flex-col items-center gap-3 text-sm">
      <Terminal className="text-[#2563eb]" prompt="$" />
      <Terminal className="text-[#16a34a]" prompt=">" />
      <Terminal className="text-[#e11d48]" prompt="#" />
    </div>
  );
}
