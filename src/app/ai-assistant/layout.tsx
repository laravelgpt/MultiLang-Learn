
import { SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarFooter, SidebarInset, SidebarToggle } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LogOut, BookOpenCheck } from 'lucide-react';
import { UserSidebarNav } from '@/components/user/sidebar-nav';
import Link from 'next/link';
import { UserHeader } from '@/components/user/header';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2 flex-1">
            <BookOpenCheck className="w-8 h-8 text-primary" />
            <h1 className="font-headline text-xl font-semibold group-data-[collapsed=true]/sidebar:hidden">LearnCode</h1>
          </div>
          <SidebarToggle />
        </SidebarHeader>
        <SidebarContent className="p-0">
          <UserSidebarNav />
        </SidebarContent>
        <SidebarFooter>
          <div className="flex items-center gap-3 p-2 rounded-lg bg-muted group-data-[collapsed=true]/sidebar:justify-center">
            <Avatar>
              <AvatarImage src="https://placehold.co/40x40.png" alt="Git Frp" data-ai-hint="profile avatar" />
              <AvatarFallback>GF</AvatarFallback>
            </Avatar>
            <div className="flex-1 group-data-[collapsed=true]/sidebar:hidden">
              <p className="text-sm font-semibold">Git Frp</p>
              <p className="text-xs text-muted-foreground">git.frp@example.com</p>
            </div>
            <Button variant="ghost" size="icon" className="group-data-[collapsed=true]/sidebar:hidden" asChild>
              <Link href="/login">
                <LogOut className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <div className="flex flex-col h-screen overflow-hidden">
          <UserHeader />
          <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">{children}</main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

    