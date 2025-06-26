
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Bell, Moon, Flame } from "lucide-react";
import Link from "next/link";

export function UserHeader() {
  // This is a mock implementation. Theme and notification logic would be needed.
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b bg-background px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-2">
         <Button variant="outline" size="sm">English</Button>
         <Button variant="ghost" size="sm">বাংলা</Button>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="outline" className="flex items-center gap-2">
          <Flame className="h-4 w-4 text-orange-500" />
          <span>0 Day Streak</span>
        </Button>
        <Button variant="ghost" size="icon">
          <Moon className="h-5 w-5" />
          <span className="sr-only">Toggle Theme</span>
        </Button>
        <div className="relative">
            <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
            </Button>
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
        </div>
        <Avatar>
          <AvatarImage src="https://placehold.co/40x40.png" alt="Git" data-ai-hint="profile avatar" />
          <AvatarFallback>G</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
