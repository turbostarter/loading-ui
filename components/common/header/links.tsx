import Link from "next/link";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { EMAIL } from "@/lib/constants";

export const LINKS = [
  {
    label: "Docs",
    href: "/docs",
  },
  {
    label: "Components",
    href: "/docs/components",
  },
  {
    label: "Sponsor",
    href: `mailto:${EMAIL}`,
  },
];

type LinksProps = {
  className?: string;
};

export function Links({ className }: LinksProps) {
  return (
    <ul className={cn("flex items-center gap-1", className)}>
      {LINKS.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className={cn(
              navigationMenuTriggerStyle(),
              "h-auto bg-transparent px-3 py-1.5 shadow-none transition-all",
            )}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
