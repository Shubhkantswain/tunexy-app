import { Outlet } from '@remix-run/react';
import { Plus } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '~/components/ui/resizable'
import useIsLargeScreen from '~/hooks/UseMediaQuery';
import { DefaultListIcon, LibrarayIcon, PlusIcon, SearchIcon } from '~/Svgs';
import LeftSidebar from './_leftSidebar/LeftSidebar';

function MainContent() {

    const [panelSize, setPanelSize] = useState(22);

    return (
        <div className="flex-1 pb-1 overflow-hidden hidden md:flex">
            <div className="flex w-full h-full px-1">
                    <ResizablePanelGroup
                        direction="horizontal"
                        onLayout={(sizes) => setPanelSize(sizes[0])} 
                        className="flex w-full gap-0.5" // Equal spacing between sidebar and content
                    >
                        {/* Left Sidebar with Library */}
                        <LeftSidebar panelSize={panelSize} />

                        {/* Resize Handle */}
                        <ResizableHandle withHandle className="bg-transparent hover:bg-white" />

                        {/* Main Content */}
                        <ResizablePanel defaultSize={75}>
                            <div className="h-full bg-[#121212] rounded-md custom-scrollbar overflow-y-auto">
                                <div className="p-4 sm:p-6 md:p-8 max-w-[90rem] mx-auto "><Outlet /></div>
                            </div>
                        </ResizablePanel>
                    </ResizablePanelGroup>
            </div>
        </div>
    )
}

export default MainContent