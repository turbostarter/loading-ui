import { Button } from "@/components/ui/button";
import { Ripple } from "@/registry/components/loading-ui/ripple";

export default function RippleButton() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button size="sm">
        <Ripple className="size-4" data-icon="inline-start" />
        Pinging services
      </Button>
      <Button variant="outline" size="sm">
        <Ripple className="size-4" data-icon="inline-start" />
        Sweeping cache
      </Button>
      <Button variant="secondary" size="sm">
        <Ripple className="size-4" data-icon="inline-start" />
        Echo check
      </Button>
    </div>
  );
}
