import { TextBlink } from "@/registry/components/loading-ui/text-blink";

export function TextBlinkOpacity() {
  return (
    <div className="flex flex-col items-center gap-3 text-sm">
      <TextBlink minOpacity={0.7}>Subtle pulse</TextBlink>
      <TextBlink minOpacity={0.45}>Default pulse</TextBlink>
      <TextBlink minOpacity={0.25}>Strong pulse</TextBlink>
    </div>
  );
}
