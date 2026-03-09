/** CUSTOM THEME PROVIDER - SSR Compatible with FOUC Prevention
 * - Server-side rendering support with hydration safety
 * - FOUC prevented by head script in __root.tsx
 * - Transition disabling during theme changes
 * - Cross-tab synchronization via storage events
 * - Real-time system theme change detection
 * - Uses React 19's use() hook for Context consumption
 * - Class-based theming for Tailwind/Shadcn compatibility
 * - Proper colorScheme CSS property setting for browser integration
 * - Theme validation to prevent invalid states
 */
import { createContext, use, useEffect, useState, useSyncExternalStore } from "react";

type ResolvedTheme = "light" | "dark";
export type Theme = ResolvedTheme | "system";

interface ThemeContextTypes {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextTypes | null>(null);

const STORAGE_KEY = "theme";
export const THEMES = ["light", "dark", "system"] as const;
const isBrowser = typeof window !== "undefined";

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

export function ThemeProvider({ children, defaultTheme = "system", storageKey = STORAGE_KEY }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (!isBrowser) return defaultTheme;
    try {
      const stored = localStorage.getItem(storageKey);
      return stored && isValidTheme(stored) ? stored : defaultTheme;
    } catch {
      return defaultTheme;
    }
  });

  const fallbackResolvedTheme: ResolvedTheme = defaultTheme === "dark" ? "dark" : "light";

  const getSystemResolvedTheme = (): ResolvedTheme => {
    try {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    } catch {
      return fallbackResolvedTheme;
    }
  };

  const systemTheme = useSyncExternalStore(subscribeToSystemTheme, getSystemResolvedTheme, () => fallbackResolvedTheme);
  const resolvedTheme: ResolvedTheme = theme === "system" ? systemTheme : theme;

  const updateTheme = (newTheme: Theme) => {
    const enableTransitions = disableTransitions();
    setTheme(newTheme);
    try {
      localStorage.setItem(storageKey, newTheme);
    } catch (error) {
      console.error("ERROR: Failed to save theme preference:", error);
    }
    requestAnimationFrame(() => {
      requestAnimationFrame(enableTransitions);
    });
  };

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", resolvedTheme === "dark");
    root.style.colorScheme = resolvedTheme;
  }, [resolvedTheme]);

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === storageKey && e.newValue && isValidTheme(e.newValue)) {
        const enableTransitions = disableTransitions();
        setTheme(e.newValue);
        requestAnimationFrame(() => {
          requestAnimationFrame(enableTransitions);
        });
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [storageKey]);

  const contextValue = { theme, resolvedTheme, setTheme: updateTheme };

  return <ThemeContext value={contextValue}>{children}</ThemeContext>;
}

export function useTheme() {
  const context = use(ThemeContext);
  if (!context) {
    throw new Error("ERROR: useTheme must be used within ThemeProvider.");
  }
  return context;
}

function isValidTheme(value: string): value is Theme {
  return THEMES.includes(value as Theme);
}

function subscribeToSystemTheme(onChange: () => void) {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const handler = () => onChange();
  mediaQuery.addEventListener("change", handler);
  return () => mediaQuery.removeEventListener("change", handler);
}

function disableTransitions() {
  const root = document.documentElement;
  root.dataset.disableTransitions = "";
  void window.getComputedStyle(root).opacity;
  return () => {
    delete root.dataset.disableTransitions;
  };
}
