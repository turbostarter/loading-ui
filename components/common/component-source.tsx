import * as React from "react";

import { CodeCollapsibleWrapper } from "@/components/common/code-collapsible-wrapper";
import { CopyButton } from "@/components/common/copy-button";
import { getIconForLanguageExtension } from "@/components/common/icons";
import { getComponentSource } from "@/lib/component-source.server";
import { cn } from "@/lib/utils";

export function ComponentSource({
  name,
  src,
  title,
  language,
  collapsible = true,
  className,
  maxLines,
}: React.ComponentProps<"div"> & {
  name?: string;
  src?: string;
  title?: string;
  language?: string;
  collapsible?: boolean;
  maxLines?: number;
}) {
  const data = React.use(
    getComponentSource({
      data: { name, src, title, language, maxLines },
    }),
  );

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
