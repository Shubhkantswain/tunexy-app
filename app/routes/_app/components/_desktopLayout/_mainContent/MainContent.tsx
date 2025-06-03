import { Outlet } from '@remix-run/react';
import React, { useEffect, useRef, useState } from 'react';
import LeftSidebar from './_leftSidebar/LeftSidebar';

function MainContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [panelSize, setPanelSize] = useState(22); // Sidebar width in %

  const [isResizing, setIsResizing] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const newSize = ((e.clientX - rect.left) / rect.width) * 100;
      if (newSize > 10 && newSize < 40) {
        setPanelSize(newSize);
      }
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      document.body.style.userSelect = '';
      document.body.style.cursor = '';
    };

    if (isResizing) {
      document.body.style.userSelect = 'none';
      document.body.style.cursor = 'col-resize';
    }

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.style.userSelect = '';
      document.body.style.cursor = '';
    };
  }, [isResizing]);

  return (
    <div className="flex-1 pb-1 overflow-hidden hidden md:flex">
      <div ref={containerRef} className="flex w-full h-full px-1">
        {/* Left Sidebar */}
        <div style={{ width: `${panelSize}%` }}>
          <LeftSidebar panelSize={panelSize} />
        </div>

        {/* Resizer Handle */}
        <div
          onMouseDown={() => setIsResizing(true)}
          className="w-1 bg-transparent hover:bg-white cursor-col-resize transition-colors"
        />

        {/* Main Content */}
        <div
          style={{ width: `${100 - panelSize}%` }}
          className="h-full bg-[#121212] rounded-md custom-scrollbar overflow-y-auto"
        >
          <div className="p-4 sm:p-6 md:p-8 max-w-[90rem] mx-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
