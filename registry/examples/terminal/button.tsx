import { Button } from "@/components/ui/button";
import { Terminal } from "@/registry/components/loading-ui/terminal";

export default function TerminalButton() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button size="sm">
        <Terminal prompt="$" data-icon="inline-start" />
        Running script
      </Button>
      <Button variant="outline" size="sm">
        <Terminal prompt=">" data-icon="inline-start" />
        Checking logs
      </Button>
      <Button variant="secondary" size="sm">
        <Terminal prompt="#" data-icon="inline-start" />
        Opening shell
      </Button>
    </div>
  );
}
