import { ConveyorLoop } from "@/registry/components/loading-ui/conveyor-loop";

export function ConveyorLoopColor() {
  return (
    <div className="flex flex-col items-center gap-5">
      <ConveyorLoop className="text-[#2563eb]" />
      <ConveyorLoop className="text-[#16a34a]" />
      <ConveyorLoop className="text-[#e11d48]" />
    </div>
  );
}
