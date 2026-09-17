import { TextBlink } from "@/registry/components/loading-ui/text-blink";

export function TextBlinkDuration() {
  return (
    <div className="flex flex-col items-center gap-3 text-sm">
      <TextBlink className="[--duration:1s]">Fast save</TextBlink>
      <TextBlink className="[--duration:2s]">Saving draft</TextBlink>
      <TextBlink className="[--duration:3s]">Background sync</TextBlink>
    </div>
  );
}
