import { useEffect, useRef, useState } from 'react'
import ControllerSection from './ControllerSection';
import PlaylistItems from './PlaylistItems';

const PlaylistSection = () => {
    const scrollRef = useRef(null);
    const [canScroll, setCanScroll] = useState({ left: false, right: false });

    const checkScrollability = (): void => {
        if (scrollRef.current) {
            const container = scrollRef.current as HTMLDivElement;
            const hasHorizontalScroll: boolean = container.scrollWidth > container.clientWidth;
            const atStart: boolean = container.scrollLeft <= 0;
            const atEnd: boolean = container.scrollLeft + container.clientWidth >= container.scrollWidth - 5;

            setCanScroll({
                left: hasHorizontalScroll && !atStart,
                right: hasHorizontalScroll && !atEnd,
            });
        }
    };

    const scroll = (direction: 'left' | 'right'): void => {
        if (scrollRef.current) {
            const container = scrollRef.current as HTMLDivElement;
            const scrollAmount = direction === 'left' ? -500 : 500;
            container.scrollBy({
                left: scrollAmount,
                behavior: 'smooth',
            });

            // Update scroll buttons after scrolling
            setTimeout(checkScrollability, 300);
        }
    };

    const handleScroll = () => {
        checkScrollability();
    };

    useEffect(() => {
        checkScrollability();
        window.addEventListener('resize', checkScrollability);
        return () => window.removeEventListener('resize', checkScrollability);
    }, []);


    return (
        <div className="text-white mb-8 md:mb-12">
            {/* Header */}
            <ControllerSection scroll={scroll} canScrollLeft={canScroll.left} canScrollRight={canScroll.right} />


            {/* Scrollable Playlist Row */}
            <div className="-ml-4 md:ml-0">
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="px-4 md:px-0 flex gap-4 md:gap-6 overflow-x-auto hide-scrollbar scroll-smooth"
                >
                    <PlaylistItems />
                </div>
            </div>

        </div>
    )
}

export default PlaylistSection