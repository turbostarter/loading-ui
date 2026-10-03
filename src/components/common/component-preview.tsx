import * as React from "react";

import { getRegistryComponent } from "@/lib/registry/client";
import { ComponentSource } from "@/components/common/component-source";
import { ComponentPreviewTabs } from "./component-preview-tabs";

export function ComponentPreview({
  name,
  className,
  previewClassName,
  align = "center",
  hideCode = false,
  caption,
  ...props
}: React.ComponentProps<"div"> & {
  name: string;
  align?: "center" | "start" | "end";
  description?: string;
  hideCode?: boolean;
  previewClassName?: string;
  caption?: string;
}) {
  const Component = getRegistryComponent(name);

  if (!Component) {
    return (
      <p className="text-muted-foreground mt-6 text-sm">
        Component{" "}
        <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm">
          {name}
        </code>{" "}
        not found in registry.
      </p>
    );
  }

  const content = (
    <ComponentPreviewTabs
      className={className}
      previewClassName={previewClassName}
      align={align}
      hideCode={hideCode}
      component={React.createElement(Component)}
      source={<ComponentSource name={name} collapsible={false} />}
      sourcePreview={
        <ComponentSource name={name} collapsible={false} maxLines={3} />
      }
      {...props}
    />
  );

  if (caption) {
    return (
      <figure
        data-hide-code={hideCode}
        className="flex flex-col data-[hide-code=true]:gap-4"
      >
        {content}
        <figcaption className="text-muted-foreground -mt-8 text-center text-sm data-[hide-code=true]:mt-0">
          {caption}
        </figcaption>
      </figure>
    );
  }

  return content;
}
