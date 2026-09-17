import { Button } from "@/components/ui/button";
import { AnalyzingImage } from "@/registry/components/loading-ui/analyzing-image";

export default function AnalyzingImageButton() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button size="sm">
        <AnalyzingImage
          className="size-4 [--loading-ui-analyzing-image-background:var(--primary)]"
          data-icon="inline-start"
        />
        Analyzing image
      </Button>
      <Button variant="outline" size="sm">
        <AnalyzingImage className="size-4" data-icon="inline-start" />
        Reading details
      </Button>
      <Button variant="secondary" size="sm">
        <AnalyzingImage
          className="size-4 [--loading-ui-analyzing-image-background:var(--secondary)]"
          data-icon="inline-start"
        />
        Checking scene
      </Button>
    </div>
  );
}
