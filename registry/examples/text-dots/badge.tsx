import { Badge } from "@/components/ui/badge";
import { TextDots } from "@/registry/components/loading-ui/text-dots";

export default function TextDotsBadge() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Badge>
        <TextDots>Live</TextDots>
      </Badge>
      <Badge variant="secondary">
        <TextDots>Queued</TextDots>
      </Badge>
      <Badge variant="outline">
        <TextDots>Syncing</TextDots>
      </Badge>
    </div>
  );
}
