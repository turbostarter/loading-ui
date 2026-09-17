import { createServerFn } from "@tanstack/react-start";

import { formatCode } from "@/lib/format-code";
import { highlightCode } from "@/lib/highlight-code";
import { readFileFromRoot } from "@/lib/read-file";
import { getDemoItem, getRegistryItem } from "@/lib/registry/index";

type SourceInput = {
  name?: string;
  src?: string;
  title?: string;
  language?: string;
  maxLines?: number;
};

export const getComponentSource = createServerFn({ method: "GET" })
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
