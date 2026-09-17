import { WanderingEyes } from "@/registry/components/loading-ui/wandering-eyes";

export function WanderingEyesVariables() {
  return (
    <div className="flex flex-col items-center">
      <WanderingEyes className="h-20 w-[180px] [--eye-color:#f8fafc] [--pupil-color:#0f172a]" />
      <WanderingEyes className="h-20 w-[180px] [--eye-color:#dcfce7] [--pupil-color:#166534]" />
      <WanderingEyes className="h-20 w-[180px] [--eye-color:#ffe4e6] [--pupil-color:#be123c]" />
    </div>
  );
}
