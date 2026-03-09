import { useTheme } from "@/components/ThemeProvider";
import { IconBrightnessDown, IconDeviceDesktop, IconMoonFilled } from "@tabler/icons-react";
import { Button } from "@/components/shadcnui/button";
import { cn } from "#/lib/utils";

export function ThemeSelect() {
  const { theme, resolvedTheme, setTheme } = useTheme();

  const handleToggle = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  // TOD: Style

  return (
    <div className="flex gap-2" role="group" aria-label={`Current theme:  ${resolvedTheme}`}>
      <Button
        type="button"
        size="icon"
        variant="ghost"
        className="[grid-template-areas:'stack' grid place-items-center"
        onClick={handleToggle}>
        <IconMoonFilled
          className={cn(
            `[clip-path:polygon(0_0,100%_0,0_100%)] [grid-area:stack]`,
            resolvedTheme === "light" && "text-muted"
          )}
        />
        <IconBrightnessDown
          className={cn(
            `[clip-path:polygon(0_100%,100%_0,100%_100%)] [grid-area:stack]`,
            resolvedTheme === "dark" && "text-muted"
          )}
        />
      </Button>

      <Button
        type="button"
        size="icon"
        variant="ghost"
        aria-pressed={theme === "system"}
        aria-label="System"
        onClick={() => setTheme("system")}>
        <IconDeviceDesktop />
      </Button>
    </div>
  );
}
