
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  LayoutDashboard, 
  BookOpen, 
  FileCode, 
  BrainCircuit, 
  Zap, 
  FolderKanban, 
  Bot, 
  TrendingUp,
  Award,
  Check,
  Code
} from "lucide-react";

const programmingLanguages = [
    {
        id: "js",
        name: "JavaScript",
        progress: 65,
        icon: "https://placehold.co/24x24.png",
    },
    {
        id: "pascal",
        name: "Pascal",
        progress: 0,
        icon: "https://placehold.co/24x24.png",
    },
    {
        id: "py",
        name: "Python",
        progress: 0,
        icon: "https://placehold.co/24x24.png",
    },
];

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/languages", label: "Learn Guide", icon: BookOpen },
  { href: "/practice", label: "Practice & Examples", icon: FileCode },
  { href: "#", label: "Challenges", icon: BrainCircuit },
  { href: "#", label: "Problem Solving", icon: Zap },
  { href: "#", label: "Mini Projects", icon: FolderKanban },
  { href: "#", label: "AI Assistant", icon: Bot },
  { href: "#", label: "Progress Tracker", icon: TrendingUp },
];

const recentBadges = [
    { name: "First Steps", icon: Award, color: "bg-yellow-400" },
    { name: "JS Basics", icon: Check, color: "bg-green-500" },
    { name: "Code Ninja", icon: Code, color: "bg-blue-500" },
];

export function UserSidebarNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/dashboard" || href === "/practice") return pathname === href;
    if (href === "#") return false;
    return pathname.startsWith(href);
  }

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 space-y-4 group-data-[collapsed=true]/sidebar:p-2 group-data-[collapsed=true]/sidebar:space-y-2">
        <p className="text-xs font-semibold text-muted-foreground uppercase group-data-[collapsed=true]/sidebar:hidden">Programming Languages</p>
        <div className="space-y-3">
          {programmingLanguages.map(lang => (
            <Link href={`/languages/${lang.id}`} key={lang.id} className="flex items-center gap-3 group-data-[collapsed=true]/sidebar:justify-center">
              <Image src={lang.icon} alt={lang.name} width={24} height={24} data-ai-hint="language logo"/>
              <div className="flex-1 group-data-[collapsed=true]/sidebar:hidden">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{lang.name}</span>
                  <span className="text-muted-foreground text-xs">{lang.progress > 0 ? `${lang.progress}% Complete` : 'Not Started'}</span>
                </div>
                <Progress value={lang.progress} className="h-1 mt-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <Separator className="my-0" />

      <SidebarMenu className="p-2 flex-1">
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
      
      <Separator className="my-0" />

      <div className="p-4 space-y-2 group-data-[collapsed=true]/sidebar:p-2 group-data-[collapsed=true]/sidebar:space-y-2">
         <p className="text-xs font-semibold text-muted-foreground uppercase group-data-[collapsed=true]/sidebar:hidden">Recent Badges</p>
         <div className="flex gap-2 group-data-[collapsed=false]/sidebar:justify-start group-data-[collapsed=true]/sidebar:justify-center">
            {recentBadges.map(badge => (
                <div key={badge.name} title={badge.name} className={`h-8 w-8 rounded-full flex items-center justify-center text-white ${badge.color}`}>
                   <badge.icon className="h-4 w-4" />
                </div>
            ))}
         </div>
      </div>
    </div>
  );
}
