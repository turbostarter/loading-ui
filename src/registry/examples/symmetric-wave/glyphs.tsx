import { SymmetricWave } from "@/registry/components/loading-ui/symmetric-wave";

export function SymmetricWaveGlyphs() {
  return (
    <div className="flex flex-col items-center gap-5">
      <SymmetricWave block="█" track="░" />
      <SymmetricWave block="◆" track="·" />
      <SymmetricWave block="●" track="○" />
    </div>
  );
}
