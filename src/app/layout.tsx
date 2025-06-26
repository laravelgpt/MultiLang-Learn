import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarFooter, SidebarInset, SidebarToggle } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LogOut, Bot } from 'lucide-react';
import { SidebarNav } from '@/components/admin/sidebar-nav';

export const metadata: Metadata = {
  title: 'MultiLang Learn Admin Center',
  description: 'Full-featured control panel for MultiLang Learn',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <SidebarProvider>
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
            <SidebarToggle className="md:hidden" />
            <main className="p-4 sm:p-6 lg:p-8">{children}</main>
          </SidebarInset>
        </SidebarProvider>
        <Toaster />
      </body>
    </html>
  );
}
