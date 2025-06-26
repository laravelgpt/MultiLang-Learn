import { SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarFooter, SidebarInset, SidebarToggle } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LogOut, Bot } from 'lucide-react';
import { SidebarNav } from '@/components/admin/sidebar-nav';

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2 flex-1">
            <Bot className="w-8 h-8 text-primary" />
            <h1 className="font-headline text-xl font-semibold group-data-[collapsed=true]/sidebar:hidden">MultiLang Learn</h1>
          </div>
          <SidebarToggle className="ml-auto" />
        </SidebarHeader>
        <SidebarContent className="p-0">
          <SidebarNav />
        </SidebarContent>
        <SidebarFooter>
          <div className="flex items-center gap-3 p-2 rounded-lg bg-muted group-data-[collapsed=true]/sidebar:justify-center">
            <Avatar>
              <AvatarImage src="https://placehold.co/40x40.png" alt="Admin" data-ai-hint="profile avatar" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
            <div className="flex-1 group-data-[collapsed=true]/sidebar:hidden">
              <p className="text-sm font-semibold">Admin User</p>
              <p className="text-xs text-muted-foreground">admin@multilang.com</p>
            </div>
            <Button variant="ghost" size="icon" className="group-data-[collapsed=true]/sidebar:hidden">
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <SidebarToggle className="fixed left-4 top-4 z-50 md:hidden" />
        <main className="p-4 sm:p-6 lg:p-8">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
