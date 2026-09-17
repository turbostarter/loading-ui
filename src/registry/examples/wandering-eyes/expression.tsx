import { WanderingEyes } from "@/registry/components/loading-ui/wandering-eyes";

export function WanderingEyesExpression() {
  return (
    <div className="flex flex-col items-center">
      <WanderingEyes
        className="h-20 w-[180px]"
        blinkScale={0.65}
        pupilScale={0.2}
        travelScale={0.12}
      />
      <WanderingEyes className="h-20 w-[180px]" />
      <WanderingEyes
        className="h-20 w-[180px]"
        eyeScale={0.7}
        gapScale={0.06}
        pupilScale={0.4}
        travelScale={0.48}
      />
    </div>
  );
}
