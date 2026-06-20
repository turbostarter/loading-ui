import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getCLICommand, getOpenInV0Url } from "@/lib/registry";
import { CopyComponent, CopyCLICommand, OpenInV0 } from "./example-actions";
import { ExamplePreview } from "./example-preview";

export function ExampleTile({ name }: { name: string }) {
  const command = getCLICommand(name);
  const openInV0Url = getOpenInV0Url(name);

  return (
    <div className="group/component relative aspect-4/3 w-full max-w-full shrink-0 grow-0 sm:w-[calc((100%-1px)/2)] md:w-[calc((100%-2px)/3)] lg:w-[calc((100%-3px)/4)]">
      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-end p-4 opacity-0 transition-opacity group-focus-within/component:opacity-100 group-hover/component:opacity-100 pointer-coarse:opacity-100">
        <div className="flex items-center gap-1.5">
          <CopyComponent name={name} />
          <CopyCLICommand name={name} command={command} />
          <OpenInV0 name={name} href={openInV0Url} />
        </div>
      </div>
      <Link
        href={`/docs/components/${name}`}
        prefetch={false}
        className="bg-background flex size-full items-center justify-center"
      >
        <ExamplePreview name={name} />
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-5 py-4">
          <span className="text-muted-foreground group-hover/component:text-foreground truncate text-sm transition-colors">
            {name}
          </span>

          <ArrowUpRight className="size-4 opacity-0 transition-opacity group-hover/component:opacity-100 pointer-coarse:opacity-100" />
        </div>
      </Link>
    </div>
  );
}
