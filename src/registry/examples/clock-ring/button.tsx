import { Button } from "@/components/ui/button";
import { ClockRing } from "@/registry/components/loading-ui/clock-ring";

export default function ClockRingButton() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button size="sm">
        <ClockRing className="size-4" data-icon="inline-start" />
        Snoozing alarms
      </Button>
      <Button variant="outline" size="sm">
        <ClockRing className="size-4" data-icon="inline-start" />
        Resolving timezone
      </Button>
      <Button variant="secondary" size="sm">
        <ClockRing className="size-4" data-icon="inline-start" />
        Waiting on scheduler
      </Button>
    </div>
  );
}
