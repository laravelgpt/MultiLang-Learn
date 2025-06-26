"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { LayoutDashboard, Users, Code, CreditCard, BarChart3, Settings, Bell } from "lucide-react";

const navItems = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/users", label: "User Management", icon: Users },
  { href: "/languages", label: "Languages & Topics", icon: Code },
  { href: "/subscriptions", label: "Subscription Control", icon: CreditCard },
  { href: "/analytics", label: "Analytics & Reports", icon: BarChart3 },
  { href: "/notifications", label: "Notification Center", icon: Bell },
  { href: "/settings", label: "System Settings", icon: Settings },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <SidebarMenu className="p-2">
      {navItems.map((item) => (
        <SidebarMenuItem key={item.href}>
          <SidebarMenuButton
            asChild
            isActive={pathname === item.href}
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
