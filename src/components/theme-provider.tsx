import { ScriptOnce } from "@tanstack/react-router";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Theme = "dark" | "light" | "system";
export type ResolvedTheme = "dark" | "light";

type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
};

function getThemeScript(storageKey: string, defaultTheme: Theme) {
  const key = JSON.stringify(storageKey);
  const fallback = JSON.stringify(defaultTheme);

  return `(function(){try{var t=localStorage.getItem(${key});if(t!=='light'&&t!=='dark'&&t!=='system'){t=${fallback}}var d=matchMedia('(prefers-color-scheme: dark)').matches;var r=t==='system'?(d?'dark':'light'):t;var e=document.documentElement;e.classList.add(r);e.style.colorScheme=r}catch(e){}})();`;
}

const ThemeProviderContext = createContext<ThemeProviderState | null>(null);

function getSystemTheme(): ResolvedTheme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function resolveTheme(theme: Theme): ResolvedTheme {
  if (theme !== "system") {
    return theme;
  }

  if (typeof window === "undefined") {
    return "light";
  }

  return getSystemTheme();
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.remove("light", "dark");

  const resolved = resolveTheme(theme);

  root.classList.add(resolved);
  root.style.colorScheme = resolved;

  return resolved;
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "theme",
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() =>
    defaultTheme === "dark" ? "dark" : "light",
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    const next =
      stored === "light" || stored === "dark" || stored === "system"
        ? stored
        : defaultTheme;

    setThemeState(next);
    setResolvedTheme(resolveTheme(next));
    setMounted(true);
  }, [defaultTheme, storageKey]);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    setResolvedTheme(applyTheme(theme));
  }, [theme, mounted]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (theme === "system") {
        setResolvedTheme(applyTheme("system"));
      }
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [theme]);

  const setTheme = useCallback(
    (next: Theme) => {
      localStorage.setItem(storageKey, next);
      setThemeState(next);
    },
    [storageKey],
  );

  return (
    <ThemeProviderContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      <ScriptOnce>{getThemeScript(storageKey, defaultTheme)}</ScriptOnce>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeProviderContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
