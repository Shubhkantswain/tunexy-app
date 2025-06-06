import { Plus } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'
import useIsLargeScreen from '~/hooks/UseMediaQuery'
import { DefaultListIcon, LibrarayIcon, PlusIcon, SearchIcon } from '~/Svgs';
import Header from './Header';
import TabsSection from './TabsSection';
import SearchTogglePanel from './SearchTogglePanel';
import LibraryItems from './LibraryItems';
import { Panel } from 'react-resizable-panels';
import { ResizablePanel } from '~/components/ui/resizable';

interface LeftSidebarProps {
    panelSize: number;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({ panelSize }) => {

    const scrollRef = useRef<HTMLDivElement>(null);


    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = scrollRef.current?.scrollTop || 0;
            setIsScrolled(currentScrollTop > 0);
        };

        const div = scrollRef.current;
        if (div) {
            div.addEventListener("scroll", handleScroll);
        }

        // Cleanup
        return () => {
            div?.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const isLgScreen = useIsLargeScreen()
    const minSize = isLgScreen ? 7 : 12

    type ViewType = "Default List" | "Compact List" | "Default Grid" | "Compact Grid";


    const [view, setView] = useState<ViewType>("Default List")

    return (
        // <div defaultSize={25} minSize={minSize} maxSize={35}>
            <div className="h-full bg-[#121212] flex flex-col text-white rounded-md">
                {/* Header */}
                <Header panelSize={panelSize} />


                {/* Tabs Section */}
                <TabsSection panelSize={panelSize} isScrolled={isScrolled} />

                <div className='overflow-y-auto hide-scrollbar'
                    ref={scrollRef}
                >
                    {/* Search & View Options */}
                    <SearchTogglePanel panelSize={panelSize} view={view} setView={setView} />

                    {/* Library Items */}
                    <LibraryItems panelSize={panelSize} view={view} />

                </div>
            </div>
        // </div>
    )
}

export default LeftSidebar