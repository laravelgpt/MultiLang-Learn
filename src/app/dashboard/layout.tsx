
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, BookOpenCheck } from "lucide-react";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex items-center">
            <Link href="/dashboard" className="mr-6 flex items-center space-x-2">
              <BookOpenCheck className="h-6 w-6 text-primary" />
              <span className="font-bold sm:inline-block">MultiLang Learn</span>
            </Link>
             <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                <Link href="/dashboard" className="transition-colors hover:text-primary">Dashboard</Link>
                <Link href="/languages" className="transition-colors hover:text-primary text-muted-foreground">Languages</Link>
                <Link href="#" className="transition-colors hover:text-primary text-muted-foreground">My Progress</Link>
                <Link href="#" className="transition-colors hover:text-primary text-muted-foreground">Community</Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
             <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="https://placehold.co/40x40.png" alt="User" data-ai-hint="profile avatar" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold">User</p>
                  <p className="text-xs text-muted-foreground">user@multilang.com</p>
                </div>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="/login">
                    <LogOut className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-8">{children}</main>
       <footer className="py-6 md:px-8 md:py-0 bg-muted">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by AI. The source code is available on GitHub.
          </p>
        </div>
      </footer>
    </div>
  );
}
