import { transformIcons, transformMenu, transformRender } from "shadcn/utils";
import { Project, ScriptKind, type SourceFile } from "ts-morph";

function buildDisplayConfig() {
  return {
    $schema: "https://ui.shadcn.com/schema.json",
    style: "base-nova",
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
  code = code.replaceAll(`@/registry`, "@");
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

    await Promise.all(
      transformers.map(transformer =>
        transformer({
          filename: "component.tsx",
          raw: code,
          sourceFile,
          config,
        }),
      ),
    );

    return sourceFile.getText().trim();
  } catch (error) {
    console.error("Transform failed:", error);
    return code;
  }
}
