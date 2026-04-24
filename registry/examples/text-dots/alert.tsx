import {
  Alert,
  AlertDescription,
  AlertMedia,
  AlertTitle,
} from "@/components/ui/alert";
import { TextDots } from "@/registry/components/loading-ui/text-dots";

export default function TextDotsAlert() {
  return (
    <Alert className="w-full max-w-md">
      <AlertMedia className="size-2 translate-y-2 rounded-full bg-current" />
      <AlertTitle>
        <TextDots>Workspace refresh</TextDots>
      </AlertTitle>
      <AlertDescription>
        New comments and edits are being pulled into this view.
      </AlertDescription>
    </Alert>
  );
}
