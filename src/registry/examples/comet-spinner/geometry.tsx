import { CometSpinner } from "@/registry/components/loading-ui/comet-spinner";

export function CometSpinnerGeometry() {
  return (
    <div className="flex items-center gap-16 *:size-12">
      <CometSpinner headScale={0.14} radiusScale={0.72} />
      <CometSpinner headScale={0.2} radiusScale={0.83} />
      <CometSpinner headScale={0.21} radiusScale={0.72} />
    </div>
  );
}
