import { useTheme } from "@/components/ThemeProvider";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/shadcnui/tooltip";
import { Button } from "@/components/shadcnui/button";
import { IconBrightnessDown, IconDeviceDesktop, IconMoonFilled } from "@tabler/icons-react";

const NEXT_THEME = {
  light: "dark",
  dark: "system",
  system: "light",
} as const;

export function ThemeSelect() {
  const { theme, setTheme } = useTheme();

  return (
    <Tooltip
      disableHoverablePopup
      onOpenChange={(_open, eventDetails) => {
        if (eventDetails.reason === "trigger-press") {
          eventDetails.cancel();
        }
      }}>
      <TooltipTrigger
        render={
          <Button type="button" size="icon" variant="ghost" onClick={() => setTheme(NEXT_THEME[theme])}>
            <span className="grid [grid-template-areas:'stack']">
              <IconBrightnessDown data-theme-icon="light" className="[grid-area:stack]" />
              <IconMoonFilled data-theme-icon="dark" className="[grid-area:stack]" />
              <IconDeviceDesktop data-theme-icon="system" className="[grid-area:stack]" />
            </span>
          </Button>
        }
      />
      <TooltipContent>
        <p className="font-mono">
          SWITCH THEME (<span className="capitalize">{theme}</span>)
        </p>
      </TooltipContent>
    </Tooltip>
  );
}
