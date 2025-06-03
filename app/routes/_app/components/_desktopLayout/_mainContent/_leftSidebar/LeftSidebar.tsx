import React, { useEffect, useRef, useState } from 'react';
import useIsLargeScreen from '~/hooks/UseMediaQuery';
import Header from './Header';
import TabsSection from './TabsSection';
import SearchTogglePanel from './SearchTogglePanel';
import LibraryItems from './LibraryItems';

interface LeftSidebarProps {
  panelSize: number;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({ panelSize }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const isLgScreen = useIsLargeScreen();

  type ViewType = "Default List" | "Compact List" | "Default Grid" | "Compact Grid";
  const [view, setView] = useState<ViewType>("Default List");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = scrollRef.current?.scrollTop || 0;
      setIsScrolled(currentScrollTop > 0);
    };

    const div = scrollRef.current;
    if (div) {
      div.addEventListener("scroll", handleScroll);
    }

    return () => {
      div?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="left-panel"
      className="bg-[#121212] flex flex-col text-white rounded-md h-full overflow-hidden"
    >
      {/* Header */}
      <Header panelSize={panelSize} />

      {/* Tabs Section */}
      <TabsSection panelSize={panelSize} isScrolled={isScrolled} />

      <div ref={scrollRef} className="overflow-y-auto hide-scrollbar">
        {/* Search & View Options */}
        <SearchTogglePanel panelSize={panelSize} view={view} setView={setView} />

        {/* Library Items */}
        <LibraryItems panelSize={panelSize} view={view} />
      </div>
    </div>
  );
};

export default LeftSidebar;
