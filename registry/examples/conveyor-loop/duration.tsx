import { ConveyorLoop } from "@/registry/components/loading-ui/conveyor-loop";

export function ConveyorLoopDuration() {
  return (
    <div className="flex flex-col items-center gap-5">
      <ConveyorLoop className="[--duration:1.1s]" />
      <ConveyorLoop className="[--duration:1.8s]" />
      <ConveyorLoop className="[--duration:2.8s]" />
    </div>
  );
}
