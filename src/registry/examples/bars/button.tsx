import { Button } from "@/components/ui/button";
import { Bars } from "@/registry/components/loading-ui/bars";

export default function BarsButton() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button size="sm">
        <Bars className="h-4 w-5 shrink-0" />
        Processing
      </Button>
      <Button variant="outline" size="sm">
        <Bars className="h-4 w-5 shrink-0" />
        Optimizing
      </Button>
      <Button variant="secondary" size="sm">
        <Bars className="h-4 w-7 shrink-0" bars={5} />
        Balancing load
      </Button>
    </div>
  );
}
