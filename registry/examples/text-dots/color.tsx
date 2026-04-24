import { TextDots } from "@/registry/components/loading-ui/text-dots";

export function TextDotsColor() {
  return (
    <div className="flex flex-col items-center gap-3 text-sm font-medium">
      <TextDots className="text-[#2563eb]">Searching</TextDots>
      <TextDots className="text-[#16a34a]">Publishing</TextDots>
      <TextDots className="text-[#e11d48]">Retrying</TextDots>
    </div>
  );
}
