import { createServerFn } from "@tanstack/react-start";
import * as React from "react";

import { formatCode } from "@/lib/format-code";
import { highlightCode } from "@/lib/highlight-code";
import { readFileFromRoot } from "@/lib/read-file";
import { getDemoItem, getRegistryItem } from "@/lib/registry";
import { cn } from "@/lib/utils";
import { CodeCollapsibleWrapper } from "@/components/common/code-collapsible-wrapper";
import { CopyButton } from "@/components/common/copy-button";
import { getIconForLanguageExtension } from "@/components/common/icons";

type SourceInput = {
  name?: string;
  src?: string;
  title?: string;
  language?: string;
  maxLines?: number;
};

const getComponentSource = createServerFn({ method: "GET" })
  .validator((input: SourceInput) => input)
  .handler(async ({ data }) => {
    if (!data.name && !data.src) {
      return null;
    }

    let code: string | undefined;

    if (data.name) {
      const item =
        (await getDemoItem(data.name)) ?? (await getRegistryItem(data.name));
      code = item?.files?.[0]?.content;
    }

    if (data.src) {
      code = await readFileFromRoot(data.src);
    }

    if (!code) {
      return null;
    }

    code = await formatCode(code);

    if (data.maxLines) {
      code = code.split("\n").slice(0, data.maxLines).join("\n");
    }

    const lang = data.language ?? data.title?.split(".").pop() ?? "tsx";

    return {
      code,
      highlightedCode: await highlightCode(code, lang),
      language: lang,
      title: data.title,
    };
  });

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
