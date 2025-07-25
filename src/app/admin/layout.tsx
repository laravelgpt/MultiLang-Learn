import { SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarFooter, SidebarInset, SidebarToggle } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LogOut, Bot, Menu } from 'lucide-react';
import { SidebarNav } from '@/components/admin/sidebar-nav';
import { useSidebar } from '@/components/ui/sidebar';

const MobileHeader = () => {
    const { toggle } = useSidebar();
    return (
         <header className="fixed top-0 left-0 right-0 z-40 flex h-16 items-center justify-between border-b bg-background px-4 md:hidden">
            <div className="flex items-center gap-2">
                <Bot className="w-8 h-8 text-primary" />
                <h1 className="font-headline text-xl font-semibold">MultiLang Learn</h1>
            </div>
            <Button variant="ghost" size="icon" onClick={toggle}>
                <Menu />
                <span className="sr-only">Toggle Sidebar</span>
            </Button>
        </header>
    )
}

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <MobileHeader/>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2 flex-1">
            <Bot className="w-8 h-8 text-primary" />
            <h1 className="font-headline text-xl font-semibold group-data-[collapsed=true]/sidebar:hidden">MultiLang Learn</h1>
          </div>
          <SidebarToggle />
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
        <main className="p-4 sm:p-6 lg:p-8 mt-16 md:mt-0">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
