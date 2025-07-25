(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/hooks/use-mobile.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useIsMobile": (()=>useIsMobile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const MOBILE_BREAKPOINT = 768;
function useIsMobile() {
    _s();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useIsMobile.useEffect": ()=>{
            const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
            const onChange = {
                "useIsMobile.useEffect.onChange": ()=>{
                    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
                }
            }["useIsMobile.useEffect.onChange"];
            mql.addEventListener("change", onChange);
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
            return ({
                "useIsMobile.useEffect": ()=>mql.removeEventListener("change", onChange)
            })["useIsMobile.useEffect"];
        }
    }["useIsMobile.useEffect"], []);
    return isMobile;
}
_s(useIsMobile, "0VTTNJATKABQPGLm9RVT0tKGUgU=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 46,
        columnNumber: 7
    }, this);
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/tooltip.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Tooltip": (()=>Tooltip),
    "TooltipContent": (()=>TooltipContent),
    "TooltipProvider": (()=>TooltipProvider),
    "TooltipTrigger": (()=>TooltipTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-tooltip/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const TooltipProvider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"];
const Tooltip = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const TooltipTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const TooltipContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        ref: ref,
        sideOffset: sideOffset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tooltip.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, this));
_c1 = TooltipContent;
TooltipContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "TooltipContent$React.forwardRef");
__turbopack_context__.k.register(_c1, "TooltipContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/sidebar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Sidebar": (()=>Sidebar),
    "SidebarContent": (()=>SidebarContent),
    "SidebarFooter": (()=>SidebarFooter),
    "SidebarHeader": (()=>SidebarHeader),
    "SidebarInset": (()=>SidebarInset),
    "SidebarMenu": (()=>SidebarMenu),
    "SidebarMenuButton": (()=>SidebarMenuButton),
    "SidebarMenuItem": (()=>SidebarMenuItem),
    "SidebarProvider": (()=>SidebarProvider),
    "SidebarToggle": (()=>SidebarToggle),
    "useSidebar": (()=>useSidebar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevrons-left.js [app-client] (ecmascript) <export default as ChevronsLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevrons-right.js [app-client] (ecmascript) <export default as ChevronsRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-mobile.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/tooltip.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const SidebarContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function useSidebar() {
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(SidebarContext);
    if (!context) {
        throw new Error("useSidebar must be used within a SidebarProvider");
    }
    return context;
}
_s(useSidebar, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
function SidebarProvider({ children }) {
    _s1();
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"])();
    const [isCollapsed, setIsCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(isMobile);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SidebarProvider.useEffect": ()=>{
            if (isMobile) {
                setIsCollapsed(true);
            } else {
                setIsCollapsed(false);
            }
        }
    }["SidebarProvider.useEffect"], [
        isMobile
    ]);
    const toggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SidebarProvider.useCallback[toggle]": ()=>{
            setIsCollapsed({
                "SidebarProvider.useCallback[toggle]": (prev)=>!prev
            }["SidebarProvider.useCallback[toggle]"]);
        }
    }["SidebarProvider.useCallback[toggle]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipProvider"], {
        delayDuration: 0,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarContext.Provider, {
            value: {
                isCollapsed,
                isMobile,
                toggle
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-collapsed": isCollapsed,
                className: "group/sidebar",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/sidebar.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s1(SidebarProvider, "bNgzrgFuJR4ttO179du4WHrOthw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"]
    ];
});
_c = SidebarProvider;
const Sidebar = /*#__PURE__*/ _s2((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c1 = _s2(({ className, children, ...props }, ref)=>{
    _s2();
    const { isCollapsed, isMobile, toggle } = useSidebar();
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Sidebar.useEffect": ()=>{
            setIsClient(true);
        }
    }["Sidebar.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: ref,
                "data-collapsed": isCollapsed,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-y-0 left-0 z-50 flex h-full flex-col border-r bg-background transition-all duration-300 ease-in-out", "group-data-[collapsed=false]/sidebar:w-[280px] group-data-[collapsed=true]/sidebar:w-[64px]", isClient && isMobile && "group-data-[collapsed=true]/sidebar:-translate-x-full", className),
                ...props,
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 65,
                columnNumber: 9
            }, this),
            isClient && isMobile && !isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: toggle,
                className: "fixed inset-0 z-40 bg-black/50"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 78,
                columnNumber: 50
            }, this)
        ]
    }, void 0, true);
}, "m6n1djvbI+p7AuJpSIdnuBKBDOE=", false, function() {
    return [
        useSidebar
    ];
})), "m6n1djvbI+p7AuJpSIdnuBKBDOE=", false, function() {
    return [
        useSidebar
    ];
});
_c2 = Sidebar;
Sidebar.displayName = "Sidebar";
const SidebarInset = /*#__PURE__*/ _s3((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c3 = _s3(({ className, children, ...props }, ref)=>{
    _s3();
    const { isCollapsed, isMobile } = useSidebar();
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SidebarInset.useEffect": ()=>{
            setIsClient(true);
        }
    }["SidebarInset.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        "data-collapsed": isCollapsed,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("transition-all duration-300 ease-in-out", isClient && !isMobile && "group-data-[collapsed=false]/sidebar:pl-[280px] group-data-[collapsed=true]/sidebar:pl-[64px]", className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 95,
        columnNumber: 7
    }, this);
}, "p+qFyD9fXjhrf+bcH7zaZLUV4Mg=", false, function() {
    return [
        useSidebar
    ];
})), "p+qFyD9fXjhrf+bcH7zaZLUV4Mg=", false, function() {
    return [
        useSidebar
    ];
});
_c4 = SidebarInset;
SidebarInset.displayName = "SidebarInset";
const SidebarHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c5 = ({ className, children, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-16 shrink-0 items-center gap-2 border-b px-4", className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 114,
        columnNumber: 7
    }, this);
});
_c6 = SidebarHeader;
SidebarHeader.displayName = "SidebarHeader";
const SidebarContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c7 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 overflow-y-auto overflow-x-hidden", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 131,
        columnNumber: 5
    }, this));
_c8 = SidebarContent;
SidebarContent.displayName = "SidebarContent";
const SidebarFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c9 = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-auto border-t p-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 143,
        columnNumber: 7
    }, this);
});
_c10 = SidebarFooter;
SidebarFooter.displayName = "SidebarFooter";
function SidebarToggle({ className, ...props }) {
    _s4();
    const { isCollapsed, toggle, isMobile } = useSidebar();
    if (isMobile) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        variant: "ghost",
        size: "icon",
        onClick: toggle,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("shrink-0", className),
        ...props,
        children: [
            isCollapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsRight$3e$__["ChevronsRight"], {}, void 0, false, {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 169,
                columnNumber: 22
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsLeft$3e$__["ChevronsLeft"], {}, void 0, false, {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 169,
                columnNumber: 42
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: "Toggle sidebar"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 162,
        columnNumber: 5
    }, this);
}
_s4(SidebarToggle, "JWtvRDZmck8mFnMdxKcNdh06DVc=", false, function() {
    return [
        useSidebar
    ];
});
_c11 = SidebarToggle;
const SidebarMenu = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c12 = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 178,
        columnNumber: 7
    }, this);
});
_c13 = SidebarMenu;
SidebarMenu.displayName = "SidebarMenu";
const SidebarMenuItem = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c14 = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 191,
        columnNumber: 7
    }, this);
});
_c15 = SidebarMenuItem;
SidebarMenuItem.displayName = "SidebarMenuItem";
const SidebarMenuButton = /*#__PURE__*/ _s5((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c16 = _s5(({ className, isActive, tooltip, children, ...props }, ref)=>{
    _s5();
    const { isCollapsed } = useSidebar();
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        ref: ref,
        variant: isActive ? "secondary" : "ghost",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-10 w-full justify-start", "group-data-[collapsed=true]/sidebar:w-10 group-data-[collapsed=true]/sidebar:justify-center", className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 216,
        columnNumber: 5
    }, this);
    if (isCollapsed && tooltip) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                    asChild: true,
                    children: content
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/sidebar.tsx",
                    lineNumber: 233,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipContent"], {
                    side: "right",
                    children: tooltip.content || tooltip.children
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/sidebar.tsx",
                    lineNumber: 234,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/sidebar.tsx",
            lineNumber: 232,
            columnNumber: 7
        }, this);
    }
    return content;
}, "kpCbkCry4qXFIp34OhVPTLUoaro=", false, function() {
    return [
        useSidebar
    ];
})), "kpCbkCry4qXFIp34OhVPTLUoaro=", false, function() {
    return [
        useSidebar
    ];
});
_c17 = SidebarMenuButton;
SidebarMenuButton.displayName = "SidebarMenuButton";
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17;
__turbopack_context__.k.register(_c, "SidebarProvider");
__turbopack_context__.k.register(_c1, "Sidebar$React.forwardRef");
__turbopack_context__.k.register(_c2, "Sidebar");
__turbopack_context__.k.register(_c3, "SidebarInset$React.forwardRef");
__turbopack_context__.k.register(_c4, "SidebarInset");
__turbopack_context__.k.register(_c5, "SidebarHeader$React.forwardRef");
__turbopack_context__.k.register(_c6, "SidebarHeader");
__turbopack_context__.k.register(_c7, "SidebarContent$React.forwardRef");
__turbopack_context__.k.register(_c8, "SidebarContent");
__turbopack_context__.k.register(_c9, "SidebarFooter$React.forwardRef");
__turbopack_context__.k.register(_c10, "SidebarFooter");
__turbopack_context__.k.register(_c11, "SidebarToggle");
__turbopack_context__.k.register(_c12, "SidebarMenu$React.forwardRef");
__turbopack_context__.k.register(_c13, "SidebarMenu");
__turbopack_context__.k.register(_c14, "SidebarMenuItem$React.forwardRef");
__turbopack_context__.k.register(_c15, "SidebarMenuItem");
__turbopack_context__.k.register(_c16, "SidebarMenuButton$React.forwardRef");
__turbopack_context__.k.register(_c17, "SidebarMenuButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/avatar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Avatar": (()=>Avatar),
    "AvatarFallback": (()=>AvatarFallback),
    "AvatarImage": (()=>AvatarImage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-avatar/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const Avatar = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, this));
_c1 = Avatar;
Avatar.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
const AvatarImage = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("aspect-square h-full w-full", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 27,
        columnNumber: 3
    }, this));
_c3 = AvatarImage;
AvatarImage.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"].displayName;
const AvatarFallback = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fallback"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-full w-full items-center justify-center rounded-full bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 39,
        columnNumber: 3
    }, this));
_c5 = AvatarFallback;
AvatarFallback.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fallback"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "Avatar$React.forwardRef");
__turbopack_context__.k.register(_c1, "Avatar");
__turbopack_context__.k.register(_c2, "AvatarImage$React.forwardRef");
__turbopack_context__.k.register(_c3, "AvatarImage");
__turbopack_context__.k.register(_c4, "AvatarFallback$React.forwardRef");
__turbopack_context__.k.register(_c5, "AvatarFallback");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/separator.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Separator": (()=>Separator)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-separator/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const Separator = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, orientation = "horizontal", decorative = true, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        decorative: decorative,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/separator.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this));
_c1 = Separator;
Separator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Separator$React.forwardRef");
__turbopack_context__.k.register(_c1, "Separator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/select.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Select": (()=>Select),
    "SelectContent": (()=>SelectContent),
    "SelectGroup": (()=>SelectGroup),
    "SelectItem": (()=>SelectItem),
    "SelectLabel": (()=>SelectLabel),
    "SelectScrollDownButton": (()=>SelectScrollDownButton),
    "SelectScrollUpButton": (()=>SelectScrollUpButton),
    "SelectSeparator": (()=>SelectSeparator),
    "SelectTrigger": (()=>SelectTrigger),
    "SelectValue": (()=>SelectValue)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-select/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const Select = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const SelectGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"];
const SelectValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Value"];
const SelectTrigger = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                    className: "h-4 w-4 opacity-50"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 29,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 28,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 19,
        columnNumber: 3
    }, this));
_c1 = SelectTrigger;
SelectTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"].displayName;
const SelectScrollUpButton = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 47,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 39,
        columnNumber: 3
    }, this));
_c2 = SelectScrollUpButton;
SelectScrollUpButton.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollUpButton"].displayName;
const SelectScrollDownButton = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 64,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 56,
        columnNumber: 3
    }, this));
_c3 = SelectScrollDownButton;
SelectScrollDownButton.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDownButton"].displayName;
const SelectContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, children, position = "popper", ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 86,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 87,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 96,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 75,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 74,
        columnNumber: 3
    }, this));
_c5 = SelectContent;
SelectContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const SelectLabel = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 106,
        columnNumber: 3
    }, this));
_c7 = SelectLabel;
SelectLabel.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"].displayName;
const SelectItem = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c8 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/select.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 127,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 126,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemText"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 132,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 118,
        columnNumber: 3
    }, this));
_c9 = SelectItem;
SelectItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"].displayName;
const SelectSeparator = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 141,
        columnNumber: 3
    }, this));
