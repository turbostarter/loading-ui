import { Badge } from "@/components/ui/badge";
import { TextBlink } from "@/registry/components/loading-ui/text-blink";

export default function TextBlinkBadge() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Badge>
        <TextBlink as="span" className="[--duration:1.4s]">
          Live edit
        </TextBlink>
      </Badge>
      <Badge variant="secondary">
        <TextBlink as="span">Autosaving</TextBlink>
      </Badge>
      <Badge variant="outline">
        <TextBlink as="span" minOpacity={0.6}>
          Waiting
        </TextBlink>
      </Badge>
    </div>
  );
}
