import { Button } from "@/components/ui/button";
import { TextDots } from "@/registry/components/loading-ui/text-dots";

export default function TextDotsButton() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button size="sm">
        <TextDots>Saving</TextDots>
      </Button>
      <Button variant="outline" size="sm">
        <TextDots>Checking availability</TextDots>
      </Button>
      <Button variant="secondary" size="sm">
        <TextDots>Preparing preview</TextDots>
      </Button>
    </div>
  );
}
