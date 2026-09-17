import { Button } from "@/components/ui/button";
import { TextBlink } from "@/registry/components/loading-ui/text-blink";

export default function TextBlinkButton() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button size="sm">
        <TextBlink as="span" className="[--duration:1.6s]">
          Saving draft
        </TextBlink>
      </Button>
      <Button variant="outline" size="sm">
        <TextBlink as="span">Checking permissions</TextBlink>
      </Button>
      <Button variant="secondary" size="sm">
        <TextBlink as="span" minOpacity={0.6}>
          Reconnecting
        </TextBlink>
      </Button>
    </div>
  );
}
