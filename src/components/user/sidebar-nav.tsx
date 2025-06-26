
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { LayoutDashboard, Code, TrendingUp, Users, Bot, Settings } from "lucide-react";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/languages", label: "Languages", icon: Code },
  { href: "#", label: "My Progress", icon: TrendingUp },
  { href: "#", label: "Community", icon: Users },
  { href: "#", label: "AI Assistant", icon: Bot },
  { href: "#", label: "Settings", icon: Settings },
];

export function UserSidebarNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/dashboard") {
      return pathname === href;
    }
    if (href === "#") return false;
    return pathname.startsWith(href);
  }

  return (
    <SidebarMenu className="p-2">
      {navItems.map((item) => (
        <SidebarMenuItem key={item.label}>
          <SidebarMenuButton
            asChild
            isActive={isActive(item.href)}
            tooltip={{children: item.label}}
          >
            <Link href={item.href}>
              <item.icon />
              <span className="group-data-[collapsed=true]/sidebar:hidden">{item.label}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
