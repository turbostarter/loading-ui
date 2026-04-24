import { TextBlink } from "@/registry/components/loading-ui/text-blink";

export function TextBlinkColor() {
  return (
    <div className="flex flex-col items-center gap-3 text-sm">
      <TextBlink className="text-[#2563eb]">Uploading attachment</TextBlink>
      <TextBlink className="text-[#16a34a]">Publishing changes</TextBlink>
      <TextBlink className="text-[#e11d48]">Retrying request</TextBlink>
    </div>
  );
}
