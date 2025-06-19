import { useEffect, useRef, useState } from "react";
import { CompactGridIcon, CompactListIcon, DefaultGridIcon, DefaultListIcon, LibrarayIcon, PlusIcon, SearchIcon } from '~/Svgs';
import Header from "./Header";
import TabsSection from "./TabsSection";
import SearchTogglePanel from "./SearchTogglePanel";
import LibraryItems from "./LibraryItems";
import { ViewType } from "~/types";
import { useLoadingStore } from "~/store/useLoadingStore";

const LeftSidebar = () => {
    const [view, setView] = useState<ViewType>("Default List")
    const scrollRef = useRef<HTMLDivElement>(null);

    const [isScrolled, setIsScrolled] = useState(false);
    const { isLoading, setIsLoading } = useLoadingStore()

    useEffect(() => {
        const view = localStorage.getItem("view") || "Default List"
        if (view) setView(view)
        setTimeout(() => {
            setIsLoading(false)
        },2000)
    }, [])

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

    return (
        <>
            {
                !isLoading && (
                    <>
                        <Header isScrolled={isScrolled} />

                        <TabsSection isScrolled={isScrolled} />

                        <div className='overflow-y-auto hide-scrollbar h-screen'
                            ref={scrollRef}
                        >
                            {/* Search & View Options */}
                            <SearchTogglePanel view={view} setView={setView} />

                            {/* Library Items */}
                            <LibraryItems view={view} />

                        </div>
                    </>
                )
            }
        </>
    )
}

export default LeftSidebar