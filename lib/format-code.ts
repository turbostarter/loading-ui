import { promises as fsPromises } from "fs";
import path from "path";
import {
  createStyleMap,
  transformIcons,
  transformMenu,
  transformRender,
  transformStyle,
} from "shadcn/utils";
import { Project, ScriptKind, type SourceFile } from "ts-morph";

function buildDisplayConfig() {
  return {
    $schema: "https://ui.shadcn.com/schema.json",
    rsc: true,
    tsx: true,
    tailwind: {
      config: "",
      css: "",
      baseColor: "neutral",
      cssVariables: true,
      prefix: "",
    },
    iconLibrary: "lucide",
    aliases: {
      components: "@/components",
      utils: "@/lib/utils",
      ui: "@/components/ui",
      lib: "@/lib",
      hooks: "@/hooks",
    },
    resolvedPaths: {
      cwd: "/",
      tailwindConfig: "",
      tailwindCss: "",
      utils: "@/lib/utils",
      components: "@/components",
      lib: "@/lib",
      hooks: "@/hooks",
      ui: "@/components/ui",
    },
  };
}

type DisplayTransformer = (opts: {
  filename: string;
  raw: string;
  sourceFile: SourceFile;
  config: ReturnType<typeof buildDisplayConfig>;
}) => Promise<unknown>;

export async function formatCode(code: string) {
  //   code = code.replaceAll(`@/registry/${styleName}/`, "@/components/");

  code = code.replace(
    /@\/styles\/([\w-]+)\/(ui-rtl|ui)\/([\w-]+)/g,
    (match, _styleName, type, component) => {
      if (type === "ui" || type === "ui-rtl") {
        return `@/components/ui/${component}`;
      }

      return match;
    },
  );

  code = code.replaceAll("export default", "export");

  try {
    const config = buildDisplayConfig();
    const project = new Project({ compilerOptions: {} });
    const sourceFile = project.createSourceFile("component.tsx", code, {
      scriptKind: ScriptKind.TSX,
    });

    const transformers: DisplayTransformer[] = [
      transformIcons as DisplayTransformer,
      transformMenu as DisplayTransformer,
      transformRender as DisplayTransformer,
    ];
    for (const transformer of transformers) {
      await transformer({
        filename: "component.tsx",
        raw: code,
        sourceFile,
        config,
      });
    }

    return sourceFile.getText();
  } catch (error) {
    console.error("Transform failed:", error);
    return code;
  }
}
