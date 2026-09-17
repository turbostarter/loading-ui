import { Button } from "@/components/ui/button";
import { Wave } from "@/registry/components/loading-ui/wave";

export default function WaveButton() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button size="sm">
        <Wave className="h-4 w-8 shrink-0" />
        Listening
      </Button>
      <Button variant="outline" size="sm">
        <Wave className="h-4 w-8 shrink-0" />
        Processing audio
      </Button>
      <Button variant="secondary" size="sm">
        <Wave className="h-4 w-8 shrink-0 [--delay:70ms]" />
        Syncing stream
      </Button>
    </div>
  );
}
