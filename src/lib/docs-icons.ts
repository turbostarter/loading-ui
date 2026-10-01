import {
  BookOpen,
  GitPullRequest,
  LayoutGrid,
  Lightbulb,
  Rocket,
  Users,
} from "lucide-react";
import { createElement } from "react";

const icons = {
  BookOpen,
  GitPullRequest,
  LayoutGrid,
  Lightbulb,
  Rocket,
  Users,
};

export function getDocsIcon(name: string | undefined) {
  if (!name) return undefined;
  const Icon = icons[name as keyof typeof icons];
  return Icon ? createElement(Icon) : undefined;
}
