import React, { useEffect, useRef, useState } from 'react';
import { Music, ChevronLeft, ChevronRight } from 'lucide-react';
import { LeftArrowIcon, RightArrowIcon } from '~/Svgs';

const tracks = [
    { id: 1, title: "My Likes", subtitle: "new psils" },
    { id: 2, title: "Playlist Mix", subtitle: "kkkkkkkkkk" },
    { id: 3, title: "Favorites", subtitle: "hhhhhhh" },
    { id: 4, title: "Chill Vibes", subtitle: "relaxing beats" },
    { id: 5, title: "Workout Mix", subtitle: "high energy" },
    { id: 6, title: "Study Session", subtitle: "focus music" },
    { id: 7, title: "Night Drive", subtitle: "smooth tunes" },
    { id: 8, title: "Coffee Shop", subtitle: "acoustic vibes" },
    { id: 9, title: "Dance Party", subtitle: "upbeat hits" },
    { id: 10, title: "Throwback", subtitle: "classic songs" }
];

const Tracklist = () => {
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
        <div className="rounded-lg mt-7">
            <div className="flex items-center">
                {/* Left Arrow */}
                {
                    canScroll.left && (
                        <button
                            onClick={() => scroll("left")}
                            className="p-2 z-50 -mr-[30px] -mt-[22px] rounded-full bg-black/70 backdrop:blur-xl text-white hover:bg-black/80 hover:scale-110 transition-all duration-200 flex-shrink-0"
                        >
                            {/* <ChevronLeft size={24} /> */}
                            <LeftArrowIcon width="15" height="16" />

                        </button>
                    )
                }

                {/* Scrollable Track Container */}
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="overflow-x-auto hide-scrollbar flex-1"
                >
                    <div className="flex gap-4 md:gap-6 pb-2" style={{ minWidth: 'max-content' }}>
                        {tracks.map((playlist) => (
                            <div
                                key={playlist.id}
                                className="shrink-0 w-[150px] sm:w-[160px] md:w-[155px] lg:w-[160px]"
                            >
                                <div className="rounded overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d"
                                        alt={playlist.title}
                                        className="w-full h-[150px] sm:h-[160px] md:h-[155px] lg:h-[160px] object-cover rounded"
                                    />
                                </div>
                                <div className="mt-2">
                                    <h3 className="text-sm  font-semibold truncate">
                                        {playlist.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Arrow */}
                {
                    canScroll.right && (
                        <button
                            onClick={() => scroll("right")}
                            className="p-2 rounded-full -ml-[30px] -mt-[22px] bg-black/70 backdrop:blur-xl text-white hover:bg-black/80 hover:scale-110 transition-all duration-200 flex-shrink-0"
                        >
                            {/* <ChevronRight size={24} /> */}
                            <RightArrowIcon width="15" height="15" />
                        </button>
                    )
                }
            </div>

            {/* Custom Scrollbar Styles */}

        </div>
    );
};

export default Tracklist;