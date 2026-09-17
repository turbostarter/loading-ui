import { SymmetricWave } from "@/registry/components/loading-ui/symmetric-wave";

export function SymmetricWaveSize() {
  return (
    <div className="flex flex-col items-center gap-6">
      <SymmetricWave className="text-base" />
      <SymmetricWave className="text-xl" />
      <SymmetricWave className="text-3xl" />
    </div>
  );
}
