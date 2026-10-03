import { getHomeDemoComponent } from "@/lib/registry/home-demos";

export function ExamplePreview({ name }: { name: string }) {
  const Demo = getHomeDemoComponent(name);

  return (
    <div className="flex size-full items-center justify-center">
      {Demo ? <Demo /> : null}
    </div>
  );
}
