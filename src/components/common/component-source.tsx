import * as React from "react";
import { useSuspenseQuery } from "@tanstack/react-query";

import { CodeCollapsibleWrapper } from "@/components/common/code-collapsible-wrapper";
import { CopyButton } from "@/components/common/copy-button";
import { getIconForLanguageExtension } from "@/components/common/icons";
import { componentSourceQueryInput } from "@/lib/component-source-query";
import { getComponentSource } from "@/lib/get-component-source";
import { cn } from "@/lib/utils";

type ComponentSourceProps = React.ComponentProps<"div"> & {
  name?: string;
  src?: string;
  title?: string;
  language?: string;
  collapsible?: boolean;
  maxLines?: number;
};

export function ComponentSource(props: ComponentSourceProps) {
  return (
    <React.Suspense fallback={null}>
      <ComponentSourceContent {...props} />
    </React.Suspense>
  );
}

function ComponentSourceContent({
  name,
  src,
  title,
  language,
  collapsible = true,
  className,
  maxLines,
}: ComponentSourceProps) {
  const input = componentSourceQueryInput({
    name,
    src,
    title,
    language,
    maxLines,
  });
  const { data } = useSuspenseQuery({
    queryKey: ["component-source", input],
    queryFn: () => getComponentSource({ data: input }),
  });

  if (!data) {
    return null;
  }

  if (!collapsible) {
    return (
      <div className={cn("relative", className)}>
        <ComponentCode
          code={data.code}
          highlightedCode={data.highlightedCode}
          language={data.language}
          title={data.title}
        />
      </div>
    );
  }

  return (
    <CodeCollapsibleWrapper className={className}>
      <ComponentCode
        code={data.code}
        highlightedCode={data.highlightedCode}
        language={data.language}
        title={data.title}
      />
    </CodeCollapsibleWrapper>
  );
}

function ComponentCode({
  code,
  highlightedCode,
  language,
  title,
}: {
  code: string;
  highlightedCode: string;
  language: string;
  title: string | undefined;
}) {
  return (
    <figure data-rehype-pretty-code-figure="" className="[&>pre]:max-h-96">
      {title && (
        <figcaption
          data-rehype-pretty-code-title=""
          className="text-code-foreground [&_svg]:text-code-foreground flex items-center gap-2 [&_svg]:size-4 [&_svg]:opacity-70"
          data-language={language}
        >
          {getIconForLanguageExtension(language)}
          {title}
        </figcaption>
      )}
      <CopyButton
        value={code}
        className="opacity-70 hover:opacity-100 focus-visible:opacity-100"
      />
      <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    </figure>
  );
}
