import { Index } from "@/registry/__index__";
import { RequestComponent } from "@/components/home/request-component";
import { ExamplesSection } from "./examples-section";
import { ExampleTile } from "./example-tile";

export const Examples = () => {
  const names = Object.keys(Index).filter(
    (name) => Index[name].type === "registry:component",
  );

  return (
    <ExamplesSection>
      {names.map((name) => (
        <ExampleTile key={name} name={name} />
      ))}

      <RequestComponent />
    </ExamplesSection>
  );
};
