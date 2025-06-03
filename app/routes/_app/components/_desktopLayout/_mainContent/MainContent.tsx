import { Outlet } from '@remix-run/react';
import React, { useState } from 'react';
import { ClientOnly } from '~/layout/ClientOnly';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '~/components/ui/resizable';
import LeftSidebar from './_leftSidebar/LeftSidebar';

function MainContent() {
  const [panelSize, setPanelSize] = useState(22);

  return (
    <div className="flex-1 pb-1 overflow-hidden hidden md:flex">
      <div className="flex w-full h-full px-1">
          <ResizablePanelGroup
            direction="horizontal"
            onLayout={(sizes) => setPanelSize(sizes[0])}
            className="flex w-full gap-0.5"
          >
            <LeftSidebar panelSize={panelSize} />
            <ResizableHandle withHandle className="bg-transparent hover:bg-white" />
            <ResizablePanel defaultSize={75}>
              <div className="h-full bg-[#121212] rounded-md custom-scrollbar overflow-y-auto">
                <div className="p-4 sm:p-6 md:p-8 max-w-[90rem] mx-auto">
                  <Outlet />
                </div>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
      </div>
    </div>
  );
}


export default MainContent