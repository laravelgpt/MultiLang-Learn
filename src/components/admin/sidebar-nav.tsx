
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { LayoutDashboard, Users, Code, CreditCard, BarChart3, Settings, Bell, LayoutTemplate } from "lucide-react";

const navItems = [
  { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/users", label: "User Management", icon: Users },
  { href: "/admin/languages", label: "Languages & Topics", icon: Code },
  { href: "/admin/landing-page", label: "Landing Page", icon: LayoutTemplate },
  { href: "/admin/subscriptions", label: "Subscription Control", icon: CreditCard },
  { href: "/admin/analytics", label: "Analytics & Reports", icon: BarChart3 },
  { href: "/admin/notifications", label: "Notification Center", icon: Bell },
  { href: "/admin/settings", label: "System Settings", icon: Settings },
];

export function SidebarNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/admin/dashboard") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  }

  return (
    <SidebarMenu className="p-2">
      {navItems.map((item) => (
        <SidebarMenuItem key={item.href}>
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
