import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/shadcnui/button";

export function ThemeSelect() {
  const { theme, cycleTheme } = useTheme();

  return (
    <Button
      type="button"
      variant="outline"
      className="rounded-none font-mono tracking-widest uppercase"
      onClick={cycleTheme}>
      Theme: <span className="capitalize">{theme}</span>
    </Button>
  );
}
