"use client";

import { CopyButton } from "@/components/common/copy-button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Terminal } from "lucide-react";
import { track } from "@vercel/analytics";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/common/icons";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";

async function fetchRegistrySource(name: string) {
  const response = await fetch(`/r/${name}.json`);
  if (!response.ok) {
    throw new Error(`Failed to fetch registry item: ${name}`);
  }

  const data = (await response.json()) as {
    files?: Array<{ content?: string }>;
  };

  return data.files?.[0]?.content ?? "";
}

export const CopyComponent = ({ name }: { name: string }) => {
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            variant="secondary"
            size="icon"
            className="bg-secondary static size-9"
            aria-label="Copy component"
            onClick={async () => {
              const content = await fetchRegistrySource(name);
              await copyToClipboard(content);
              track("component_source_copied", { name });
            }}
          >
            <span className="sr-only">Copy component</span>
            {isCopied ? <Check /> : <Copy />}
          </Button>
        }
      />
      <TooltipContent sideOffset={8}>Copy component</TooltipContent>
    </Tooltip>
  );
};

export const CopyCLICommand = ({
  name,
  command,
}: {
  name: string;
  command: string;
}) => {
  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <CopyButton
            variant="secondary"
            size="icon"
            value={command}
            className="bg-secondary static size-9"
            icon={<Terminal />}
            onClick={() => track("cli_command_copied", { name })}
          />
        }
      />
      <TooltipContent sideOffset={8}>Copy CLI command</TooltipContent>
    </Tooltip>
  );
};

export const OpenInV0 = ({ name, href }: { name: string; href: string }) => {
  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <a
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`Open ${name} in v0`}
            className={cn(
              buttonVariants({
                variant: "secondary",
                size: "icon",
              }),
              "static",
            )}
            onClick={() => track("open_in_v0", { name })}
          >
            <Icons.v0 className="size-4" />
          </a>
        }
      />
      <TooltipContent sideOffset={8}>Open in v0</TooltipContent>
    </Tooltip>
  );
};
