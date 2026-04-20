import { source } from "@/lib/source";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DocsSidebar } from "@/components/docs/sidebar";

export default function Layout({ children }: LayoutProps<"/docs">) {
  return (
    <div className="container flex flex-1 flex-col px-0">
      <SidebarProvider
        className="min-h-min flex-1 items-start px-0 [--top-spacing:0] lg:grid lg:grid-cols-[var(--sidebar-width)_minmax(0,1fr)] lg:[--top-spacing:--spacing(4)]"
        style={
          {
            "--sidebar-width": "calc(var(--spacing) * 68)",
          } as React.CSSProperties
        }
      >
        <DocsSidebar tree={source.pageTree} />
        {children}
      </SidebarProvider>
    </div>
  );
}
