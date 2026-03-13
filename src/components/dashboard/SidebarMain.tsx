import * as React from "react";
import { Link } from "@tanstack/react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroupContent,
} from "@/components/shadcnui/sidebar";
import { SidebarSwitcher } from "@/components/dashboard/SidebarSwitcher";
import { SidebarUser } from "@/components/dashboard/SidebarUser";
import { IconUsers, IconLogs, IconDashboard, IconSettings, IconLifebuoy } from "@tabler/icons-react";

const LINKS = {
  platform: {
    label: "Platform",
    items: [
      {
        title: "Overview",
        url: "/dashboard",
        icon: <IconDashboard />,
        activeExact: true,
      },
    ],
  },
  management: {
    label: "Management",
    items: [
      {
        name: "Team",
        url: "/dashboard/team",
        icon: <IconUsers />,
      },
      {
        name: "Settings",
        url: "/dashboard/settings",
        icon: <IconSettings />,
      },
      {
        name: "Audit Logs",
        url: "/dashboard/audit-logs",
        icon: <IconLogs />,
      },
    ],
  },
  utility: [
    {
      name: "Support",
      url: "#",
      icon: <IconLifebuoy />,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{LINKS.platform.label}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {LINKS.platform.items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    render={
                      <Link
                        to={item.url}
                        activeProps={{ "data-active": true }}
                        activeOptions={{ exact: item.activeExact, includeSearch: false }}
                      />
                    }>
                    {item.icon}
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>{LINKS.management.label}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {LINKS.management.items.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton render={<Link to={item.url} activeProps={{ "data-active": true }} />}>
                    {item.icon}
                    <span>{item.name}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              {LINKS.utility.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton render={<Link to={item.url} activeProps={{ "data-active": true }} />}>
                    {item.icon}
                    <span>{item.name}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarUser />
      </SidebarFooter>
    </Sidebar>
  );
}
