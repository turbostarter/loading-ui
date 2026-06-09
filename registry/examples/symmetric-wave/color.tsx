import { SymmetricWave } from "@/registry/components/loading-ui/symmetric-wave";

export function SymmetricWaveColor() {
  return (
    <div className="flex flex-col items-center gap-5">
      <SymmetricWave className="text-[#2563eb]" />
      <SymmetricWave className="text-[#16a34a]" />
      <SymmetricWave className="text-[#e11d48]" />
    </div>
  );
}
