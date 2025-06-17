import { useEffect, useRef, useState } from "react";
import { CompactGridIcon, CompactListIcon, DefaultGridIcon, DefaultListIcon, LibrarayIcon, PlusIcon, SearchIcon } from '~/Svgs';
import Header from "./Header";
import TabsSection from "./TabsSection";
import SearchTogglePanel from "./SearchTogglePanel";
import LibraryItems from "./LibraryItems";

interface LeftSidebarProps {
    panelSize: number;
    setPanelSize: React.Dispatch<React.SetStateAction<number>>;
}



const LeftSidebar: React.FC<LeftSidebarProps> = ({ panelSize, setPanelSize }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const [isResizing, setIsResizing] = useState(false);

    const startResizing = () => {
        setIsResizing(true);
        document.body.style.userSelect = 'none';
        document.body.style.cursor = 'col-resize';
    };

    const stopResizing = () => {
        setIsResizing(false);
        document.body.style.userSelect = '';
        document.body.style.cursor = '';
    };

    const resize = (clientX: number) => {
        if (!isResizing || !containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const newSize = ((clientX - rect.left) / rect.width) * 100;
        if (newSize > 10 && newSize < 40) {
            setPanelSize(newSize);
        }
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            resize(e.clientX);
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (e.touches.length > 0) {
                resize(e.touches[0].clientX);
            }
        };

        if (isResizing) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('touchmove', handleTouchMove);
            window.addEventListener('mouseup', stopResizing);
            window.addEventListener('touchend', stopResizing);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('mouseup', stopResizing);
            window.removeEventListener('touchend', stopResizing);
        };
    }, [isResizing]);



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

    const buttonRef = useRef<HTMLButtonElement>(null);

    const dropdownRef = useRef<HTMLDivElement>(null);


    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node) &&
                !buttonRef.current?.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);


    type ViewType = "Default List" | "Compact List" | "Default Grid" | "Compact Grid";


    const [view, setView] = useState<ViewType>("Default List")


    return (
        <>
            <Header panelSize={panelSize} setPanelSize={setPanelSize} isScrolled={isScrolled} />

            <TabsSection panelSize={panelSize} isScrolled={isScrolled} />


            <div className='overflow-y-auto hide-scrollbar'
                ref={scrollRef}
            >
                {/* Search & View Options */}
                <SearchTogglePanel panelSize={panelSize} view={view} setView={setView} />

                {/* Library Items */}
                <LibraryItems panelSize={panelSize} view={view} />

            </div>
        </>
    )
}

export default LeftSidebar