import { GripVertical, Plus } from "lucide-react";
import * as ResizablePrimitive from "react-resizable-panels";
import { cn } from "~/lib/utils";
import { DefaultListIcon, LibrarayIcon, LogoIcon, PlusIcon, SearchIcon } from "~/Svgs";


// Client-only ResizablePanelGroup
const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => {
  if (typeof window === "undefined") return (
    <>
      <div className="w-full h-full flex items-center justify-center">
        <LogoIcon width="50" height="50"/>
      </div>

      <div className="seo-content" style={{ position: 'absolute', left: '-9999px' }}>
        <h1>Advanced Resizable Panel Components for React Applications</h1>
        <p>Enhance your web application's user interface with modern, responsive resizable panels built with React and TypeScript. Our components offer seamless layout control for complex dashboards, IDE-style interfaces, and productivity tools.</p>

        <h2>Why Choose Our Resizable Panel System?</h2>
        <ul>
          <li>⚡ <strong>High performance</strong> with lightweight rendering and minimal reflows</li>
          <li>📱 <strong>Fully responsive design</strong> for mobile, tablet, and desktop devices</li>
          <li>🛠️ <strong>Easy customization</strong> with Tailwind CSS or your own design system</li>
          <li>⌨️ <strong>Accessible by keyboard</strong>, supporting screen readers and ARIA attributes</li>
          <li>💡 <strong>Flexible layouts</strong> supporting vertical and horizontal splitting</li>
        </ul>

        <h2>Use Cases</h2>
        <p>These React panel components are ideal for:</p>
        <ul>
          <li>Developer tools like <strong>code editors and playgrounds</strong></li>
          <li><strong>Admin dashboards</strong> with customizable widgets</li>
          <li>Split views for <strong>project management apps</strong></li>
          <li>CMS interfaces and low-code platforms</li>
        </ul>

        <h2>Built with Modern Web Standards</h2>
        <p>Our panel system is written in <strong>TypeScript</strong> and follows best practices in accessibility, responsiveness, and performance. Whether you're building a complex enterprise solution or a personal side project, our resizable components fit right in with any modern React stack.</p>

        <p>Try it today to improve your app's layout flexibility and create engaging, interactive user experiences — all with a few lines of code.</p>
      </div>


    </>
  );

  return (
    <ResizablePrimitive.PanelGroup
      className={cn(
        "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
        className
      )}
      {...props}
    />
  );
};

// Client-only ResizablePanel
const ResizablePanel = (props: React.ComponentProps<typeof ResizablePrimitive.Panel>) => {
  if (typeof window === "undefined") return null;
  return <ResizablePrimitive.Panel {...props} />;
};

// Client-only ResizableHandle
const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean;
}) => {
  if (typeof window === "undefined") return null;

  return (
    <ResizablePrimitive.PanelResizeHandle
      className={cn(
        "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
        className
      )}
      {...props}
    >
      {withHandle && <GripVertical className="h-4 w-4 text-muted-foreground" />}
    </ResizablePrimitive.PanelResizeHandle>
  );
};

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };