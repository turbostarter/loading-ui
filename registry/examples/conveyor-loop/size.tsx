import { ConveyorLoop } from "@/registry/components/loading-ui/conveyor-loop";

export function ConveyorLoopSize() {
  return (
    <div className="flex flex-col items-center gap-6">
      <ConveyorLoop className="text-base" trackLength={8} />
      <ConveyorLoop className="text-xl" trackLength={10} />
      <ConveyorLoop className="text-3xl" trackLength={14} />
    </div>
  );
}
