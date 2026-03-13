import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/shadcnui/dropdown-menu";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/shadcnui/sidebar";
import { IconSelector, IconPlus, IconCommand, IconWaveSine, IconLayoutRows } from "@tabler/icons-react";

const orgs = [
  {
    name: "Acme Inc",
    logo: <IconLayoutRows />,
    plan: "Enterprise",
  },
  {
    name: "Acme Corp.",
    logo: <IconWaveSine />,
    plan: "Startup",
  },
  {
    name: "Evil Corp.",
    logo: <IconCommand />,
    plan: "Free",
  },
];

export function SidebarSwitcher() {
  const { isMobile } = useSidebar();
  const [activeOrg, setActiveOrg] = useState(orgs[0]);
  if (!activeOrg) {
    return null;
  }
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <SidebarMenuButton
                size="lg"
                className="data-open:bg-sidebar-accent data-open:text-sidebar-accent-foreground"
              />
            }>
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
              {activeOrg.logo}
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{activeOrg.name}</span>
              <span className="truncate text-xs">{activeOrg.plan}</span>
            </div>
            <IconSelector className="ml-auto" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}>
            <DropdownMenuGroup>
              <DropdownMenuLabel className="text-xs text-muted-foreground">Teams</DropdownMenuLabel>
              {orgs.map((org, index) => (
                <DropdownMenuItem key={org.name} onClick={() => setActiveOrg(org)} className="gap-2 p-2">
                  <div className="flex size-6 items-center justify-center rounded-md border">{org.logo}</div>
                  {org.name}
                  <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className="gap-2 p-2">
                <div className="flex size-6 items-center justify-center rounded-md border bg-transparent">
                  <IconPlus className="size-4" />
                </div>
                <div className="font-medium text-muted-foreground">Add team</div>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
