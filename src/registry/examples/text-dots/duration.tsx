import { TextDots } from "@/registry/components/loading-ui/text-dots";

export function TextDotsDuration() {
  return (
    <div className="flex flex-col items-center gap-3 text-sm font-medium">
      <TextDots className="[--delay:120ms] [--duration:900ms]">
        Fast check
      </TextDots>
      <TextDots className="[--delay:200ms] [--duration:1.4s]">
        Thinking
      </TextDots>
      <TextDots className="[--delay:280ms] [--duration:2s]">Slow sync</TextDots>
    </div>
  );
}
