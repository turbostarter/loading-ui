import { Badge } from "@/components/ui/badge";
import { AnalyzingImage } from "@/registry/components/loading-ui/analyzing-image";

export default function AnalyzingImageBadge() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Badge>
        <AnalyzingImage className="size-4 [--loading-ui-analyzing-image-background:var(--primary)]" />
        Analyzing
      </Badge>
      <Badge variant="secondary">
        <AnalyzingImage className="size-4 [--loading-ui-analyzing-image-background:var(--secondary)]" />
        OCR
      </Badge>
      <Badge variant="outline">
        <AnalyzingImage className="size-4" />
        Vision
      </Badge>
    </div>
  );
}
