
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton, useSidebar } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  LayoutDashboard, 
  BookOpen, 
  FileCode, 
  Trophy,
  Zap, 
  FolderKanban, 
  Bot, 
  TrendingUp,
  Award,
  Check,
  Code,
  Globe
} from "lucide-react";
import { useLanguage } from "@/context/language-provider";
import { useProgrammingLanguage, type LanguageId } from "@/context/programming-language-provider";

const programmingLanguages = [
    {
        id: "js",
        name: "JavaScript",
        progress: 65,
        icon: "https://placehold.co/24x24.png",
        hint: "javascript logo"
    },
    {
        id: "go",
        name: "Go",
        progress: 25,
        icon: "https://placehold.co/24x24.png",
        hint: "go logo"
    },
    {
        id: "py",
        name: "Python",
        progress: 80,
        icon: "https://placehold.co/24x24.png",
        hint: "python logo"
    },
    {
        id: "rust",
        name: "Rust",
        progress: 10,
        icon: "https://placehold.co/24x24.png",
        hint: "rust logo"
    },
];

const recentBadges = [
    { name: "First Steps", icon: Award, color: "bg-yellow-400" },
    { name: "JS Basics", icon: Check, color: "bg-green-500" },
    { name: "Code Ninja", icon: Code, color: "bg-blue-500" },
];

export function UserSidebarNav() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const { isCollapsed } = useSidebar();
  const { selectedLanguage, setSelectedLanguage } = useProgrammingLanguage();

  const navItems = [
    { href: "/dashboard", label: t('dashboard'), icon: LayoutDashboard },
    { href: "/languages", label: t('learn_guide'), icon: BookOpen },
    { href: "/practice", label: t('practice_examples'), icon: FileCode },
    { href: "/challenges", label: t('challenges'), icon: Trophy },
    { href: "#", label: t('problem_solving'), icon: Zap },
    { href: "#", label: t('mini_projects'), icon: FolderKanban },
    { href: "/ai-assistant", label: t('ai_assistant'), icon: Bot },
    { href: "#", label: t('progress_tracker'), icon: TrendingUp },
  ];
  
  const languagesForSelect = [
    { id: 'all', name: t('overall_dashboard') },
    ...programmingLanguages
  ];


  const isActive = (href: string) => {
    if (href === "/dashboard" || href === "/practice" || href === "/ai-assistant") return pathname === href;
    if (href === "#") return false;
    return pathname.startsWith(href);
  }

  return (
    <div className="flex flex-col h-full">
      {!isCollapsed && (
        <div className="p-4 space-y-2">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t('learning_context')}</p>
            <Select value={selectedLanguage} onValueChange={(value) => setSelectedLanguage(value as LanguageId)}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select context..." />
                </SelectTrigger>
                <SelectContent>
                    {languagesForSelect.map(lang => (
                        <SelectItem key={lang.id} value={lang.id}>
                            <div className="flex items-center gap-3">
                                {lang.id === 'all' 
                                ? <Globe className="h-5 w-5 text-muted-foreground"/> 
                                : <Image src={lang.icon!} alt={lang.name} width={20} height={20} data-ai-hint={lang.hint} className="rounded-sm"/>
                                }
                                <span>{lang.name}</span>
                            </div>
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
      )}
      
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
         <p className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase group-data-[collapsed=true]/sidebar:hidden">
           {t('recent_badges')} <Award className="h-4 w-4" />
         </p>
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
