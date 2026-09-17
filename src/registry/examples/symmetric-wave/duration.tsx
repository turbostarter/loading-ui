import { SymmetricWave } from "@/registry/components/loading-ui/symmetric-wave";

export function SymmetricWaveDuration() {
  return (
    <div className="flex flex-col items-center gap-5">
      <SymmetricWave className="[--duration:1.2s]" />
      <SymmetricWave className="[--duration:2s]" />
      <SymmetricWave className="[--duration:3s]" />
    </div>
  );
}
