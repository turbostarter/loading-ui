import Link from "next/link";
import { Section } from "@/components/common/section";
import { ArrowUpRight } from "lucide-react";
import { getCLICommand, getOpenInV0Url, getRegistryItem } from "@/lib/registry";
import { Index } from "@/registry/__index__";
import { ExamplesIndex } from "@/registry/examples/__index__";
import {
  CopyComponent,
  CopyCLICommand,
  OpenInV0,
} from "@/components/home/example-actions";
import { RequestComponent } from "@/components/home/request-component";

export const Examples = async () => {
  const tiles = await Promise.all(
    Object.entries(Index).map(async ([name, entry]) => {
      const ExampleComponent = ExamplesIndex[`${entry.name}-demo`]?.component;

      if (!ExampleComponent) {
        return null;
      }

      const item = await getRegistryItem(entry.name);
      return { name, entry, item, ExampleComponent };
    }),
  );

  return (
    <Section className="bg-border flex flex-wrap content-start items-stretch gap-px p-0!">
      {tiles.map((tile) => {
        if (!tile) {
          return null;
        }

        const { name, item, ExampleComponent } = tile;

        return (
          <div
            key={name}
            className="group/component relative aspect-4/3 w-full max-w-full shrink-0 grow-0 sm:w-[calc((100%-1px)/2)] md:w-[calc((100%-2px)/3)] lg:w-[calc((100%-3px)/4)]"
          >
            <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-end p-4 opacity-0 transition-opacity group-hover/component:opacity-100 pointer-coarse:opacity-100">
              <div className="flex items-center gap-1.5">
                <CopyComponent item={item} />
                <CopyCLICommand
                  item={item}
                  command={getCLICommand(item.name)}
                />
                <OpenInV0 item={item} href={getOpenInV0Url(item.name)} />
              </div>
            </div>
            <Link
              href={`/docs/components/${item.name}`}
              className="bg-background flex size-full items-center justify-center"
            >
              <ExampleComponent />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-5 py-4">
                <span className="text-muted-foreground group-hover/component:text-foreground truncate text-sm transition-colors">
                  {item.name}
                </span>

                <ArrowUpRight className="size-4 opacity-0 transition-opacity group-hover/component:opacity-100 pointer-coarse:opacity-100" />
              </div>
            </Link>
          </div>
        );
      })}

      <RequestComponent />
    </Section>
  );
};
