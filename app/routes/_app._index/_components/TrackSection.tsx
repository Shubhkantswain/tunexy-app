import { useEffect, useRef, useState } from 'react';
import ControllerSection from './ControllerSection';
import TrackItems from './TrackItems';

const TrackSection = () => {
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
            const scrollAmount = direction === 'left' ? -300 : 300;
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
        <section className=" text-white">
            <ControllerSection scroll={scroll} canScrollLeft={canScroll.left} canScrollRight={canScroll.right} />

            <div className='-ml-4 md:ml-0'>
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="px-4 md:px-0 flex overflow-x-auto gap-10 md:gap-10 hide-scrollbar scroll-smooth"
                >
                   <TrackItems/>
                </div>
            </div>
        </section>
    );
}

export default TrackSection
