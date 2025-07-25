
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Bell, Flame } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { useLanguage } from "@/context/language-provider";
import type { Language } from "@/lib/translations";

export function UserHeader() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="flex items-center gap-4 h-16 shrink-0 border-b bg-background px-4 sm:px-6 lg:px-8 md:border-0 md:px-0">
      <div className="hidden md:flex items-center gap-2 flex-1">
        <Select value={language} onValueChange={(value: Language) => setLanguage(value)}>
          <SelectTrigger className="w-auto sm:w-[180px]">
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="bn">বাংলা (Bengali)</SelectItem>
            <SelectItem value="hi">हिन्दी (Hindi)</SelectItem>
            <SelectItem value="ur">اردو (Urdu)</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="outline" className="flex items-center gap-2">
          <Flame className="h-4 w-4 text-orange-500" />
          <span className="hidden sm:inline">14 {t('day_streak_header')}</span>
        </Button>
        <ThemeToggle />
        <div className="relative">
            <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
            </Button>
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
        </div>
        <Avatar>
          <AvatarImage src="https://placehold.co/40x40.png" alt="Git Frp" data-ai-hint="profile avatar" />
          <AvatarFallback>GF</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
