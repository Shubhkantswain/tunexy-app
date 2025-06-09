import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

const playlists = [
    { id: 1, title: 'My Likes', img: '/likes.png' },
    { id: 2, title: 'new pslls' },
    { id: 3, title: 'lllllllllllllllllll', img: '/azaad.png' },
    { id: 4, title: 'kkkkkkkkkkk' },
    { id: 5, title: 'hhhhhhh' },
    { id: 6, title: 'new2' },
    { id: 7, title: 'new2' },
    { id: 8, title: 'new2' },
    { id: 9, title: 'new2' },
    { id: 10, title: 'new2' },
    { id: 11, title: 'new2' },
    { id: 12, title: 'new2' },




];

const PlaylistScroller = () => {
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
        <div className="relative w-full mt-7 md:mt-10">


            {/* Scrollable Playlist Area */}
            <div className="relative -ml-4 md:ml-0">
                {canScroll.left && (
                    <button
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 text-white p-2 rounded-full"
                        onClick={() => scroll('left')}
                    >
                        <ChevronLeft size={24} />
                    </button>
                )}
                {canScroll.right && (
                    <button
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 text-white p-2 rounded-full"
                        onClick={() => scroll('right')}
                    >
                        <ChevronRight size={24} />
                    </button>
                )}

                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex gap-4 md:gap-6 px-4 md:px-0  overflow-x-auto hide-scrollbar scroll-smooth"
                >
                    {playlists.map((playlist) => (
                        <div
                            key={playlist.id}
                            className="w-[140px] sm:w-[150px] md:w-[150px] lg:w-[160px] flex-shrink-0 bg-[#1f1f1f] text-white rounded-lg flex flex-col items-center justify-center text-sm overflow-hidden"
                        >
                            {playlist.img ? (
                                <img
                                    src={playlist.img}
                                    alt={playlist.title}
                                    className="w-full h-[140px] sm:h-[150px] md:h-[150px] lg:h-[160px] object-cover rounded-lg"
                                />
                            ) : (
                                <div className="flex flex-col items-center text-gray-300">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-8 h-8"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 19V6l12-2v13M9 6l12-2M9 6v13"
                                        />
                                    </svg>
                                    <span className="mt-2 text-center px-2">{playlist.title}</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PlaylistScroller;
