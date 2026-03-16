import { Link } from "@tanstack/react-router";
import { Button } from "@/components/shadcnui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/shadcnui/dropdown-menu";
import { IconMenu2 } from "@tabler/icons-react";

export function MobileNavDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="outline" size="icon" className="rounded-none md:hidden" aria-label="Navigation Menu">
            <IconMenu2 />
          </Button>
        }
      />
      <DropdownMenuContent className="rounded-none **:rounded-none">
        <DropdownMenuGroup className="space-y-2">
          <DropdownMenuLabel>NAVIGATION</DropdownMenuLabel>
          <DropdownMenuItem>FEATURES</DropdownMenuItem>
          <DropdownMenuItem>PRICING</DropdownMenuItem>
          <DropdownMenuItem>CONTACT</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
