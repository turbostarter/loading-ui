import { AnalyzingImage } from "@/registry/components/loading-ui/analyzing-image";

export function AnalyzingImageColor() {
  return (
    <div className="flex items-center gap-6">
      <AnalyzingImage className="size-14 text-[#2563eb]" />
      <AnalyzingImage className="size-14 text-[#16a34a]" />
      <AnalyzingImage className="size-14 text-[#e11d48]" />
    </div>
  );
}