_c11 = SelectSeparator;
SelectSeparator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "SelectTrigger$React.forwardRef");
__turbopack_context__.k.register(_c1, "SelectTrigger");
__turbopack_context__.k.register(_c2, "SelectScrollUpButton");
__turbopack_context__.k.register(_c3, "SelectScrollDownButton");
__turbopack_context__.k.register(_c4, "SelectContent$React.forwardRef");
__turbopack_context__.k.register(_c5, "SelectContent");
__turbopack_context__.k.register(_c6, "SelectLabel$React.forwardRef");
__turbopack_context__.k.register(_c7, "SelectLabel");
__turbopack_context__.k.register(_c8, "SelectItem$React.forwardRef");
__turbopack_context__.k.register(_c9, "SelectItem");
__turbopack_context__.k.register(_c10, "SelectSeparator$React.forwardRef");
__turbopack_context__.k.register(_c11, "SelectSeparator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/translations.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "translations": (()=>translations)
});
const translations = {
    en: {
        welcome_back: "Welcome back, Git Frp!",
        continue_journey: "Continue your programming journey.",
        beginner: "Beginner",
        member_since: "Member since 2025",
        day_streak_banner: "Day Streak",
        total_points: "Total Points",
        settings: "Settings",
        overview: "Overview",
        progress_tab: "Progress",
        awards: "Awards",
        topics_completed: "Topics Completed",
        challenges_solved: "Challenges Solved",
        projects_created: "Projects Created",
        current_streak: "Current Streak",
        from_last_week: "+{change} from last week",
        day_streak_card: "Day streak",
        quick_actions: "Quick Actions",
        jump_back: "Jump back into your learning journey.",
        continue_learning: "Continue Learning",
        daily_challenge: "Daily Challenge",
        ai_assistant: "AI Assistant",
        your_languages: "Your Programming Languages",
        master_languages: "Master multiple languages and expand your skills.",
        progress_bar: "Progress",
        start_learning: "Start Learning",
        your_progress: "Your Progress",
        track_progress: "Track your learning activity over time.",
        your_awards: "Your Awards",
        all_awards: "All the badges and awards you've earned.",
        profile_settings: "Profile Settings",
        manage_profile: "Manage your profile information and preferences.",
        full_name: "Full Name",
        email_address: "Email Address",
        new_password: "New Password",
        enter_new_password: "Enter new password",
        email_notifications: "Email Notifications",
        receive_emails: "Receive emails about course updates and announcements.",
        save_settings: "Save Settings",
        sidebar_languages: "Programming Languages",
        not_started: "Not Started",
        complete: "Complete",
        dashboard: "Dashboard",
        learn_guide: "Learn Guide",
        practice_examples: "Practice & Examples",
        challenges: "Challenges",
        problem_solving: "Problem Solving",
        mini_projects: "Mini Projects",
        progress_tracker: "Progress Tracker",
        recent_badges: "Recent Badges",
        day_streak_header: "Day Streak",
        // languages/page.tsx
        "choose_language": "Choose a Language",
        "select_language_journey": "Select a language to start your learning journey.",
        // languages/[langId]/page.tsx
        "back_to_languages": "Back to Languages",
        "topics_lessons": "Topics & Lessons",
        "master_language_path": "Follow the path to master {language}.",
        "lessons_coming_soon": "Lessons are coming soon for this topic!",
        "start_lesson": "Start Lesson",
        "curriculum_coming_soon": "Curriculum coming soon for {language}.",
        "language_curriculum": "{language} Curriculum",
        // practice/page.tsx
        "practice_and_examples": "Practice & Examples",
        "practice_skills_interactive": "Practice your coding skills with our interactive code editor and examples.",
        "code_examples": "Code Examples",
        "interactive_code_editor": "Interactive Code Editor",
        "reset": "Reset",
        "run": "Run",
        "running": "Running",
        "editor": "Editor",
        "output": "Output",
        "ai_explanation": "AI Explanation",
        "run_to_see_output": "Run code to see output...",
        "ai_is_thinking": "AI is thinking...",
        "click_ai_button_for_explanation": "Click the 'Explain Code' button to get an explanation of your code.",
        "copied_to_clipboard_title": "Copied!",
        "copied_to_clipboard_desc": "Code copied to clipboard.",
        "cannot_explain_empty_title": "Cannot explain empty code",
        "cannot_explain_empty_desc": "Please enter some code in the editor first.",
        "ai_explanation_failed_title": "AI Explanation Failed",
        "ai_explanation_failed_desc": "There was an error generating the explanation.",
        "save_feature_soon_title": "Feature Coming Soon!",
        "save_feature_soon_desc": "Saving your code snippets will be available in a future update.",
        "code_copied_title": "Copied to Clipboard",
        "code_copied_desc": "The code has been copied to your clipboard.",
        "save_snippet": "Save Snippet",
        "explain_code": "Explain Code",
        "copy_code": "Copy",
        "reset_code": "Reset",
        "ai_explaining": "Explaining...",
        "my_snippets": "My Snippets",
        "snippet_saved": "Snippet Saved",
        "snippet_saved_desc": "'{snippetTitle}' has been added to your snippets.",
        "load_snippet_desc": "The snippet is ready in the editor.",
        "snippet_deleted": "Snippet Deleted",
        "snippet_deleted_desc": "'{snippetTitle}' has been removed.",
        "review_saved_code": "Review, edit, or delete your saved code.",
        "no_saved_snippets": "You have no saved snippets. Use the 'Save Snippet' button in the editor to keep your work.",
        "are_you_sure_delete_snippet": "Are you absolutely sure?",
        "delete_snippet_confirm": "This action will permanently delete the snippet '{snippetTitle}'. This action cannot be undone.",
        "edit": "Edit",
        "delete": "Delete",
        "practice_topics_tab": "Practice Topics",
        "untitled_snippet": "Untitled Snippet",
        "saved_on_date": "Saved on {date}",
        "loaded": "Loaded",
        "snippet_updated": "Snippet Updated",
        "snippet_updated_desc": "'{snippetTitle}' has been updated.",
        "edit_snippet_details": "Edit Details",
        "update_snippet": "Update Snippet",
        "edit_snippet_title": "Edit Snippet Details",
        "edit_snippet_desc": "Update the title and description for your snippet.",
        "title": "Title",
        "description": "Description",
        "chat_renamed": "Chat Renamed",
        "chat_renamed_desc": "The conversation title has been updated.",
        "chat_deleted": "Chat Deleted",
        "chat_deleted_desc": "The conversation has been removed from your history.",
        // challenges/page.tsx
        "challenge_yourself": "Challenge yourself with coding problems and improve your programming skills.",
        "all_challenges": "All Challenges",
        "daily_challenge_tab": "Daily Challenge",
        "my_submissions": "My Submissions",
        "language": "Language",
        "no_challenges_for_language": "No challenges available for the selected language. Try selecting \"Overall Dashboard\" to see all challenges.",
        "daily_challenge_title": "Today's Daily Challenge",
        "daily_challenge_desc": "A new challenge is featured each day. Give it a try!",
        "weekly_challenge_title": "This Week's Challenge",
        "weekly_challenge_desc": "A harder challenge for you to solve this week. Good luck!",
        "weekly": "Weekly",
        "start_challenge": "Start Challenge",
        "daily_challenge_loading": "Loading today's challenge...",
        "my_submissions_desc": "A history of your past challenge submissions.",
        "challenge_title": "Challenge",
        "status": "Status",
        "date": "Date",
        // ai-assistant/page.tsx
        "ai_assistant_page_title": "AI Assistant",
        "ask_coding_questions": "Ask your coding questions and get instant help.",
        "chat": "Chat",
        "type_your_question": "Type your question...",
        "send": "Send",
        "ai_greeting": "Hello! I'm your AI programming assistant. How can I help you today?",
        "ai_greeting_context": "Hello! I'm your AI programming assistant. I see you're working on {language}. How can I help you today?",
        "ai_mock_response": "That's a great question! Let me help you with that.",
        "quick_questions": "Quick Questions",
        "chat_history": "Chat History",
        "new_chat": "New Chat",
        "rename_chat": "Rename Chat",
        "rename_chat_desc": "Enter a new name for this conversation.",
        "delete_chat": "Delete Chat",
        "are_you_sure": "Are you absolutely sure?",
        "delete_chat_confirm": "This will permanently delete the chat '{chatTitle}'. This action cannot be undone.",
        "save": "Save",
        "cancel": "Cancel",
        "start_new_conversation": "Start a new conversation",
        "empty_chat_placeholder_title": "Your AI Assistant",
        "empty_chat_placeholder_desc": "Start a new conversation by typing below, or select a previous one from the history.",
        // community/page.tsx
        "community_hub": "Community Hub",
        "ask_share_connect": "Ask questions, share knowledge, and connect with other learners.",
        "start_new_discussion": "Start New Discussion",
        "search_discussions": "Search discussions...",
        "view_discussion": "View Discussion",
        "trending_topics": "Trending Topics",
        "community_stats": "Community Stats",
        "total_members": "Total Members",
        "active_discussions": "Active Discussions",
        "featured_members": "Featured Members",
        // New keys for context-aware dashboard
        "learning_context": "Learning Context",
        "overall_dashboard": "Overall Dashboard",
        "dashboard_for_language": "Dashboard for {language}",
        "language_topics_completed": "{language} Topics Completed",
        "language_challenges_solved": "{language} Challenges Solved",
        "language_progress": "{language} Progress",
        "continue_learning_language": "Continue Learning {language}",
        // problem-solving/page.tsx
        "problem_solving_title": "Problem Solving Tools",
        "problem_solving_desc": "Break down problems and debug code with AI.",
        "problem_decomposer": "Problem Decomposer",
        "code_explainer": "Code Explainer",
        "code_debugger": "Code Debugger",
        "problem_statement": "Problem Statement",
        "describe_the_problem": "Describe the problem you want to solve.",
        "enter_problem_statement": "Enter a problem statement... e.g., 'Given an array of integers, find the pair with the smallest difference.'",
        "decompose_problem": "Decompose Problem",
        "decomposing": "Decomposing...",
        "ai_breakdown": "AI Breakdown",
        "ai_generated_plan": "Here's the AI-generated plan to tackle your problem.",
        "inputs": "Inputs",
        "outputs": "Outputs",
        "constraints": "Constraints & Edge Cases",
        "step_by_step_plan": "Step-by-Step Plan",
        "suggested_data_structures": "Suggested Data Structures",
        "get_started_by_entering_problem": "Get started by entering a problem statement above and let the AI break it down for you.",
        "error_examples": "Error Examples",
        "get_ai_suggestion": "Get AI Suggestion",
        "debug_with_ai": "Debug with AI",
        "ai_suggesting": "Getting suggestion...",
        "ai_suggestion": "AI Suggestion",
        "ai_suggestion_placeholder": "Click the 'Get AI Suggestion' button to receive an analysis and suggestions for your code.",
        "debugger_placeholder": "Run your code, or generate an example. Then click 'Debug with AI' to get an analysis of the code, an explanation of any errors, and a suggested fix.",
        "click_to_generate_example": "Click to generate a random {difficulty} example.",
        "generate_new_error_example_from_card": "Click a difficulty card to generate a new code example with a random error.",
        "difficulty": "Difficulty",
        "generate_example": "Generate Example",
        "debugging_sandbox": "Debugging Sandbox",
        "select_language_for_example_title": "Select a Language",
        "select_language_for_example_desc": "Please select a specific programming language from the sidebar to generate an example.",
        // projects/page.tsx
        "apply_your_skills": "Apply your skills by building real-world projects.",
        "all_projects": "All Projects",
        "web": "Web",
        "data_science": "Data Science",
        "games": "Games",
        "start_project": "Start Project",
        "no_projects_in_category": "No projects found in this category yet.",
        // progress/page.tsx
        "progress_tracker_title": "Progress Tracker",
        "progress_tracker_desc": "Monitor your learning journey and achievements.",
        "total_xp": "Total XP",
        "language_progress_table": "Language Specific Progress",
        "your_progress_in_each_language": "Your progress in each language you've started.",
        "activity_feed": "Activity Feed",
        "your_recent_activities": "A log of your most recent activities.",
        "completed_lesson": "Completed lesson",
        "solved_challenge": "Solved challenge",
        "started_project": "Started project",
        // tasks/page.tsx
        "tasks_title": "My Tasks",
        "tasks_description": "Organize your learning with a personal task board.",
        "add_new_task": "Add New Task",
        "todo": "To Do",
        "in_progress": "In Progress",
        "done": "Done",
        "edit_task": "Edit Task",
        "delete_task": "Delete Task",
        "save_changes": "Save Changes",
        "delete_task_confirm": "This action cannot be undone. This will permanently delete the task '{taskTitle}'.",
        "add_task": "Add Task",
        "task_added": "Task Added",
        "task_updated": "Task Updated",
        "add_manually": "Add Manually",
        "generate_with_ai": "Generate with AI",
        "learning_topic": "Learning Topic",
        "ai_task_desc": "Enter a topic and the AI will generate a learning plan for you.",
        "add_task_desc": "Add a new task to your board manually, or let the AI generate one based on a topic.",
        "generating": "Generating...",
        "generate_tasks": "Generate Tasks",
        "lesson_not_found_title": "Lesson Not Found",
        "back_to_curriculum": "Back to Curriculum",
        "lesson_not_found_desc": "The lesson you are looking for does not exist or has not been created yet.",
        "from_topic": "From topic",
        "lesson_content_coming_soon": "Content for this lesson is coming soon!",
        "try_it_yourself": "Try it Yourself",
        "try_it_yourself_desc": "Run, modify, and understand the code from this lesson.",
        "code_explanation_placeholder": "Click 'Explain Code' to get an AI-powered breakdown of this snippet.",
        "no_submissions_for_language": "No submissions found for the selected language.",
        // challenges/[challengeId]/page.tsx
        "solve_challenge": "Solve the challenge.",
        "back_to_challenges": "Back to Challenges",
        "your_solution": "Your Solution",
        "submit": "Submit",
        "submitting": "Submitting...",
        "run_code": "Run Code",
        "debug_code": "Debug with AI",
        "submission_accepted": "Submission Accepted!",
        "submission_failed": "Submission Failed",
        "times_up_title": "Time's Up!",
        "times_up_desc": "The time limit for this challenge has been reached.",
        "time_left": "Time Left: {time}"
    },
    bn: {
        welcome_back: "ফিরে আসার জন্য স্বাগতম, গিট ফ্রপ!",
        continue_journey: "আপনার প্রোগ্রামিং যাত্রা চালিয়ে যান।",
        beginner: "শিক্ষানবিস",
        member_since: "২০২৫ থেকে সদস্য",
        day_streak_banner: "দিনের ধারা",
        total_points: "মোট পয়েন্ট",
        settings: "সেটিংস",
        overview: "সংক্ষিপ্ত বিবরণ",
        progress_tab: " অগ্রগতি",
        awards: "পুরস্কার",
        topics_completed: "বিষয় সম্পন্ন",
        challenges_solved: "চ্যালেঞ্জ সমাধান",
        projects_created: "প্রকল্প তৈরি",
        current_streak: "বর্তমান ধারা",
        from_last_week: "গত সপ্তাহ থেকে +{change}",
        day_streak_card: "দিনের ধারা",
        quick_actions: "দ্রুত পদক্ষেপ",
        jump_back: "আপনার শেখার যাত্রায় ফিরে যান।",
        continue_learning: "শেখা চালিয়ে যান",
        daily_challenge: "দৈনিক চ্যালেঞ্জ",
        ai_assistant: "এআই সহকারী",
        your_languages: "আপনার প্রোগ্রামিং ভাষা",
        master_languages: "একাধিক ভাষায় দক্ষতা অর্জন করুন এবং আপনার দক্ষতা প্রসারিত করুন।",
        progress_bar: "অগ্রগতি",
        start_learning: "শেখা শুরু করুন",
        your_progress: "আপনার অগ্রগতি",
        track_progress: "সময়ের সাথে সাথে আপনার শেখার কার্যকলাপ ট্র্যাক করুন।",
        your_awards: "আপনার পুরস্কার",
        all_awards: "আপনি অর্জিত সমস্ত ব্যাজ এবং পুরস্কার।",
        profile_settings: "প্রোফাইল সেটিংস",
        manage_profile: "আপনার প্রোফাইল তথ্য এবং পছন্দ পরিচালনা করুন।",
        full_name: "পুরো নাম",
        email_address: "ইমেল ঠিকানা",
        new_password: "নতুন পাসওয়ার্ড",
        enter_new_password: "নতুন পাসওয়ার্ড লিখুন",
        email_notifications: "ইমেল বিজ্ঞপ্তি",
        receive_emails: "কোর্স আপডেট এবং ঘোষণা সম্পর্কে ইমেল পান।",
        save_settings: "সেটিংস সংরক্ষণ করুন",
        sidebar_languages: "প্রোগ্রামিং ভাষা",
        not_started: "শুরু হয়নি",
        complete: "সম্পূর্ণ",
        dashboard: "ড্যাশবোর্ড",
        learn_guide: "শেখার নির্দেশিকা",
        practice_examples: "অনুশীলন ও উদাহরণ",
        challenges: "চ্যালেঞ্জ",
        problem_solving: "সমস্যা সমাধান",
        mini_projects: "মিনি প্রকল্প",
        progress_tracker: "অগ্রগতি ট্র্যাকার",
        recent_badges: "সাম্প্রতিক ব্যাজ",
        day_streak_header: "দিনের ধারা",
        // languages/page.tsx
        "choose_language": "একটি ভাষা চয়ন করুন",
        "select_language_journey": "আপনার শেখার যাত্রা শুরু করতে একটি ভাষা নির্বাচন করুন।",
        // languages/[langId]/page.tsx
        "back_to_languages": "ভাষায় ফিরে যান",
        "topics_lessons": "বিষয় এবং পাঠ",
        "master_language_path": "{language} আয়ত্ত করতে পথ অনুসরণ করুন।",
        "lessons_coming_soon": "এই বিষয়ের জন্য পাঠ শীঘ্রই আসছে!",
        "start_lesson": "পাঠ শুরু করুন",
        "curriculum_coming_soon": "{language} এর জন্য পাঠ্যক্রম শীঘ্রই আসছে।",
        "language_curriculum": "{language} পাঠ্যক্রম",
        // practice/page.tsx
        "practice_and_examples": "অনুশীলন এবং উদাহরণ",
        "practice_skills_interactive": "আমাদের ইন্টারেক্টিভ কোড এডিটর এবং উদাহরণ দিয়ে আপনার কোডিং দক্ষতা অনুশীলন করুন।",
        "code_examples": "কোড উদাহরণ",
        "interactive_code_editor": "ইন্টারেক্টিভ কোড এডিটর",
        "reset": "রিসেট",
        "run": "চালান",
        "running": "চলছে",
        "editor": "এডিটর",
        "output": "আউটপুট",
        "ai_explanation": "এআই ব্যাখ্যা",
        "run_to_see_output": "আউটপুট দেখতে কোড চালান...",
        "ai_is_thinking": "এআই ভাবছে...",
        "click_ai_button_for_explanation": "আপনার কোডের ব্যাখ্যা পেতে বেগুনি এআই বোতামে ক্লিক করুন।",
        "copied_to_clipboard_title": "অনুলিপি করা হয়েছে!",
        "copied_to_clipboard_desc": "কোড ক্লিপবোর্ডে অনুলিপি করা হয়েছে।",
        "cannot_explain_empty_title": "খালি কোড ব্যাখ্যা করা যাবে না",
        "cannot_explain_empty_desc": "অনুগ্রহ করে প্রথমে সম্পাদকে কিছু কোড লিখুন।",
        "ai_explanation_failed_title": "এআই ব্যাখ্যা ব্যর্থ হয়েছে",
        "ai_explanation_failed_desc": "ব্যাখ্যা তৈরি করতে একটি ত্রুটি ছিল।",
        "save_feature_soon_title": "বৈশিষ্ট্য শীঘ্রই আসছে!",
        "save_feature_soon_desc": "আপনার কোড স্নিপেটগুলি সংরক্ষণ করা ভবিষ্যতের আপডেটে উপলব্ধ হবে।",
        "code_copied_title": "ক্লিপবোর্ডে অনুলিপি করা হয়েছে",
        "code_copied_desc": "কোডটি আপনার ক্লিপবোর্ডে অনুলিপি করা হয়েছে।",
        "save_snippet": "স্নিপেট সংরক্ষণ করুন",
        "explain_code": "কোড ব্যাখ্যা করুন",
        "copy_code": "অনুলিপি",
        "reset_code": "রিসেট",
        "ai_explaining": "ব্যাখ্যা করা হচ্ছে...",
        "my_snippets": "আমার স্নিপেট",
        "snippet_saved": "স্নিপেট সংরক্ষিত",
        "snippet_saved_desc": "'{snippetTitle}' আপনার স্নিপেটে যোগ করা হয়েছে।",
        "load_snippet_desc": "স্নিপেটটি সম্পাদকে প্রস্তুত।",
        "snippet_deleted": "স্নিপেট মুছে ফেলা হয়েছে",
        "snippet_deleted_desc": "'{snippetTitle}' মুছে ফেলা হয়েছে।",
        "review_saved_code": "আপনার সংরক্ষিত কোড পর্যালোচনা, সম্পাদনা বা মুছুন।",
        "no_saved_snippets": "আপনার কোন সংরক্ষিত স্নিপেট নেই। আপনার কাজ রাখতে সম্পাদকের 'স্নিপেট সংরক্ষণ করুন' বোতামটি ব্যবহার করুন।",
        "are_you_sure_delete_snippet": "আপনি কি পুরোপুরি নিশ্চিত?",
        "delete_snippet_confirm": "এই পদক্ষেপটি '{snippetTitle}' স্নিপেটটি স্থায়ীভাবে মুছে ফেলবে। এই পদক্ষেপটি ফিরিয়ে আনা যাবে না।",
        "edit": "সম্পাদনা",
        "delete": "মুছে ফেলুন",
        "practice_topics_tab": "অনুশীলন বিষয়",
        "untitled_snippet": "শিরোনামহীন স্নিপেট",
        "saved_on_date": "{date} তারিখে সংরক্ষিত",
        "loaded": "লোড হয়েছে",
        "snippet_updated": "স্নিপেট আপডেট করা হয়েছে",
        "snippet_updated_desc": "'{snippetTitle}' আপডেট করা হয়েছে।",
        "edit_snippet_details": "বিবরণ সম্পাদনা করুন",
        "update_snippet": "স্নিপেট আপডেট করুন",
        "edit_snippet_title": "স্নিপেটের বিবরণ সম্পাদনা করুন",
        "edit_snippet_desc": "আপনার স্নিপেটের জন্য শিরোনাম এবং বিবরণ আপডেট করুন।",
        "title": "শিরোনাম",
        "description": "বিবরণ",
        "chat_renamed": "চ্যাটের নাম পরিবর্তন করা হয়েছে",
        "chat_renamed_desc": "কথোপকথনের শিরোনাম আপডেট করা হয়েছে।",
        "chat_deleted": "চ্যাট মুছে ফেলা হয়েছে",
        "chat_deleted_desc": "কথোপকথনটি আপনার ইতিহাস থেকে সরানো হয়েছে।",
        // challenges/page.tsx
        "challenge_yourself": "কোডিং সমস্যাগুলির সাথে নিজেকে চ্যালেঞ্জ করুন এবং আপনার প্রোগ্রামিং দক্ষতা উন্নত করুন।",
        "all_challenges": "সমস্ত চ্যালেঞ্জ",
        "daily_challenge_tab": "দৈনিক চ্যালেঞ্জ",
        "my_submissions": "আমার জমা",
        "language": "ভাষা",
        "no_challenges_for_language": "নির্বাচিত ভাষার জন্য কোন চ্যালেঞ্জ উপলব্ধ নেই। সমস্ত চ্যালেঞ্জ দেখতে \"সামগ্রিক ড্যাশবোর্ড\" নির্বাচন করার চেষ্টা করুন।",
        "daily_challenge_title": "আজকের দৈনিক চ্যালেঞ্জ",
        "daily_challenge_desc": "প্রতিদিন একটি নতুন চ্যালেঞ্জ ফিচার করা হয়। একবার চেষ্টা করে দেখুন!",
        "weekly_challenge_title": "এই সপ্তাহের চ্যালেঞ্জ",
        "weekly_challenge_desc": "এই সপ্তাহে আপনার জন্য একটি কঠিন চ্যালেঞ্জ। শুভকামনা!",
        "weekly": "সাপ্তাহিক",
        "start_challenge": "চ্যালেঞ্জ শুরু করুন",
        "daily_challenge_loading": "আজকের চ্যালেঞ্জ লোড হচ্ছে...",
        "my_submissions_desc": "আপনার অতীতের চ্যালেঞ্জ জমা দেওয়ার ইতিহাস।",
        "challenge_title": "চ্যালেঞ্জ",
        "status": "অবস্থা",
        "date": "তারিখ",
        // ai-assistant/page.tsx
        "ai_assistant_page_title": "এআই সহকারী",
        "ask_coding_questions": "আপনার কোডিং প্রশ্ন জিজ্ঞাসা করুন এবং তাত্ক্ষণিক সহায়তা পান।",
        "chat": "চ্যাট",
        "type_your_question": "আপনার প্রশ্ন টাইপ করুন...",
        "send": "প্রেরণ",
        "ai_greeting": "হ্যালো! আমি আপনার এআই প্রোগ্রামিং সহকারী। আমি আজ আপনাকে কিভাবে সাহায্য করতে পারি?",
        "ai_greeting_context": "হ্যালো! আমি আপনার এআই প্রোগ্রামিং সহকারী। আমি দেখছি আপনি {language} নিয়ে কাজ করছেন। আমি আপনাকে আজ কিভাবে সাহায্য করতে পারি?",
        "ai_mock_response": "এটি একটি দুর্দান্ত প্রশ্ন! আমাকে আপনাকে সাহায্য করতে দিন।",
        "quick_questions": "দ্রুত প্রশ্ন",
        "chat_history": "চ্যাটের ইতিহাস",
        "new_chat": "নতুন চ্যাট",
        "rename_chat": "চ্যাটের নাম পরিবর্তন করুন",
        "rename_chat_desc": "এই কথোপকথনের জন্য একটি নতুন নাম লিখুন।",
        "delete_chat": "চ্যাট মুছুন",
        "are_you_sure": "আপনি কি পুরোপুরি নিশ্চিত?",
        "delete_chat_confirm": "এটি চ্যাট '{chatTitle}' স্থায়ীভাবে মুছে ফেলবে। এই পদক্ষেপটি ফিরিয়ে আনা যাবে না।",
        "save": "সংরক্ষণ",
        "cancel": "বাতিল",
        "start_new_conversation": "একটি নতুন কথোপকথন শুরু করুন",
        "empty_chat_placeholder_title": "আপনার এআই সহকারী",
        "empty_chat_placeholder_desc": "নিচে টাইপ করে একটি নতুন কথোপকথন শুরু করুন, অথবা ইতিহাস থেকে একটি পূর্ববর্তী নির্বাচন করুন।",
        // community/page.tsx
        "community_hub": "কমিউনিটি হাব",
        "ask_share_connect": "প্রশ্ন জিজ্ঞাসা করুন, জ্ঞান ভাগ করুন, এবং অন্যান্য শিক্ষার্থীদের সাথে সংযোগ স্থাপন করুন।",
        "start_new_discussion": "নতুন আলোচনা শুরু করুন",
        "search_discussions": "আলোচনা অনুসন্ধান করুন...",
        "view_discussion": "আলোচনা দেখুন",
        "trending_topics": "প্রবণতা বিষয়",
        "community_stats": "সম্প্রদায়ের পরিসংখ্যান",
        "total_members": "মোট সদস্য",
        "active_discussions": "সক্রিয় আলোচনা",
        "featured_members": "বিশিষ্ট সদস্য",
        // New keys for context-aware dashboard
        "learning_context": "শেখার প্রসঙ্গ",
        "overall_dashboard": "সামগ্রিক ড্যাশবোর্ড",
        "dashboard_for_language": "{language} এর জন্য ড্যাশবোর্ড",
        "language_topics_completed": "{language} বিষয় সম্পন্ন",
        "language_challenges_solved": "{language} চ্যালেঞ্জ সমাধান",
        "language_progress": "{language} অগ্রগতি",
        "continue_learning_language": "{language} শেখা চালিয়ে যান",
        // problem-solving/page.tsx
        "problem_solving_title": "সমস্যা সমাধানের সরঞ্জাম",
        "problem_solving_desc": "এআই দিয়ে সমস্যাগুলি ভেঙে ফেলুন এবং কোড ডিবাগ করুন।",
        "problem_decomposer": "সমস্যা বিভাজক",
        "code_explainer": "কোড ব্যাখ্যাকারী",
        "code_debugger": "কোড ডিবাগার",
        "problem_statement": "সমস্যার বিবৃতি",
        "describe_the_problem": "আপনি যে সমস্যাটি সমাধান করতে চান তার বর্ণনা দিন।",
        "enter_problem_statement": "একটি সমস্যার বিবৃতি লিখুন...",
        "decompose_problem": "সমস্যা বিভাজন করুন",
        "decomposing": "বিভাজন চলছে...",
        "ai_breakdown": "এআই দ্বারা বিভাজন",
        "ai_generated_plan": "আপনার সমস্যা মোকাবেলার জন্য এখানে এআই-জেনারেটেড পরিকল্পনা।",
        "inputs": "ইনপুট",
        "outputs": "আউটপুট",
        "constraints": "সীমাবদ্ধতা এবং এজ কেস",
        "step_by_step_plan": "ধাপে ধাপে পরিকল্পনা",
        "suggested_data_structures": "প্রস্তাবিত ডেটা স্ট্রাকচার",
        "get_started_by_entering_problem": "উপরে একটি সমস্যার বিবৃতি প্রবেশ করে শুরু করুন এবং এআই কে এটি ভেঙে ফেলতে দিন।",
        "error_examples": "ত্রুটির উদাহরণ",
        "get_ai_suggestion": "এআই পরামর্শ নিন",
        "debug_with_ai": "এআই দিয়ে ডিবাগ করুন",
        "ai_suggesting": "পরামর্শ আনা হচ্ছে...",
        "ai_suggestion": "এআই পরামর্শ",
        "ai_suggestion_placeholder": "আপনার কোডের বিশ্লেষণ এবং পরামর্শ পেতে 'এআই পরামর্শ নিন' বোতামে ক্লিক করুন।",
        "debugger_placeholder": "আপনার কোড চালান, অথবা একটি উদাহরণ তৈরি করুন। তারপর কোডের বিশ্লেষণ, যেকোনো ত্রুটির ব্যাখ্যা এবং একটি প্রস্তাবিত সমাধান পেতে 'এআই দিয়ে ডিবাগ করুন' এ ক্লিক করুন।",
        "click_to_generate_example": "একটি এলোমেলো {difficulty} উদাহরণ তৈরি করতে ক্লিক করুন।",
        "generate_new_error_example_from_card": "একটি কঠিনতার কার্ডে ক্লিক করে একটি নতুন এলোমেলো ত্রুটিসহ কোড উদাহরণ তৈরি করুন।",
        "difficulty": "কঠিনতা",
        "generate_example": "উদাহরণ তৈরি করুন",
        "debugging_sandbox": "ডিবাগিং স্যান্ডবক্স",
        "select_language_for_example_title": "একটি ভাষা নির্বাচন করুন",
        "select_language_for_example_desc": "একটি উদাহরণ তৈরি করতে সাইডবার থেকে একটি নির্দিষ্ট প্রোগ্রামিং ভাষা নির্বাচন করুন।",
        // projects/page.tsx
        "apply_your_skills": "বাস্তব-বিশ্বের প্রকল্প তৈরি করে আপনার দক্ষতা প্রয়োগ করুন।",
        "all_projects": "সমস্ত প্রকল্প",
        "web": "ওয়েব",
        "data_science": "ডেটা সায়েন্স",
        "games": "গেমস",
        "start_project": "প্রকল্প শুরু করুন",
        "no_projects_in_category": "এই বিভাগে এখনও কোনো প্রকল্প পাওয়া যায়নি।",
        // progress/page.tsx
        "progress_tracker_title": "অগ্রগতি ট্র্যাকার",
        "progress_tracker_desc": "আপনার শেখার যাত্রা এবং কৃতিত্ব নিরীক্ষণ করুন।",
        "total_xp": "মোট এক্সপি",
        "language_progress_table": "ভাষা নির্দিষ্ট অগ্রগতি",
        "your_progress_in_each_language": "আপনি শুরু করেছেন এমন প্রতিটি ভাষায় আপনার অগ্রগতি।",
        "activity_feed": "কার্যকলাপ ফিড",
        "your_recent_activities": "আপনার সাম্প্রতিক কার্যকলাপের একটি লগ।",
        "completed_lesson": "পাঠ সম্পন্ন হয়েছে",
        "solved_challenge": "চ্যালেঞ্জ সমাধান করা হয়েছে",
        "started_project": "প্রকল্প শুরু হয়েছে",
        // tasks/page.tsx
        "tasks_title": "আমার কাজ",
        "tasks_description": "একটি ব্যক্তিগত টাস্ক বোর্ডের সাথে আপনার শেখা সংগঠিত করুন।",
        "add_new_task": "নতুন কাজ যোগ করুন",
        "todo": "করতে হবে",
        "in_progress": "চলছে",
        "done": "সম্পন্ন",
        "edit_task": "কাজ সম্পাদনা করুন",
        "delete_task": "কাজ মুছুন",
        "save_changes": "পরিবর্তন সংরক্ষণ করুন",
        "delete_task_confirm": "এই কাজটি স্থায়ীভাবে মুছে ফেলা হবে '{taskTitle}'. এই পদক্ষেপটি ফিরিয়ে আনা যাবে না।",
        "add_task": "কাজ যোগ করুন",
        "task_added": "কাজ যোগ করা হয়েছে",
        "task_updated": "কাজ আপডেট করা হয়েছে",
        "add_manually": "ম্যানুয়ালি যোগ করুন",
        "generate_with_ai": "এআই দিয়ে তৈরি করুন",
        "learning_topic": "শেখার বিষয়",
        "ai_task_desc": "একটি বিষয় লিখুন এবং এআই আপনার জন্য একটি শেখার পরিকল্পনা তৈরি করবে।",
        "add_task_desc": "আপনার বোর্ডে ম্যানুয়ালি একটি নতুন কাজ যোগ করুন অথবা এআইকে একটি বিষয়ের উপর ভিত্তি করে তৈরি করতে দিন।",
        "generating": "তৈরি হচ্ছে...",
        "generate_tasks": "কাজ তৈরি করুন",
        "lesson_not_found_title": "পাঠ পাওয়া যায়নি",
        "back_to_curriculum": "পাঠ্যক্রমে ফিরে যান",
        "lesson_not_found_desc": "আপনি যে পাঠটি খুঁজছেন তা বিদ্যমান নেই বা এখনও তৈরি করা হয়নি।",
        "from_topic": "বিষয় থেকে",
        "lesson_content_coming_soon": "এই পাঠের জন্য বিষয়বস্তু শীঘ্রই আসছে!",
        "try_it_yourself": "নিজে চেষ্টা করুন",
        "try_it_yourself_desc": "এই পাঠ থেকে কোড চালান এবং সম্পাদনা করুন।",
        "code_explanation_placeholder": "এই স্নিপেটের এআই-চালিত ভাঙ্গন পেতে 'কোড ব্যাখ্যা করুন' ক্লিক করুন।",
        "no_submissions_for_language": "নির্বাচিত ভাষার জন্য কোনো জমা পাওয়া যায়নি।",
        // challenges/[challengeId]/page.tsx
        "solve_challenge": "চ্যালেঞ্জটি সমাধান করুন।",
        "back_to_challenges": "চ্যালেঞ্জগুলিতে ফিরে যান",
        "your_solution": "আপনার সমাধান",
        "submit": "জমা দিন",
        "submitting": "জমা দেওয়া হচ্ছে...",
        "run_code": "কোড চালান",
        "debug_code": "এআই দিয়ে ডিবাগ করুন",
        "submission_accepted": "জমা গৃহীত হয়েছে!",
        "submission_failed": "জমা ব্যর্থ হয়েছে",
        "times_up_title": "সময় শেষ!",
        "times_up_desc": "এই চ্যালেঞ্জের জন্য সময়সীমা শেষ হয়ে গেছে।",
        "time_left": "বাকি সময়: {time}"
    },
    hi: {
        welcome_back: "वापस स्वागत है, गिट फ्रप!",
        continue_journey: "अपनी प्रोग्रामिंग यात्रा जारी रखें।",
        beginner: "शुरुआती",
        member_since: "2025 से सदस्य",
        day_streak_banner: "दिन की स्ट्रीक",
        total_points: "कुल अंक",
        settings: "सेटिंग्स",
        overview: "अवलोकन",
        progress_tab: "प्रगति",
        awards: "पुरस्कार",
        topics_completed: "विषय पूरे हुए",
        challenges_solved: "चुनौतियाँ हल हुईं",
        projects_created: "परियोजनाएं बनाई गईं",
        current_streak: "वर्तमान स्ट्रीक",
        from_last_week: "पिछले सप्ताह से +{change}",
        day_streak_card: "दिन की स्ट्रीक",
        quick_actions: "त्वरित कार्रवाई",
        jump_back: "अपनी सीखने की यात्रा में वापस कूदें।",
        continue_learning: "सीखना जारी रखें",
        daily_challenge: "दैनिक चुनौती",
        ai_assistant: "एआई सहायक",
        your_languages: "आपकी प्रोग्रामिंग भाषाएँ",
        master_languages: "कई भाषाओं में महारत हासिल करें और अपने कौशल का विस्तार करें।",
        progress_bar: "प्रगति",
        start_learning: "सीखना शुरू करें",
        your_progress: "आपकी प्रगति",
        track_progress: "समय के साथ अपनी सीखने की गतिविधि को ट्रैक करें।",
        your_awards: "आपके पुरस्कार",
        all_awards: "आपके द्वारा अर्जित सभी बैज और पुरस्कार।",
        profile_settings: "प्रोफ़ाइल सेटिंग्स",
        manage_profile: "अपनी प्रोफ़ाइल जानकारी और प्राथमिकताएं प्रबंधित करें।",
        full_name: "पूरा नाम",
        email_address: "ईमेल पता",
        new_password: "नया पासवर्ड",
        enter_new_password: "नया पासवर्ड दर्ज करें",
        email_notifications: "ईमेल सूचनाएं",
        receive_emails: "पाठ्यक्रम अपडेट और घोषणाओं के बारे में ईमेल प्राप्त करें।",
        save_settings: "सेटिंग्स सहेजें",
        sidebar_languages: "प्रोग्रामिंग भाषाएँ",
        not_started: "शुरू नहीं हुआ",
        complete: "पूर्ण",
        dashboard: "डैशबोर्ड",
        learn_guide: "सीखने की गाइड",
        practice_examples: "अभ्यास और उदाहरण",
        challenges: "चुनौतियाँ",
        problem_solving: "समस्या को सुलझाना",
        mini_projects: "मिनी परियोजनाएं",
        progress_tracker: "प्रगति ट्रैकर",
        recent_badges: "हाल के बैज",
        day_streak_header: "दिन की स्ट्रीक",
        // languages/page.tsx
        "choose_language": "एक भाषा चुनें",
        "select_language_journey": "अपनी सीखने की यात्रा शुरू करने के लिए एक भाषा चुनें।",
        // languages/[langId]/page.tsx
        "back_to_languages": "भाषाओं पर वापस जाएं",
        "topics_lessons": "विषय और पाठ",
        "master_language_path": "{language} में महारत हासिल करने के लिए पथ का अनुसरण करें।",
        "lessons_coming_soon": "इस विषय के लिए पाठ जल्द ही आ रहे हैं!",
        "start_lesson": "पाठ शुरू करें",
        "curriculum_coming_soon": "{language} के लिए पाठ्यक्रम जल्द ही आ रहा है।",
        "language_curriculum": "{language} पाठ्यक्रम",
        // practice/page.tsx
        "practice_and_examples": "अभ्यास और उदाहरण",
        "practice_skills_interactive": "हमारे इंटरैक्टिव कोड एडिटर और उदाहरणों के साथ अपने कोडिंग कौशल का अभ्यास करें।",
        "code_examples": "कोड उदाहरण",
        "interactive_code_editor": "इंटरैक्टिव कोड संपादक",
        "reset": "रीसेट करें",
        "run": "चलाएं",
        "running": "चल रहा है",
        "editor": "संपादक",
        "output": "आउटपुट",
        "ai_explanation": "एआई स्पष्टीकरण",
        "run_to_see_output": "आउटपुट देखने के लिए कोड चलाएँ...",
        "ai_is_thinking": "एआई सोच रहा है...",
        "click_ai_button_for_explanation": "अपने कोड का स्पष्टीकरण प्राप्त करने के लिए बैंगनी एआई बटन पर क्लिक करें।",
        "copied_to_clipboard_title": "कॉपी किया गया!",
        "copied_to_clipboard_desc": "कोड क्लिपबोर्ड पर कॉपी किया गया।",
        "cannot_explain_empty_title": "खाली कोड की व्याख्या नहीं कर सकता",
        "cannot_explain_empty_desc": "कृपया पहले संपादक में कुछ कोड दर्ज करें।",
        "ai_explanation_failed_title": "एआई स्पष्टीकरण विफल",
        "ai_explanation_failed_desc": "स्पष्टीकरण उत्पन्न करने में एक त्रुटि हुई।",
        "save_feature_soon_title": "सुविधा जल्द ही आ रही है!",
        "save_feature_soon_desc": "आपके कोड स्निपेट को सहेजना भविष्य के अपडेट में उपलब्ध होगा।",
        "code_copied_title": "क्लिपबोर्ड पर कॉपी किया गया",
        "code_copied_desc": "कोड आपके क्लिपबोर्ड पर कॉपी कर दिया गया है।",
        "save_snippet": "स्निपेट सहेजें",
        "explain_code": "कोड की व्याख्या करें",
        "copy_code": "प्रतिलिपि",
        "reset_code": "रीसेट",
        "ai_explaining": "व्याख्या कर रहा है...",
        "my_snippets": "मेरे स्निपेट्स",
        "snippet_saved": "स्निपेट सहेजा गया",
        "snippet_saved_desc": "'{snippetTitle}' को आपके स्निपेट्स में जोड़ा गया है।",
        "load_snippet_desc": "स्निपेट संपादक में तैयार है।",
        "snippet_deleted": "स्निपेट हटाया गया",
        "snippet_deleted_desc": "'{snippetTitle}' हटा दिया गया है।",
        "review_saved_code": "अपने सहेजे गए कोड की समीक्षा करें, संपादित करें या हटाएं।",
        "no_saved_snippets": "आपके पास कोई सहेजा गया स्निपेट नहीं है। अपने काम को रखने के लिए संपादक में 'स्निपेट सहेजें' बटन का उपयोग करें।",
        "are_you_sure_delete_snippet": "क्या आप बिल्कुल निश्चित हैं?",
        "delete_snippet_confirm": "यह कार्रवाई स्निपेट '{snippetTitle}' को स्थायी रूप से हटा देगी। यह क्रिया पूर्ववत नहीं की जा सकती।",
        "edit": "संपादित करें",
        "delete": "हटाएं",
        "practice_topics_tab": "अभ्यास विषय",
        "untitled_snippet": "शीर्षक रहित स्निपेट",
        "saved_on_date": "{date} को सहेजा गया",
        "loaded": "लोड किया गया",
        "snippet_updated": "स्निपेट अपडेट किया गया",
        "snippet_updated_desc": "'{snippetTitle}' अपडेट किया गया है।",
        "edit_snippet_details": "विवरण संपादित करें",
        "update_snippet": "स्निपेट अपडेट करें",
        "edit_snippet_title": "स्निपेट विवरण संपादित करें",
        "edit_snippet_desc": "अपने स्निपेट के लिए शीर्षक और विवरण अपडेट करें।",
        "title": "शीर्षक",
        "description": "विवरण",
        "chat_renamed": "चैट का नाम बदला गया",
        "chat_renamed_desc": "बातचीत का शीर्षक अपडेट कर दिया गया है।",
        "chat_deleted": "चैट हटा दी गई",
        "chat_deleted_desc": "बातचीत को आपके इतिहास से हटा दिया गया है।",
        // challenges/page.tsx
        "challenge_yourself": "कोडिंग समस्याओं के साथ खुद को चुनौती दें और अपने प्रोग्रामिंग कौशल में सुधार करें।",
        "all_challenges": "सभी चुनौतियाँ",
        "daily_challenge_tab": "दैनिक चुनौती",
        "my_submissions": "मेरी प्रस्तुतियाँ",
        "language": "भाषा",
        "no_challenges_for_language": "चयनित भाषा के लिए कोई चुनौती उपलब्ध नहीं है। सभी चुनौतियाँ देखने के लिए \"समग्र डैशबोर्ड\" का चयन करने का प्रयास करें।",
        "daily_challenge_title": "आज की दैनिक चुनौती",
        "daily_challenge_desc": "हर दिन एक नई चुनौती पेश की जाती है। इसे आजमाएं!",
        "weekly_challenge_title": "इस सप्ताह की चुनौती",
        "weekly_challenge_desc": "इस सप्ताह आपके लिए हल करने के लिए एक कठिन चुनौती। शुभकामनाएँ!",
        "weekly": "साप्ताहिक",
        "start_challenge": "चुनौती शुरू करें",
        "daily_challenge_loading": "आज की चुनौती लोड हो रही है...",
        "my_submissions_desc": "आपके पिछले चुनौती प्रस्तुतियों का इतिहास।",
        "challenge_title": "चुनौती",
        "status": "स्थिति",
        "date": "तारीख",
        // ai-assistant/page.tsx
        "ai_assistant_page_title": "एआई सहायक",
        "ask_coding_questions": "अपने कोडिंग प्रश्न पूछें और तुरंत सहायता प्राप्त करें।",
        "chat": "चैट",
        "type_your_question": "अपना प्रश्न टाइप करें...",
        "send": "भेजें",
        "ai_greeting": "नमस्ते! मैं आपका एआई प्रोग्रामिंग सहायक हूँ। मैं आज आपकी कैसे मदद कर सकता हूँ?",
        "ai_greeting_context": "नमस्ते! मैं आपका एआई प्रोग्रामिंग सहायक हूँ। मैं देख रहा हूँ कि आप {language} पर काम कर रहे हैं। मैं आज आपकी कैसे मदद कर सकता हूँ?",
        "ai_mock_response": "यह एक बहुत अच्छा सवाल है! मुझे आपकी मदद करने दीजिए।",
        "quick_questions": "त्वरित प्रश्न",
        "chat_history": "चैट इतिहास",
        "new_chat": "नई चैट",
        "rename_chat": "चैट का नाम बदलें",
        "rename_chat_desc": "इस बातचीत के लिए एक नया नाम दर्ज करें।",
        "delete_chat": "चैट हटाएं",
        "are_you_sure": "क्या आप बिल्कुल निश्चित हैं?",
        "delete_chat_confirm": "यह चैट '{chatTitle}' को स्थायी रूप से हटा देगा। यह क्रिया पूर्ववत नहीं की जा सकती।",
        "save": "सहेजें",
        "cancel": "रद्द करें",
        "start_new_conversation": "एक नई बातचीत शुरू करें",
        "empty_chat_placeholder_title": "आपका एआई सहायक",
        "empty_chat_placeholder_desc": "नीचे टाइप करके एक नई बातचीत शुरू करें, या इतिहास से पिछली बातचीत का चयन करें।",
        // community/page.tsx
        "community_hub": "सामुदायिक केंद्र",
        "ask_share_connect": "प्रश्न पूछें, ज्ञान साझा करें, और अन्य शिक्षार्थियों से जुड़ें।",
        "start_new_discussion": "नई चर्चा शुरू करें",
        "search_discussions": "चर्चाएँ खोजें...",
        "view_discussion": "चर्चा देखें",
        "trending_topics": "ट्रेंडिंग विषय",
        "community_stats": "सामुदायिक आँकड़े",
        "total_members": "कुल सदस्य",
        "active_discussions": "सक्रिय चर्चाएँ",
        "featured_members": "विशेष सदस्य",
        // New keys for context-aware dashboard
        "learning_context": "सीखने का संदर्भ",
        "overall_dashboard": "कुल मिलाकर डैशबोर्ड",
        "dashboard_for_language": "{language} के लिए डैशबोर्ड",
        "language_topics_completed": "{language} विषय पूरे हुए",
        "language_challenges_solved": "{language} चुनौतियाँ हल हुईं",
        "language_progress": "{language} प्रगति",
        "continue_learning_language": "{language} सीखना जारी रखें",
        // problem-solving/page.tsx
        "problem_solving_title": "समस्या समाधान उपकरण",
        "problem_solving_desc": "एआई के साथ समस्याओं को तोड़ें और कोड डीबग करें।",
        "problem_decomposer": "समस्या विघटनकर्ता",
        "code_explainer": "कोड व्याख्याता",
        "code_debugger": "कोड डीबगर",
        "problem_statement": "समस्या कथन",
        "describe_the_problem": "उस समस्या का वर्णन करें जिसे आप हल करना चाहते हैं।",
        "enter_problem_statement": "एक समस्या कथन दर्ज करें...",
        "decompose_problem": "समस्या का विघटन करें",
        "decomposing": "विघटन हो रहा है...",
        "ai_breakdown": "एआई ब्रेकडाउन",
        "ai_generated_plan": "आपकी समस्या से निपटने के लिए यहाँ एआई-जनित योजना है।",
        "inputs": "इनपुट",
        "outputs": "आउटपुट",
        "constraints": "बाधाएं और एज केस",
        "step_by_step_plan": "चरण-दर-चरण योजना",
        "suggested_data_structures": "सुझाए गए डेटा संरचनाएं",
        "get_started_by_entering_problem": "ऊपर एक समस्या कथन दर्ज करके आरंभ करें और एआई को इसे तोड़ने दें।",
        "error_examples": "त्रुटि उदाहरण",
        "get_ai_suggestion": "एआई सुझाव प्राप्त करें",
        "debug_with_ai": "एआई के साथ डीबग करें",
        "ai_suggesting": "सुझाव मिल रहा है...",
        "ai_suggestion": "एआई सुझाव",
        "ai_suggestion_placeholder": "अपने कोड का विश्लेषण और सुझाव प्राप्त करने के लिए 'एआई सुझाव प्राप्त करें' बटन पर क्लिक करें।",
        "debugger_placeholder": "अपना कोड चलाएं, या एक उदाहरण बनाएं। फिर कोड का विश्लेषण, किसी भी त्रुटि की व्याख्या, और एक सुझाए गए समाधान को प्राप्त करने के लिए 'एआई के साथ डीबग करें' पर क्लिक करें।",
        "click_to_generate_example": "एक यादृच्छिक {difficulty} उदाहरण उत्पन्न करने के लिए क्लिक करें।",
        "generate_new_error_example_from_card": "एक कठिनाई कार्ड पर क्लिक करके एक नई यादृच्छिक त्रुटि के साथ एक कोड उदाहरण उत्पन्न करें।",
        "difficulty": "कठिनाई",
        "generate_example": "उदाहरण उत्पन्न करें",
        "debugging_sandbox": "डीबगिंग सैंडबॉक्स",
        "select_language_for_example_title": "एक भाषा चुनें",
        "select_language_for_example_desc": "एक उदाहरण बनाने के लिए कृपया साइडबार से एक विशिष्ट प्रोग्रामिंग भाषा चुनें।",
        // projects/page.tsx
        "apply_your_skills": "वास्तविक-विश्व परियोजनाओं का निर्माण करके अपने कौशल को लागू करें।",
        "all_projects": "सभी परियोजनाएं",
        "web": "वेब",
        "data_science": "डेटा साइंस",
        "games": "गेम्स",
        "start_project": "परियोजना शुरू करें",
        "no_projects_in_category": "इस श्रेणी में अभी तक कोई परियोजना नहीं मिली है।",
        // progress/page.tsx
        "progress_tracker_title": "प्रगति ट्रैकर",
        "progress_tracker_desc": "अपनी सीखने की यात्रा और उपलब्धियों की निगरानी करें।",
        "total_xp": "कुल एक्सपी",
        "language_progress_table": "भाषा विशिष्ट प्रगति",
        "your_progress_in_each_language": "आपके द्वारा शुरू की गई प्रत्येक भाषा में आपकी प्रगति।",
        "activity_feed": "गतिविधि फ़ीड",
        "your_recent_activities": "आपकी सबसे हाल की गतिविधियों का एक लॉग।",
        "completed_lesson": "पाठ पूरा हुआ",
        "solved_challenge": "चुनौती हल हो गई",
        "started_project": "परियोजना शुरू हुई",
        // tasks/page.tsx
        "tasks_title": "मेरे कार्य",
        "tasks_description": "एक व्यक्तिगत कार्य बोर्ड के साथ अपनी शिक्षा को व्यवस्थित करें।",
        "add_new_task": "नया कार्य जोड़ें",
        "todo": "करने के लिए",
        "in_progress": "प्रगति में",
        "done": "पूर्ण",
        "edit_task": "कार्य संपादित करें",
        "delete_task": "कार्य हटाएं",
        "save_changes": "परिवर्तन सहेजें",
        "delete_task_confirm": "यह कार्रवाई कार्य '{taskTitle}' को स्थायी रूप से हटा देगी। यह क्रिया पूर्ववत नहीं की जा सकती।",
        "add_task": "कार्य जोड़ें",
        "task_added": "कार्य जोड़ा गया",
        "task_updated": "कार्य अपडेट किया गया",
        "add_manually": "मैन्युअल रूप से जोड़ें",
        "generate_with_ai": "एआई से उत्पन्न करें",
        "learning_topic": "सीखने का विषय",
        "ai_task_desc": "एक विषय दर्ज करें और एआई आपके लिए एक सीखने की योजना तैयार करेगा।",
        "add_task_desc": "अपने बोर्ड में मैन्युअल रूप से एक नया कार्य जोड़ें या एआई को एक विषय के आधार पर उत्पन्न करने दें।",
        "generating": "उत्पन्न हो रहा है...",
        "generate_tasks": "कार्य उत्पन्न करें",
        "lesson_not_found_title": "पाठ नहीं मिला",
        "back_to_curriculum": "पाठ्यक्रम पर वापस जाएं",
        "lesson_not_found_desc": "आप जिस पाठ की तलाश कर रहे हैं वह मौजूद नहीं है या अभी तक नहीं बनाया गया है।",
        "from_topic": "विषय से",
        "lesson_content_coming_soon": "इस पाठ के लिए सामग्री जल्द ही आ रही है!",
        "try_it_yourself": "स्वयं চেষ্টা করুন",
        "try_it_yourself_desc": "इस पाठ से कोड चलाएं और संपादित करें।",
        "code_explanation_placeholder": "इस स्निपेट का एआई-संचालित ब्रेकडाउन प्राप्त करने के लिए 'कोड समझाएं' पर क्लिक करें।",
        "no_submissions_for_language": "चयनित भाषा के लिए कोई सबमिशन नहीं मिला।",
        // challenges/[challengeId]/page.tsx
        "solve_challenge": "चुनौती का समाधान करें।",
        "back_to_challenges": "चुनौतियों पर वापस",
        "your_solution": "आपका समाधान",
        "submit": "जमा करें",
        "submitting": "जमा हो रहा है...",
        "run_code": "कोड चलाएं",
        "debug_code": "एआई के साथ डीबग करें",
        "submission_accepted": "प्रस्तुति स्वीकृत!",
        "submission_failed": "प्रस्तुति विफल",
        "times_up_title": "समय समाप्त!",
        "times_up_desc": "इस चुनौती के लिए समय सीमा समाप्त हो गई है।",
        "time_left": "शेष समय: {time}"
    },
    ur: {
        welcome_back: "واپس خوش آمدید، گٹ فرپ!",
        continue_journey: "اپنا پروگرامنگ کا سفر جاری رکھیں۔",
        beginner: "مبتدی",
        member_since: "2025 سے رکن",
        day_streak_banner: "دن کا سلسلہ",
        total_points: "کل پوائنٹس",
        settings: "ترتیبات",
        overview: "جائزہ",
        progress_tab: "پیش رفت",
        awards: "ایوارڈز",
        topics_completed: "موضوعات مکمل",
        challenges_solved: "چیلنجز حل ہوئے",
        projects_created: "پروجیکٹس بنائے گئے",
        current_streak: "موجودہ سلسلہ",
        from_last_week: "پچھلے ہفتے سے +{change}",
        day_streak_card: "دن کا سلسلہ",
        quick_actions: "فوری اقدامات",
        jump_back: "اپنے سیکھنے کے سفر میں واپس جائیں۔",
        continue_learning: "سیکھنا جاری رکھیں",
        daily_challenge: "روزانہ چیلنج",
        ai_assistant: "اے آئی اسسٹنٹ",
        your_languages: "آپ کی پروگرامنگ زبانیں",
        master_languages: "متعدد زبانوں میں مہارت حاصل کریں اور اپنی صلاحیتوں کو وسعت دیں۔",
        progress_bar: "پیش رفت",
        start_learning: "سیکھنا شروع کریں",
        your_progress: "آپ کی پیش رفت",
        track_progress: "وقت کے ساتھ اپنی سیکھنے کی سرگرمی کو ٹریک کریں۔",
        your_awards: "آپ کے ایوارڈز",
        all_awards: "وہ تمام بیجز اور ایوارڈز جو آپ نے حاصل کیے ہیں۔",
        profile_settings: "پروفائل کی ترتیبات",
        manage_profile: "اپنی پروفائل کی معلومات اور ترجیحات کا نظم کریں۔",
        full_name: "پورا نام",
        email_address: "ای میل اڈریس",
        new_password: "نیا پاس ورڈ",
        enter_new_password: "نیا پاس ورڈ درج کریں",
        email_notifications: "ای میل اطلاعات",
        receive_emails: "کورس کی تازہ کاریوں اور اعلانات کے بارے میں ای میلز موصول کریں۔",
        save_settings: "ترتیبات کو محفوظ کریں",
        sidebar_languages: "پروگرامنگ زبانیں",
        not_started: "شروع نہیں ہوا",
        complete: "مکمل",
        dashboard: "ڈیش بورڈ",
        learn_guide: "سیکھنے کی گائیڈ",
        practice_examples: "مشق اور مثالیں",
        challenges: "چیلنجز",
        problem_solving: "مسئلہ حل کرنا",
        mini_projects: "منی پروجیکٹس",
        progress_tracker: "پیش رفت ٹریکر",
        recent_badges: "حالیہ بیجز",
        day_streak_header: "دن کا سلسلہ",
        // languages/page.tsx
        "choose_language": "زبان کا انتخاب کریں",
        "select_language_journey": "اپنے سیکھنے کا سفر شروع کرنے کے لیے ایک زبان منتخب کریں۔",
        // languages/[langId]/page.tsx
        "back_to_languages": "زبانوں پر واپس جائیں",
        "topics_lessons": "موضوعات اور اسباق",
        "master_language_path": "{language} میں مہارت حاصل کرنے کے لیے راستے پر عمل کریں۔",
        "lessons_coming_soon": "اس موضوع کے لیے اسباق جلد آرہے ہیں!",
        "start_lesson": "سبق شروع کریں",
        "curriculum_coming_soon": "{language} کے لیے نصاب جلد آرہا ہے۔",
        "language_curriculum": "{language} نصاب",
        // practice/page.tsx
        "practice_and_examples": "مشق اور مثالیں",
        "practice_skills_interactive": "ہمارے انٹرایکٹو کوڈ ایڈیٹر اور مثالوں کے ساتھ اپنی کوڈنگ کی مہارتوں کی مشق کریں۔",
        "code_examples": "کوڈ کی مثالیں",
        "interactive_code_editor": "انٹرایکٹو کوڈ ایڈیٹر",
        "reset": "ری سیٹ کریں",
        "run": "چلائیں",
        "running": "چل رہا ہے",
        "editor": "ایڈیٹر",
        "output": "آؤٹ پٹ",
        "ai_explanation": "اے آئی کی وضاحت",
        "run_to_see_output": "آؤٹ پٹ دیکھنے کے لیے کوڈ چلائیں...",
        "ai_is_thinking": "اے آئی سوچ رہا ہے...",
        "click_ai_button_for_explanation": "اپنے کوڈ کی وضاحت حاصل کرنے کے لیے جامنی رنگ کے اے آئی بٹن پر کلک کریں۔",
        "copied_to_clipboard_title": "کاپی ہو گیا!",
        "copied_to_clipboard_desc": "کوڈ کلپ بورڈ پر کاپی ہو گیا۔",
        "cannot_explain_empty_title": "خالی کوڈ کی وضاحت نہیں کر سکتا",
        "cannot_explain_empty_desc": "براہ کرم پہلے ایڈیٹر میں کچھ کوڈ درج کریں۔",
        "ai_explanation_failed_title": "اے آئی کی وضاحت ناکام",
        "ai_explanation_failed_desc": "وضاحت پیدا کرنے میں ایک خرابی تھی۔",
        "save_feature_soon_title": "فیچر جلد آرہا ہے!",
        "save_feature_soon_desc": "آپ کے کوڈ کے ٹکڑوں کو محفوظ کرنا مستقبل کی تازہ کاری میں دستیاب ہوگا۔",
        "code_copied_title": "کلپ بورڈ پر کاپی کیا گیا",
        "code_copied_desc": "کوڈ آپ کے کلپ بورڈ پر کاپی کر دیا گیا ہے۔",
        "save_snippet": "اسنیپٹ محفوظ کریں",
        "explain_code": "کوڈ کی وضاحت کریں",
        "copy_code": "کاپی",
        "reset_code": "ری سیٹ",
        "ai_explaining": "وضاحت کی جا رہی ہے...",
        "my_snippets": "میرے اسنیپٹس",
        "snippet_saved": "اسنیپٹ محفوظ ہو گیا",
        "snippet_saved_desc": "'{snippetTitle}' کو آپ کے اسنیپٹس میں شامل کر دیا گیا ہے۔",
        "load_snippet_desc": "اسنیپٹ ایڈیٹر میں تیار ہے۔",
        "snippet_deleted": "اسنیپٹ حذف کر دیا گیا",
        "snippet_deleted_desc": "'{snippetTitle}' کو ہٹا دیا گیا ہے۔",
        "review_saved_code": "اپنے محفوظ کردہ کوڈ کا جائزہ لیں، ترمیم کریں یا حذف کریں۔",
        "no_saved_snippets": "آپ کے پاس کوئی محفوظ کردہ اسنیپٹ نہیں ہے۔ اپنے کام کو رکھنے کے لیے ایڈیٹر میں 'اسنیپٹ محفوظ کریں' بٹن کا استعمال کریں۔",
        "are_you_sure_delete_snippet": "کیا آپ بالکل یقینی ہیں؟",
        "delete_snippet_confirm": "یہ کارروائی اسنیپٹ '{snippetTitle}' کو مستقل طور پر حذف کر دے گی۔ اس کارروائی کو واپس نہیں کیا جا سکتا۔",
        "edit": "ترمیم کریں",
        "delete": "حذف کریں",
        "practice_topics_tab": "مشق کے موضوعات",
        "untitled_snippet": "بلا عنوان اسنیپٹ",
        "saved_on_date": "{date} کو محفوظ کیا گیا",
        "loaded": "لوڈ ہو گیا",
        "snippet_updated": "اسنیپٹ اپ ڈیٹ ہو گیا",
        "snippet_updated_desc": "'{snippetTitle}' کو اپ ڈیٹ کر دیا گیا ہے۔",
        "edit_snippet_details": "تفصیلات میں ترمیم کریں",
        "update_snippet": "اسنیپٹ اپ ڈیٹ کریں",
        "edit_snippet_title": "اسنیپٹ کی تفصیلات میں ترمیم کریں",
        "edit_snippet_desc": "اپنے اسنیپٹ کے لیے عنوان اور تفصیل اپ ڈیٹ کریں۔",
        "title": "عنوان",
        "description": "تفصیل",
        "chat_renamed": "چیٹ کا نام تبدیل کر دیا گیا",
        "chat_renamed_desc": "گفتگو کا عنوان اپ ڈیٹ کر دیا گیا ہے۔",
        "chat_deleted": "چیٹ حذف کر دی گئی",
        "chat_deleted_desc": "گفتگو کو آپ کی تاریخ سے ہٹا دیا گیا ہے۔",
        // challenges/page.tsx
        "challenge_yourself": "کوڈنگ کے مسائل سے خود کو چیلنج کریں اور اپنی پروگرامنگ کی مہارت کو بہتر بنائیں۔",
        "all_challenges": "تمام چیلنجز",
        "daily_challenge_tab": "روزانہ چیلنج",
        "my_submissions": "میری گذارشات",
        "language": "زبان",
        "no_challenges_for_language": "منتخب زبان کے لیے کوئی چیلنج دستیاب نہیں ہے۔ تمام چیلنجز دیکھنے کے لیے \"مجموعی ڈیش بورڈ\" منتخب کرنے کی کوشش کریں۔",
        "daily_challenge_title": "آج کا روزانہ چیلنج",
        "daily_challenge_desc": "ہر روز ایک نیا چیلنج پیش کیا جاتا ہے۔ اسے آزمائیں!",
        "weekly_challenge_title": "اس ہفتے کا چیلنج",
        "weekly_challenge_desc": "اس ہفتے آپ کے لیے حل کرنے کے لیے ایک مشکل چیلنج۔ گڈ لک!",
        "weekly": "ہفتہ وار",
        "start_challenge": "چیلنج شروع کریں",
        "daily_challenge_loading": "آج کا چیلنج لوڈ ہو رہا ہے...",
        "my_submissions_desc": "آپ کی ماضی کی چیلنج گذارشات کی تاریخ۔",
        "challenge_title": "چیلنج",
        "status": "حیثیت",
        "date": "تاریخ",
        // ai-assistant/page.tsx
        "ai_assistant_page_title": "اے آئی اسسٹنٹ",
        "ask_coding_questions": "اپنے کوڈنگ کے سوالات پوچھیں اور فوری مدد حاصل کریں۔",
        "chat": "چیٹ",
        "type_your_question": "اپنا سوال ٹائپ کریں...",
        "send": "بھیجیں",
        "ai_greeting": "ہیلو! میں آپ کا اے آئی پروگرامنگ اسسٹنٹ ہوں۔ میں آج آپ کی کس طرح مدد کر سکتا ہوں؟",
        "ai_greeting_context": "ہیلو! میں آپ کا اے آئی پروگرامنگ اسسٹنٹ ہوں۔ میں دیکھ رہا ہوں کہ آپ {language} پر کام کر رہے ہیں۔ میں آج آپ کی کس طرح مدد کر سکتا ہوں؟",
        "ai_mock_response": "یہ ایک بہت اچھا سوال ہے! مجھے آپ کی مدد کرنے دیں۔",
        "quick_questions": "فوری سوالات",
        "chat_history": "چیٹ کی تاریخ",
        "new_chat": "نئی چیٹ",
        "rename_chat": "چیٹ کا نام تبدیل کریں",
        "rename_chat_desc": "اس گفتگو کے لئے ایک نیا نام درج کریں۔",
        "delete_chat": "چیٹ حذف کریں",
        "are_you_sure": "کیا آپ بالکل یقینی ہیں؟",
        "delete_chat_confirm": "یہ چیٹ '{chatTitle}' کو مستقل طور پر حذف کر دے گا۔ اس کارروائی کو واپس نہیں کیا جا سکتا۔",
        "save": "محفوظ کریں",
        "cancel": "منسوخ کریں",
        "start_new_conversation": "ایک نئی گفتگو شروع کریں",
        "empty_chat_placeholder_title": "آپ کا اے آئی اسسٹنٹ",
        "empty_chat_placeholder_desc": "نیچے ٹائپ کرکے ایک نئی گفتگو شروع کریں، یا تاریخ سے پچھلی گفتگو منتخب کریں۔",
        // community/page.tsx
        "community_hub": "کمیونٹی ہب",
        "ask_share_connect": "سوالات پوچھیں، علم کا اشتراک کریں، اور دوسرے سیکھنے والوں سے جڑیں۔",
        "start_new_discussion": "نئی بحث شروع کریں",
        "search_discussions": "بحثیں تلاش کریں...",
        "view_discussion": "بحث دیکھیں",
        "trending_topics": "ٹرینڈنگ موضوعات",
        "community_stats": "کمیونٹی کے اعداد و شمار",
        "total_members": "کل اراکین",
        "active_discussions": "فعال بحثیں",
        "featured_members": "نمایاں اراکین",
        // New keys for context-aware dashboard
        "learning_context": "سیکھنے کا سیاق و سباق",
        "overall_dashboard": "مجموعی ڈیش بورڈ",
        "dashboard_for_language": "{language} کے لیے ڈیش بورڈ",
        "language_topics_completed": "{language} موضوعات مکمل",
        "language_challenges_solved": "{language} چیلنجز حل ہوئے",
        "language_progress": "{language} پیش رفت",
        "continue_learning_language": "{language} سیکھنا جاری رکھیں",
        // problem-solving/page.tsx
        "problem_solving_title": "مسئلہ حل کرنے کے اوزار",
        "problem_solving_desc": "اے آئی کے ساتھ مسائل کو توڑیں اور کوڈ ڈیبگ کریں۔",
        "problem_decomposer": "مسئلہ ڈی کمپوزر",
        "code_explainer": "کوڈ کی وضاحت کرنے والا",
        "code_debugger": "کوڈ ڈیبگر",
        "problem_statement": "مسئلہ کا بیان",
        "describe_the_problem": "اس مسئلے کی وضاحت کریں جسے آپ حل کرنا چاہتے ہیں۔",
        "enter_problem_statement": "ایک مسئلہ کا بیان درج کریں...",
        "decompose_problem": "مسئلہ کو ڈی کمپوز کریں",
        "decomposing": "ڈی کمپوز ہو رہا ہے...",
        "ai_breakdown": "اے آئی بریک ڈاؤن",
        "ai_generated_plan": "آپ کے مسئلے سے نمٹنے کے لئے یہاں اے آئی سے تیار کردہ منصوبہ ہے۔",
        "inputs": "ان پٹس",
        "outputs": "آؤٹ پٹس",
        "constraints": "رکاوٹیں اور ایج کیسز",
        "step_by_step_plan": "مرحلہ وار منصوبہ",
        "suggested_data_structures": "تجویز کردہ ڈیٹا ڈھانچے",
        "get_started_by_entering_problem": "اوپر ایک مسئلہ کا بیان درج کرکے شروع کریں اور اے آئی کو اسے توڑنے دیں۔",
        "error_examples": "خرابی کی مثالیں",
        "get_ai_suggestion": "اے آئی سے مشورہ لیں",
        "debug_with_ai": "اے آئی کے ساتھ ڈیبگ کریں",
        "ai_suggesting": "مشورہ حاصل کیا جا رہا ہے...",
        "ai_suggestion": "اے آئی کا مشورہ",
        "ai_suggestion_placeholder": "اپنے کوڈ کا تجزیہ اور تجاویز حاصل کرنے کے لیے 'اے آئی سے مشورہ لیں' بٹن پر کلک کریں۔",
        "debugger_placeholder": "اپنا کوڈ چلائیں، یا ایک مثال بنائیں۔ پھر کوڈ کا تجزیہ، کسی بھی غلطی کی وضاحت، اور ایک تجویز کردہ حل حاصل کرنے کے لیے 'اے آئی کے ساتھ ڈیبگ کریں' پر کلک کریں۔",
        "click_to_generate_example": "ایک بے ترتیب {difficulty} مثال بنانے کے لیے کلک کریں۔",
        "generate_new_error_example_from_card": "ایک مشکل کارڈ پر کلک کرکے ایک نئی بے ترتیب خرابی کے ساتھ کوڈ کی مثال بنائیں۔",
        "difficulty": "مشکل",
        "generate_example": "مثال بنائیں",
        "debugging_sandbox": "ڈیبگنگ سینڈ باکس",
        "select_language_for_example_title": "زبان منتخب کریں",
        "select_language_for_example_desc": "مثال بنانے کے لیے براہ کرم سائڈبار سے ایک مخصوص پروگرامنگ زبان منتخب کریں۔",
        // projects/page.tsx
        "apply_your_skills": "حقیقی دنیا کے منصوبے بنا کر اپنی صلاحیتوں کا اطلاق کریں۔",
        "all_projects": "تمام پروجیکٹس",
        "web": "ویب",
        "data_science": "ڈیٹا سائنس",
        "games": "گیمز",
        "start_project": "پروجیکٹ شروع کریں",
        "no_projects_in_category": "اس زمرے میں ابھی تک کوئی پروجیکٹ نہیں ملا۔",
        // progress/page.tsx
        "progress_tracker_title": "پیش رفت ٹریکر",
        "progress_tracker_desc": "اپنے سیکھنے کے سفر اور کامیابیوں کی نگرانی کریں۔",
        "total_xp": "کل ایکس پی",
        "language_progress_table": "زبان کی مخصوص پیش رفت",
        "your_progress_in_each_language": "آپ کی ہر زبان میں پیش رفت جسے آپ نے شروع کیا ہے۔",
        "activity_feed": "سرگرمی فیڈ",
        "your_recent_activities": "آپ کی حالیہ سرگرمیوں کا ایک لاگ۔",
        "completed_lesson": "سبق مکمل ہوا",
        "solved_challenge": "چیلنج حل ہو گیا",
        "started_project": "پروجیکٹ شروع ہوا",
        // tasks/page.tsx
        "tasks_title": "میرے ٹاسک",
        "tasks_description": "ذاتی ٹاسک بورڈ کے ساتھ اپنی تعلیم کو منظم کریں۔",
        "add_new_task": "نیا ٹاسک شامل کریں",
        "todo": "کرنا ہے",
        "in_progress": "جاری ہے",
        "done": "مکمل",
        "edit_task": "ٹاسک میں ترمیم کریں",
        "delete_task": "ٹاسک حذف کریں",
        "save_changes": "تبدیلیاں محفوظ کریں",
        "delete_task_confirm": "یہ عمل ٹاسک '{taskTitle}' کو مستقل طور پر حذف کر دے گا۔ اس عمل کو واپس نہیں لیا جا سکتا۔",
        "add_task": "ٹاسک شامل کریں",
        "task_added": "ٹاسک شامل کر دیا گیا",
        "task_updated": "ٹاسک اپ ڈیٹ ہو گیا",
        "add_manually": "دستی طور پر شامل کریں",
        "generate_with_ai": "اے آئی سے بنائیں",
        "learning_topic": "سیکھنے کا موضوع",
        "ai_task_desc": "ایک موضوع درج کریں اور اے آئی آپ کے لئے ایک سیکھنے کا منصوبہ بنائے گا۔",
        "add_task_desc": "اپنے بورڈ میں دستی طور پر ایک نیا ٹاسک شامل کریں یا اے آئی کو ایک موضوع کی بنیاد پر بنانے دیں۔",
        "generating": "بنا رہا ہے...",
        "generate_tasks": "ٹاسک بنائیں",
        "lesson_not_found_title": "سبق نہیں ملا",
        "back_to_curriculum": "نصاب پر واپس جائیں",
        "lesson_not_found_desc": "آپ جس سبق کی تلاش میں ہیں وہ موجود نہیں ہے یا ابھی تک نہیں بنایا گیا ہے۔",
        "from_topic": "موضوع سے",
        "lesson_content_coming_soon": "اس سبق کے لیے مواد جلد آرہا ہے!",
        "try_it_yourself": "خود کوشش کریں",
        "try_it_yourself_desc": "اس سبق سے کوڈ چلائیں اور ترمیم کریں۔",
        "code_explanation_placeholder": "اس ٹکڑے کا اے آئی سے چلنے والا بریک ڈاؤن حاصل کرنے کے لیے 'کوڈ کی وضاحت کریں' پر کلک کریں۔",
        "no_submissions_for_language": "منتخب زبان کے لیے کوئی گذارشات نہیں ملیں۔",
        // challenges/[challengeId]/page.tsx
        "solve_challenge": "چیلنج کو حل کریں۔",
        "back_to_challenges": "چیلنجز پر واپس",
        "your_solution": "آپ کا حل",
        "submit": "جمع کرائیں",
        "submitting": "جمع کرایا جا رہا ہے...",
        "run_code": "کوڈ چلائیں",
        "debug_code": "اے آئی کے ساتھ ڈیبگ کریں",
        "submission_accepted": "جمع کرانا قبول کر لیا گیا!",
        "submission_failed": "جمع کرانا ناکام",
        "times_up_title": "وقت ختم!",
        "times_up_desc": "اس چیلنج کی وقت کی حد ختم ہو گئی ہے۔",
        "time_left": "باقی وقت: {time}"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/context/language-provider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "LanguageProvider": (()=>LanguageProvider),
    "useLanguage": (()=>useLanguage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/translations.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function LanguageProvider({ children }) {
    _s();
    const [language, setLanguageState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('en');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageProvider.useEffect": ()=>{
            const storedLanguage = localStorage.getItem('language');
            if (storedLanguage && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translations"][storedLanguage]) {
                setLanguageState(storedLanguage);
            }
        }
    }["LanguageProvider.useEffect"], []);
    const setLanguage = (lang)=>{
        localStorage.setItem('language', lang);
        setLanguageState(lang);
    };
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LanguageProvider.useCallback[t]": (key, replacements = {})=>{
            // Fallback to English if a translation is missing in the current language
            let translation = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translations"][language]?.[key] || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translations"]['en'][key] || key;
            Object.keys(replacements).forEach({
                "LanguageProvider.useCallback[t]": (rKey)=>{
                    const replacement = replacements[rKey];
                    // Use a regex with the 'g' flag to replace all occurrences
                    translation = translation.replace(new RegExp(`\\{${rKey}\\}`, 'g'), String(replacement));
                }
            }["LanguageProvider.useCallback[t]"]);
            return translation;
        }
    }["LanguageProvider.useCallback[t]"], [
        language
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            language,
            setLanguage,
            t
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/language-provider.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(LanguageProvider, "GWSGoAuNIOIhjru4aIKuyuWADG4=");
_c = LanguageProvider;
function useLanguage() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
_s1(useLanguage, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "LanguageProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/context/programming-language-provider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ProgrammingLanguageProvider": (()=>ProgrammingLanguageProvider),
    "useProgrammingLanguage": (()=>useProgrammingLanguage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const ProgrammingLanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function ProgrammingLanguageProvider({ children }) {
    _s();
    const [selectedLanguage, setSelectedLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProgrammingLanguageProvider.useMemo[value]": ()=>({
                selectedLanguage,
                setSelectedLanguage
            })
    }["ProgrammingLanguageProvider.useMemo[value]"], [
        selectedLanguage
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgrammingLanguageContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/programming-language-provider.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(ProgrammingLanguageProvider, "CDwI8Hr9cQ7n11dABr8H24bLpk0=");
_c = ProgrammingLanguageProvider;
function useProgrammingLanguage() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ProgrammingLanguageContext);
    if (!context) {
        throw new Error('useProgrammingLanguage must be used within a ProgrammingLanguageProvider');
    }
    return context;
}
_s1(useProgrammingLanguage, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "ProgrammingLanguageProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/services/data:efa232 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"0001cd73d14dadd1754434a98d572a0a4ca7da57a9":"getLanguagesSummary"},"src/services/languageService.ts",""] */ __turbopack_context__.s({
    "getLanguagesSummary": (()=>getLanguagesSummary)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getLanguagesSummary = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("0001cd73d14dadd1754434a98d572a0a4ca7da57a9", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getLanguagesSummary"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbGFuZ3VhZ2VTZXJ2aWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuJ3VzZSBzZXJ2ZXInO1xuXG5pbXBvcnQgeyBcbiAgICBsYW5ndWFnZXNTdW1tYXJ5RGF0YSwgXG4gICAgbGFuZ3VhZ2VzQ3VycmljdWx1bURhdGEsIFxuICAgIHF1aWNrUXVlc3Rpb25zRGF0YSxcbiAgICBjaGFsbGVuZ2VzRGF0YSxcbiAgICBzdWJtaXNzaW9uc0RhdGEsXG4gICAgdHlwZSBMYW5ndWFnZVN1bW1hcnksIFxuICAgIHR5cGUgTGFuZ3VhZ2VDdXJyaWN1bHVtLFxuICAgIHR5cGUgVG9waWMsXG4gICAgdHlwZSBMZXNzb24sXG4gICAgdHlwZSBDaGFsbGVuZ2UsXG4gICAgdHlwZSBTdWJtaXNzaW9uXG59IGZyb20gXCJAL2xpYi9tb2NrLWRhdGFcIjtcblxuLyoqXG4gKiBJbi1tZW1vcnkgZGF0YSBzdG9yZSBmb3IgdGhlIGFwcGxpY2F0aW9uLlxuICogSW4gYSByZWFsLXdvcmxkIGFwcGxpY2F0aW9uLCB0aGVzZSBmdW5jdGlvbnMgd291bGQgaW50ZXJhY3Qgd2l0aCBhIGRhdGFiYXNlLlxuICovXG5cbi8vID09PT09PT09PT0gTGFuZ3VhZ2UgU3VtbWFyeSBTZXJ2aWNlcyA9PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMYW5ndWFnZXNTdW1tYXJ5KCk6IFByb21pc2U8TGFuZ3VhZ2VTdW1tYXJ5W10+IHtcbiAgICAvLyBTaW11bGF0ZSBhc3luYyBkYXRhYmFzZSBjYWxsXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShsYW5ndWFnZXNTdW1tYXJ5RGF0YSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRMYW5ndWFnZVN1bW1hcnkoc3VtbWFyeTogTGFuZ3VhZ2VTdW1tYXJ5KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGFuZ3VhZ2VzU3VtbWFyeURhdGEucHVzaChzdW1tYXJ5KTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVMYW5ndWFnZVN1bW1hcnkobGFuZ0lkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBpbmRleCA9IGxhbmd1YWdlc1N1bW1hcnlEYXRhLmZpbmRJbmRleChsID0+IGwuaWQgPT09IGxhbmdJZCk7XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgbGFuZ3VhZ2VzU3VtbWFyeURhdGEuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xufVxuXG4vLyA9PT09PT09PT09IExhbmd1YWdlIEN1cnJpY3VsdW0gU2VydmljZXMgPT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TGFuZ3VhZ2VDdXJyaWN1bHVtKGxhbmdJZDogc3RyaW5nKTogUHJvbWlzZTxMYW5ndWFnZUN1cnJpY3VsdW0gfCBudWxsPiB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShsYW5ndWFnZXNDdXJyaWN1bHVtRGF0YVtsYW5nSWRdIHx8IG51bGwpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkTGFuZ3VhZ2VDdXJyaWN1bHVtKGxhbmdJZDogc3RyaW5nLCBjdXJyaWN1bHVtOiBMYW5ndWFnZUN1cnJpY3VsdW0pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsYW5ndWFnZXNDdXJyaWN1bHVtRGF0YVtsYW5nSWRdID0gY3VycmljdWx1bTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVMYW5ndWFnZUN1cnJpY3VsdW0obGFuZ0lkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBkZWxldGUgbGFuZ3VhZ2VzQ3VycmljdWx1bURhdGFbbGFuZ0lkXTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG59XG5cbi8vID09PT09PT09PT0gUXVpY2sgUXVlc3Rpb24gU2VydmljZXMgPT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UXVpY2tRdWVzdGlvbnMobGFuZ0lkOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZ1tdIHwgdW5kZWZpbmVkPiB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShxdWlja1F1ZXN0aW9uc0RhdGFbbGFuZ0lkXSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRRdWlja1F1ZXN0aW9ucyhsYW5nSWQ6IHN0cmluZywgcXVlc3Rpb25zOiBzdHJpbmdbXSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHF1aWNrUXVlc3Rpb25zRGF0YVtsYW5nSWRdID0gcXVlc3Rpb25zO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbn1cblxuLy8gPT09PT09PT09PSBUb3BpYyBTZXJ2aWNlcyA9PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRUb3BpYyhsYW5nSWQ6IHN0cmluZywgdG9waWM6IE9taXQ8VG9waWMsICdpZCcgfCAnbGVzc29ucyc+KTogUHJvbWlzZTxUb3BpYyB8IG51bGw+IHtcbiAgICBjb25zdCBjdXJyaWN1bHVtID0gbGFuZ3VhZ2VzQ3VycmljdWx1bURhdGFbbGFuZ0lkXTtcbiAgICBpZiAoY3VycmljdWx1bSkge1xuICAgICAgICBjb25zdCBuZXdUb3BpYzogVG9waWMgPSB7XG4gICAgICAgICAgICAuLi50b3BpYyxcbiAgICAgICAgICAgIGlkOiBgdC0ke2xhbmdJZH0tJHtEYXRlLm5vdygpfWAsXG4gICAgICAgICAgICBsZXNzb25zOiBbXSxcbiAgICAgICAgfTtcbiAgICAgICAgY3VycmljdWx1bS50b3BpY3MucHVzaChuZXdUb3BpYyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBzdW1tYXJ5ID0gbGFuZ3VhZ2VzU3VtbWFyeURhdGEuZmluZChzID0+IHMuaWQgPT09IGxhbmdJZCk7XG4gICAgICAgIGlmIChzdW1tYXJ5KSB7XG4gICAgICAgICAgICBzdW1tYXJ5LnRvcGljcyA9IGN1cnJpY3VsdW0udG9waWNzLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3VG9waWMpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVG9waWMobGFuZ0lkOiBzdHJpbmcsIHRvcGljSWQ6IHN0cmluZywgdG9waWNEYXRhOiBQYXJ0aWFsPFRvcGljPik6IFByb21pc2U8VG9waWMgfCBudWxsPiB7XG4gICAgY29uc3QgdG9waWMgPSBsYW5ndWFnZXNDdXJyaWN1bHVtRGF0YVtsYW5nSWRdPy50b3BpY3MuZmluZCh0ID0+IHQuaWQgPT09IHRvcGljSWQpO1xuICAgIGlmICh0b3BpYykge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRvcGljLCB0b3BpY0RhdGEpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRvcGljKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVRvcGljKGxhbmdJZDogc3RyaW5nLCB0b3BpY0lkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBjdXJyaWN1bHVtID0gbGFuZ3VhZ2VzQ3VycmljdWx1bURhdGFbbGFuZ0lkXTtcbiAgICBpZiAoY3VycmljdWx1bSkge1xuICAgICAgICBjb25zdCB0b3BpY0luZGV4ID0gY3VycmljdWx1bS50b3BpY3MuZmluZEluZGV4KHQgPT4gdC5pZCA9PT0gdG9waWNJZCk7XG4gICAgICAgIGlmICh0b3BpY0luZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIGN1cnJpY3VsdW0udG9waWNzLnNwbGljZSh0b3BpY0luZGV4LCAxKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3Qgc3VtbWFyeSA9IGxhbmd1YWdlc1N1bW1hcnlEYXRhLmZpbmQocyA9PiBzLmlkID09PSBsYW5nSWQpO1xuICAgICAgICAgICAgaWYgKHN1bW1hcnkpIHtcbiAgICAgICAgICAgICAgICBzdW1tYXJ5LnRvcGljcyA9IGN1cnJpY3VsdW0udG9waWNzLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG59XG5cbi8vID09PT09PT09PT0gTGVzc29uIFNlcnZpY2VzID09PT09PT09PT1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZExlc3NvbihsYW5nSWQ6IHN0cmluZywgdG9waWNJZDogc3RyaW5nLCBsZXNzb25EYXRhOiBPbWl0PExlc3NvbiwgJ2lkJyB8ICdhdHRhY2htZW50cyc+KTogUHJvbWlzZTxMZXNzb24gfCBudWxsPiB7XG4gICAgY29uc3QgdG9waWMgPSBsYW5ndWFnZXNDdXJyaWN1bHVtRGF0YVtsYW5nSWRdPy50b3BpY3MuZmluZCh0ID0+IHQuaWQgPT09IHRvcGljSWQpO1xuICAgIGlmICh0b3BpYykge1xuICAgICAgICBjb25zdCBuZXdMZXNzb246IExlc3NvbiA9IHtcbiAgICAgICAgICAgIC4uLmxlc3NvbkRhdGEsXG4gICAgICAgICAgICBpZDogYGwtJHtsYW5nSWR9LSR7dG9waWNJZH0tJHtEYXRlLm5vdygpfWAsXG4gICAgICAgICAgICBhdHRhY2htZW50czogW10sXG4gICAgICAgIH07XG4gICAgICAgIHRvcGljLmxlc3NvbnMucHVzaChuZXdMZXNzb24pO1xuXG4gICAgICAgIGNvbnN0IHN1bW1hcnkgPSBsYW5ndWFnZXNTdW1tYXJ5RGF0YS5maW5kKHMgPT4gcy5pZCA9PT0gbGFuZ0lkKTtcbiAgICAgICAgaWYgKHN1bW1hcnkpIHtcbiAgICAgICAgICAgIHN1bW1hcnkubGVzc29ucyA9IChzdW1tYXJ5Lmxlc3NvbnMgfHwgMCkgKyAxO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXdMZXNzb24pO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlTGVzc29uKGxhbmdJZDogc3RyaW5nLCB0b3BpY0lkOiBzdHJpbmcsIGxlc3NvbklkOiBzdHJpbmcsIGxlc3NvbkRhdGE6IFBhcnRpYWw8TGVzc29uPik6IFByb21pc2U8TGVzc29uIHwgbnVsbD4ge1xuICAgIGNvbnN0IHRvcGljID0gbGFuZ3VhZ2VzQ3VycmljdWx1bURhdGFbbGFuZ0lkXT8udG9waWNzLmZpbmQodCA9PiB0LmlkID09PSB0b3BpY0lkKTtcbiAgICBpZiAodG9waWMpIHtcbiAgICAgICAgY29uc3QgbGVzc29uID0gdG9waWMubGVzc29ucy5maW5kKGwgPT4gbC5pZCA9PT0gbGVzc29uSWQpO1xuICAgICAgICBpZiAobGVzc29uKSB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGxlc3NvbiwgbGVzc29uRGF0YSk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGxlc3Nvbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUxlc3NvbihsYW5nSWQ6IHN0cmluZywgdG9waWNJZDogc3RyaW5nLCBsZXNzb25JZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgdG9waWMgPSBsYW5ndWFnZXNDdXJyaWN1bHVtRGF0YVtsYW5nSWRdPy50b3BpY3MuZmluZCh0ID0+IHQuaWQgPT09IHRvcGljSWQpO1xuICAgIGlmICh0b3BpYykge1xuICAgICAgICBjb25zdCBsZXNzb25JbmRleCA9IHRvcGljLmxlc3NvbnMuZmluZEluZGV4KGwgPT4gbC5pZCA9PT0gbGVzc29uSWQpO1xuICAgICAgICBpZiAobGVzc29uSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgdG9waWMubGVzc29ucy5zcGxpY2UobGVzc29uSW5kZXgsIDEpO1xuXG4gICAgICAgICAgICBjb25zdCBzdW1tYXJ5ID0gbGFuZ3VhZ2VzU3VtbWFyeURhdGEuZmluZChzID0+IHMuaWQgPT09IGxhbmdJZCk7XG4gICAgICAgICAgICBpZiAoc3VtbWFyeSkge1xuICAgICAgICAgICAgICAgIHN1bW1hcnkubGVzc29ucyA9IChzdW1tYXJ5Lmxlc3NvbnMgfHwgMCkgLSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbn1cblxuLy8gPT09PT09PT09PSBDaGFsbGVuZ2UgU2VydmljZXMgPT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2hhbGxlbmdlcygpOiBQcm9taXNlPENoYWxsZW5nZVtdPiB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjaGFsbGVuZ2VzRGF0YSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDaGFsbGVuZ2VCeUlkKGlkOiBudW1iZXIpOiBQcm9taXNlPENoYWxsZW5nZSB8IHVuZGVmaW5lZD4ge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2hhbGxlbmdlc0RhdGEuZmluZChjID0+IGMuaWQgPT09IGlkKSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRDaGFsbGVuZ2UoY2hhbGxlbmdlOiBPbWl0PENoYWxsZW5nZSwgJ2lkJz4pOiBQcm9taXNlPENoYWxsZW5nZT4ge1xuICAgIGNvbnN0IG5ld0NoYWxsZW5nZTogQ2hhbGxlbmdlID0ge1xuICAgICAgICAuLi5jaGFsbGVuZ2UsXG4gICAgICAgIGlkOiBjaGFsbGVuZ2VzRGF0YS5sZW5ndGggPiAwID8gTWF0aC5tYXgoLi4uY2hhbGxlbmdlc0RhdGEubWFwKGMgPT4gYy5pZCkpICsgMSA6IDEsXG4gICAgfTtcbiAgICBjaGFsbGVuZ2VzRGF0YS5wdXNoKG5ld0NoYWxsZW5nZSk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXdDaGFsbGVuZ2UpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ2hhbGxlbmdlKGlkOiBudW1iZXIsIGNoYWxsZW5nZURhdGE6IFBhcnRpYWw8T21pdDxDaGFsbGVuZ2UsICdpZCc+Pik6IFByb21pc2U8Q2hhbGxlbmdlIHwgbnVsbD4ge1xuICAgIGNvbnN0IGNoYWxsZW5nZSA9IGNoYWxsZW5nZXNEYXRhLmZpbmQoYyA9PiBjLmlkID09PSBpZCk7XG4gICAgaWYgKGNoYWxsZW5nZSkge1xuICAgICAgICBPYmplY3QuYXNzaWduKGNoYWxsZW5nZSwgY2hhbGxlbmdlRGF0YSk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2hhbGxlbmdlKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNoYWxsZW5nZShpZDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgaW5kZXggPSBjaGFsbGVuZ2VzRGF0YS5maW5kSW5kZXgoYyA9PiBjLmlkID09PSBpZCk7XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgY2hhbGxlbmdlc0RhdGEuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdWJtaXNzaW9ucygpOiBQcm9taXNlPFN1Ym1pc3Npb25bXT4ge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc3VibWlzc2lvbnNEYXRhKTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiNFNBd0JzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/user/sidebar-nav.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "UserSidebarNav": (()=>UserSidebarNav)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/separator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCode$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-code.js [app-client] (ecmascript) <export default as FileCode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$kanban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderKanban$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-kanban.js [app-client] (ecmascript) <export default as FolderKanban>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code.js [app-client] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-list.js [app-client] (ecmascript) <export default as ClipboardList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$language$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/language-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$programming$2d$language$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/programming-language-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$data$3a$efa232__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/services/data:efa232 [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
const recentBadges = [
    {
        name: "First Steps",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"],
        color: "bg-yellow-400"
    },
    {
        name: "JS Basics",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"],
        color: "bg-green-500"
    },
    {
        name: "Code Ninja",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"],
        color: "bg-blue-500"
    }
];
function UserSidebarNav() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$language$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const { isCollapsed } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"])();
    const { selectedLanguage, setSelectedLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$programming$2d$language$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProgrammingLanguage"])();
    const [availableLanguages, setAvailableLanguages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserSidebarNav.useEffect": ()=>{
            async function fetchLanguages() {
                const summary = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$data$3a$efa232__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getLanguagesSummary"])();
                setAvailableLanguages(summary);
            }
            fetchLanguages();
        }
    }["UserSidebarNav.useEffect"], []);
    const navItems = [
        {
            href: "/dashboard",
            label: t('dashboard'),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"]
        },
        {
            href: selectedLanguage === 'all' ? "/languages" : `/languages/${selectedLanguage}`,
            label: t('learn_guide'),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"]
        },
        {
            href: "/practice",
            label: t('practice_examples'),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCode$3e$__["FileCode"]
        },
        {
            href: "/challenges",
            label: t('challenges'),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"]
        },
        {
            href: "/problem-solving",
            label: t('problem_solving'),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"]
        },
        {
            href: "/projects",
            label: t('mini_projects'),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$kanban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderKanban$3e$__["FolderKanban"]
        },
        {
            href: "/tasks",
            label: t('tasks_title'),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"]
        },
        {
            href: "/ai-assistant",
            label: t('ai_assistant'),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"]
        },
        {
            href: "/progress",
            label: t('progress_tracker'),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"]
        }
    ];
    const languagesForSelect = [
        {
            id: 'all',
            name: t('overall_dashboard')
        },
        ...availableLanguages
    ];
    const isActive = (href)=>{
        if (href === "/dashboard" || href === "/practice" || href === "/ai-assistant") return pathname === href;
        if (href.startsWith('/languages') && pathname.startsWith('/languages')) return true;
        if (href === "#") return false;
        return pathname.startsWith(href);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full",
        children: [
            !isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider",
                        children: t('learning_context')
                    }, void 0, false, {
                        fileName: "[project]/src/components/user/sidebar-nav.tsx",
                        lineNumber: 82,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                        value: selectedLanguage,
                        onValueChange: (value)=>setSelectedLanguage(value),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                className: "w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                    placeholder: "Select context..."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/user/sidebar-nav.tsx",
                                    lineNumber: 85,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/user/sidebar-nav.tsx",
                                lineNumber: 84,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                children: languagesForSelect.map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: lang.id,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                lang.id === 'all' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                    className: "h-5 w-5 text-muted-foreground"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/user/sidebar-nav.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 35
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: lang.icon,
                                                    alt: lang.name,
                                                    width: 20,
                                                    height: 20,
                                                    "data-ai-hint": `${lang.name} logo`,
                                                    className: "rounded-sm"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/user/sidebar-nav.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 35
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: lang.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/user/sidebar-nav.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/user/sidebar-nav.tsx",
                                            lineNumber: 90,
                                            columnNumber: 29
                                        }, this)
                                    }, lang.id, false, {
                                        fileName: "[project]/src/components/user/sidebar-nav.tsx",
                                        lineNumber: 89,
                                        columnNumber: 25
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/user/sidebar-nav.tsx",
                                lineNumber: 87,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/user/sidebar-nav.tsx",
                        lineNumber: 83,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/user/sidebar-nav.tsx",
                lineNumber: 81,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
                className: "my-0"
            }, void 0, false, {
                fileName: "[project]/src/components/user/sidebar-nav.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarMenu"], {
                className: "p-2 flex-1",
                children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarMenuItem"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarMenuButton"], {
                            asChild: true,
                            isActive: isActive(item.href),
                            tooltip: {
                                children: item.label
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {}, void 0, false, {
                                        fileName: "[project]/src/components/user/sidebar-nav.tsx",
                                        lineNumber: 115,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "group-data-[collapsed=true]/sidebar:hidden",
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/user/sidebar-nav.tsx",
                                        lineNumber: 116,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/user/sidebar-nav.tsx",
                                lineNumber: 114,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/user/sidebar-nav.tsx",
                            lineNumber: 109,
                            columnNumber: 13
                        }, this)
                    }, item.label, false, {
                        fileName: "[project]/src/components/user/sidebar-nav.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/user/sidebar-nav.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
                className: "my-0"
            }, void 0, false, {
                fileName: "[project]/src/components/user/sidebar-nav.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 space-y-2 group-data-[collapsed=true]/sidebar:p-2 group-data-[collapsed=true]/sidebar:space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase group-data-[collapsed=true]/sidebar:hidden",
                        children: [
                            t('recent_badges'),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/user/sidebar-nav.tsx",
                                lineNumber: 127,
                                columnNumber: 33
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/user/sidebar-nav.tsx",
                        lineNumber: 126,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 group-data-[collapsed=false]/sidebar:justify-start group-data-[collapsed=true]/sidebar:justify-center",
                        children: recentBadges.map((badge)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                title: badge.name,
                                className: `h-8 w-8 rounded-full flex items-center justify-center text-white ${badge.color}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(badge.icon, {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/user/sidebar-nav.tsx",
                                    lineNumber: 132,
                                    columnNumber: 20
                                }, this)
                            }, badge.name, false, {
                                fileName: "[project]/src/components/user/sidebar-nav.tsx",
                                lineNumber: 131,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/user/sidebar-nav.tsx",
                        lineNumber: 129,
                        columnNumber: 10
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/user/sidebar-nav.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/user/sidebar-nav.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
_s(UserSidebarNav, "1zAWmwCmRFuhdhY8xxWdIfG6jqM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$language$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$programming$2d$language$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProgrammingLanguage"]
    ];
});
_c = UserSidebarNav;
var _c;
__turbopack_context__.k.register(_c, "UserSidebarNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "DropdownMenu": (()=>DropdownMenu),
    "DropdownMenuCheckboxItem": (()=>DropdownMenuCheckboxItem),
    "DropdownMenuContent": (()=>DropdownMenuContent),
    "DropdownMenuGroup": (()=>DropdownMenuGroup),
    "DropdownMenuItem": (()=>DropdownMenuItem),
    "DropdownMenuLabel": (()=>DropdownMenuLabel),
    "DropdownMenuPortal": (()=>DropdownMenuPortal),
    "DropdownMenuRadioGroup": (()=>DropdownMenuRadioGroup),
    "DropdownMenuRadioItem": (()=>DropdownMenuRadioItem),
    "DropdownMenuSeparator": (()=>DropdownMenuSeparator),
    "DropdownMenuShortcut": (()=>DropdownMenuShortcut),
    "DropdownMenuSub": (()=>DropdownMenuSub),
    "DropdownMenuSubContent": (()=>DropdownMenuSubContent),
    "DropdownMenuSubTrigger": (()=>DropdownMenuSubTrigger),
    "DropdownMenuTrigger": (()=>DropdownMenuTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const DropdownMenu = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const DropdownMenuTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const DropdownMenuGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"];
const DropdownMenuPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"];
const DropdownMenuSub = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sub"];
const DropdownMenuRadioGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroup"];
const DropdownMenuSubTrigger = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, inset, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubTrigger"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                className: "ml-auto"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                lineNumber: 37,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 27,
        columnNumber: 3
    }, this));
_c1 = DropdownMenuSubTrigger;
DropdownMenuSubTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubTrigger"].displayName;
const DropdownMenuSubContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubContent"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 47,
        columnNumber: 3
    }, this));
_c3 = DropdownMenuSubContent;
DropdownMenuSubContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubContent"].displayName;
const DropdownMenuContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            ref: ref,
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dropdown-menu.tsx",
            lineNumber: 64,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, this));
_c5 = DropdownMenuContent;
DropdownMenuContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const DropdownMenuItem = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c6 = ({ className, inset, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 83,
        columnNumber: 3
    }, this));
_c7 = DropdownMenuItem;
DropdownMenuItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"].displayName;
const DropdownMenuCheckboxItem = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c8 = ({ className, children, checked, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckboxItem"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                    lineNumber: 109,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                lineNumber: 108,
                columnNumber: 5
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 99,
        columnNumber: 3
    }, this));
_c9 = DropdownMenuCheckboxItem;
DropdownMenuCheckboxItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckboxItem"].displayName;
const DropdownMenuRadioItem = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c10 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioItem"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
                        className: "h-2 w-2 fill-current"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                    lineNumber: 132,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                lineNumber: 131,
                columnNumber: 5
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 123,
        columnNumber: 3
    }, this));
_c11 = DropdownMenuRadioItem;
DropdownMenuRadioItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioItem"].displayName;
const DropdownMenuLabel = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c12 = ({ className, inset, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 147,
        columnNumber: 3
    }, this));
_c13 = DropdownMenuLabel;
DropdownMenuLabel.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"].displayName;
const DropdownMenuSeparator = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c14 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 163,
        columnNumber: 3
    }, this));
_c15 = DropdownMenuSeparator;
DropdownMenuSeparator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"].displayName;
const DropdownMenuShortcut = ({ className, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("ml-auto text-xs tracking-widest opacity-60", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 176,
        columnNumber: 5
    }, this);
};
_c16 = DropdownMenuShortcut;
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16;
__turbopack_context__.k.register(_c, "DropdownMenuSubTrigger$React.forwardRef");
__turbopack_context__.k.register(_c1, "DropdownMenuSubTrigger");
__turbopack_context__.k.register(_c2, "DropdownMenuSubContent$React.forwardRef");
__turbopack_context__.k.register(_c3, "DropdownMenuSubContent");
__turbopack_context__.k.register(_c4, "DropdownMenuContent$React.forwardRef");
__turbopack_context__.k.register(_c5, "DropdownMenuContent");
__turbopack_context__.k.register(_c6, "DropdownMenuItem$React.forwardRef");
__turbopack_context__.k.register(_c7, "DropdownMenuItem");
__turbopack_context__.k.register(_c8, "DropdownMenuCheckboxItem$React.forwardRef");
__turbopack_context__.k.register(_c9, "DropdownMenuCheckboxItem");
__turbopack_context__.k.register(_c10, "DropdownMenuRadioItem$React.forwardRef");
__turbopack_context__.k.register(_c11, "DropdownMenuRadioItem");
__turbopack_context__.k.register(_c12, "DropdownMenuLabel$React.forwardRef");
__turbopack_context__.k.register(_c13, "DropdownMenuLabel");
__turbopack_context__.k.register(_c14, "DropdownMenuSeparator$React.forwardRef");
__turbopack_context__.k.register(_c15, "DropdownMenuSeparator");
__turbopack_context__.k.register(_c16, "DropdownMenuShortcut");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/user/theme-toggle.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ThemeToggle": (()=>ThemeToggle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ThemeToggle() {
    _s();
    const { setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "ghost",
                    size: "icon",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                            className: "h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                        }, void 0, false, {
                            fileName: "[project]/src/components/user/theme-toggle.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                            className: "absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                        }, void 0, false, {
                            fileName: "[project]/src/components/user/theme-toggle.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "sr-only",
                            children: "Toggle theme"
                        }, void 0, false, {
                            fileName: "[project]/src/components/user/theme-toggle.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/user/theme-toggle.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/user/theme-toggle.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                align: "end",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                        onClick: ()=>setTheme("light"),
                        children: "Light"
                    }, void 0, false, {
                        fileName: "[project]/src/components/user/theme-toggle.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                        onClick: ()=>setTheme("dark"),
                        children: "Dark"
                    }, void 0, false, {
                        fileName: "[project]/src/components/user/theme-toggle.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                        onClick: ()=>setTheme("system"),
                        children: "System"
                    }, void 0, false, {
                        fileName: "[project]/src/components/user/theme-toggle.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/user/theme-toggle.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/user/theme-toggle.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(ThemeToggle, "a3u8LKbpX4CXbd+e8SJ1SuQ9KPw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/user/header.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "UserHeader": (()=>UserHeader)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.js [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$user$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/user/theme-toggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$language$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/language-provider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function UserHeader() {
    _s();
    const { language, setLanguage, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$language$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-4 h-16 shrink-0 border-b bg-background px-4 sm:px-6 lg:px-8 md:border-0 md:px-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:flex items-center gap-2 flex-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                    value: language,
                    onValueChange: (value)=>setLanguage(value),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                            className: "w-auto sm:w-[180px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                placeholder: "Language"
                            }, void 0, false, {
                                fileName: "[project]/src/components/user/header.tsx",
                                lineNumber: 20,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/user/header.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                    value: "en",
                                    children: "English"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/user/header.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                    value: "bn",
                                    children: "বাংলা (Bengali)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/user/header.tsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                    value: "hi",
                                    children: "हिन्दी (Hindi)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/user/header.tsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                    value: "ur",
                                    children: "اردو (Urdu)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/user/header.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/user/header.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/user/header.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/user/header.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                                className: "h-4 w-4 text-orange-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/user/header.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline",
                                children: [
                                    "14 ",
                                    t('day_streak_header')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/user/header.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/user/header.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$user$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                        fileName: "[project]/src/components/user/header.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/user/header.tsx",
                                        lineNumber: 38,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sr-only",
                                        children: "Notifications"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/user/header.tsx",
                                        lineNumber: 39,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/user/header.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/user/header.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/user/header.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                src: "https://placehold.co/40x40.png",
                                alt: "Git Frp",
                                "data-ai-hint": "profile avatar"
                            }, void 0, false, {
                                fileName: "[project]/src/components/user/header.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                children: "GF"
                            }, void 0, false, {
                                fileName: "[project]/src/components/user/header.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/user/header.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/user/header.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/user/header.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(UserHeader, "z0NntALXVIUNQffs7k/d/KRa4Vk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$language$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = UserHeader;
var _c;
__turbopack_context__.k.register(_c, "UserHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_5eb75ccf._.js.map