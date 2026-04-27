"use client";

import { CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";

const COPY_TIMEOUT = 2000;

interface InstallerProps {
  className?: string;
  command: string;
}

export const Installer = ({ command, className = "w-48" }: InstallerProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    void navigator.clipboard.writeText(command);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, COPY_TIMEOUT);
  };

  const Icon = copied ? CheckIcon : CopyIcon;

  return (
    <InputGroup className="bg-background h-9 w-fit px-1 font-mono md:h-10">
      <InputGroupAddon>
        <InputGroupText className="text-muted-foreground font-normal">
          $
        </InputGroupText>
      </InputGroupAddon>
      <InputGroupInput
        aria-label="Install command"
        className={className}
        readOnly
        value={command}
      />
      <InputGroupAddon align="inline-end">
        <InputGroupButton
          aria-label="Copy"
          onClick={handleCopy}
          size="icon-xs"
          title="Copy"
        >
          <Icon className="size-3.5" size={14} />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
};
