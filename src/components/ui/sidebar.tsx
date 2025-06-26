
"use client"

import * as React from "react"
import { ChevronsLeft, ChevronsRight, MoreVertical } from "lucide-react"
import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"
import { Button, type ButtonProps } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface SidebarContextProps {
  isCollapsed: boolean
  isMobile: boolean
  toggle: () => void
}

const SidebarContext = React.createContext<SidebarContextProps | undefined>(undefined)

export function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  return context
}

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile()
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  React.useEffect(() => {
    if (isMobile) {
      setIsCollapsed(true)
    }
  }, [isMobile])

  const toggle = React.useCallback(() => {
    setIsCollapsed(prev => !prev)
  }, [])

  return (
    <TooltipProvider delayDuration={0}>
      <SidebarContext.Provider value={{ isCollapsed, isMobile, toggle }}>
        <div data-collapsed={isCollapsed} className="group/sidebar">
          {children}
        </div>
      </SidebarContext.Provider>
    </TooltipProvider>
  )
}

export const Sidebar = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const { isCollapsed, isMobile, toggle } = useSidebar()
    const [isClient, setIsClient] = React.useState(false)

    React.useEffect(() => {
      setIsClient(true)
    }, [])
    
    return (
      <>
        <div
          ref={ref}
          data-collapsed={isCollapsed}
          className={cn(
            "fixed inset-y-0 left-0 z-50 flex h-full flex-col border-r bg-background transition-all duration-300 ease-in-out",
            "group-data-[collapsed=false]/sidebar:w-[280px] group-data-[collapsed=true]/sidebar:w-[64px]",
            isClient && isMobile && "group-data-[collapsed=true]/sidebar:-translate-x-full",
            className
          )}
          {...props}
        >
          {children}
        </div>
        {isClient && isMobile && !isCollapsed && <div onClick={toggle} className="fixed inset-0 z-40 bg-black/50" />}
      </>
    )
  }
)
Sidebar.displayName = "Sidebar"

export const SidebarInset = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const { isCollapsed, isMobile } = useSidebar()
    const [isClient, setIsClient] = React.useState(false)

    React.useEffect(() => {
      setIsClient(true)
    }, [])

    return (
      <div
        ref={ref}
        data-collapsed={isCollapsed}
        className={cn("transition-all duration-300 ease-in-out", 
          isClient && !isMobile && "group-data-[collapsed=false]/sidebar:pl-[280px] group-data-[collapsed=true]/sidebar:pl-[64px]",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
SidebarInset.displayName = "SidebarInset"

export const SidebarHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex h-16 shrink-0 items-center gap-2 border-b px-4",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
SidebarHeader.displayName = "SidebarHeader"

export const SidebarContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex-1 overflow-y-auto overflow-x-hidden", className)}
      {...props}
    />
  )
)
SidebarContent.displayName = "SidebarContent"

export const SidebarFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mt-auto border-t p-2",
          className
        )}
        {...props}
      />
    )
  }
)
SidebarFooter.displayName = "SidebarFooter"

export function SidebarToggle({ className, ...props }: React.ComponentProps<typeof Button>) {
  const { isCollapsed, toggle } = useSidebar()
  
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      className={cn("shrink-0", className)}
      {...props}
    >
      {isCollapsed ? <ChevronsRight /> : <ChevronsLeft />}
      <span className="sr-only">Toggle sidebar</span>
    </Button>
  )
}

export const SidebarMenu = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        className={cn("flex flex-col", className)}
        {...props}
      />
    );
  }
);
SidebarMenu.displayName = "SidebarMenu";

export const SidebarMenuItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("", className)}
        {...props}
      />
    );
  }
);
SidebarMenuItem.displayName = "SidebarMenuItem";

interface SidebarMenuButtonProps extends ButtonProps {
  isActive?: boolean;
  tooltip?: {
    children: React.ReactNode;
    content?: React.ReactNode;
  };
}

export const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  SidebarMenuButtonProps
>(({ className, isActive, tooltip, children, ...props }, ref) => {
  const { isCollapsed } = useSidebar();

  const content = (
    <Button
      ref={ref}
      variant={isActive ? "secondary" : "ghost"}
      className={cn(
        "h-10 w-full justify-start",
        "group-data-[collapsed=true]/sidebar:w-10 group-data-[collapsed=true]/sidebar:justify-center",
        className
      )}
      {...props}
    >
        {children}
    </Button>
  );

  if (isCollapsed && tooltip) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>{content}</TooltipTrigger>
        <TooltipContent side="right">
          {tooltip.content || tooltip.children}
        </TooltipContent>
      </Tooltip>
    );
  }

  return content;
});
SidebarMenuButton.displayName = "SidebarMenuButton";
