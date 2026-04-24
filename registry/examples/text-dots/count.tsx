import { TextDots } from "@/registry/components/loading-ui/text-dots";

export function TextDotsCount() {
  return (
    <div className="flex flex-col items-center gap-3 text-sm font-medium">
      <TextDots dots={2}>Short wait</TextDots>
      <TextDots dots={3}>Thinking</TextDots>
      <TextDots dots={4}>Longer process</TextDots>
    </div>
  );
}
