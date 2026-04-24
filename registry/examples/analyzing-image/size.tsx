import { AnalyzingImage } from "@/registry/components/loading-ui/analyzing-image";

export function AnalyzingImageSize() {
  return (
    <div className="flex items-end gap-6">
      <AnalyzingImage className="size-10" />
      <AnalyzingImage className="size-14" />
      <AnalyzingImage className="size-20" />
    </div>
  );
}
