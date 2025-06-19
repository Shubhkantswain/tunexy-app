import { useEffect, useRef, useState } from 'react';
import ControllerSection from './ControllerSection';
import { HeartIcon, MoreIcon, PlayIcon } from '~/Svgs';

const songGroups = [
    [
        {
            image: '/images/happy.jpg',
            title: 'Happy Birthday Song Song Song',
            artist: 'CoComelon',
        },
        {
            image: '/images/wheels.jpg',
            title: 'Wheels on the Bus',
            artist: 'CoComelon',
        },
        {
            image: '/images/ducks.jpg',
            title: 'Five Little Ducks hhs hshshshhshshshhshshshhshshshhshshshhshshsh',
            artist: 'CoComelon',
        },
    ],
    [
        {
            image: '/images/die.jpg',
            title: 'Die With A Smile',
            artist: 'Lady Gaga & Bruno Mars',
        },
        {
            image: '/images/baby.jpg',
            title: 'Baby Shark',
            artist: 'CoComelon',
        },
        {
            image: '/images/heat.jpg',
            title: 'Heat Waves',
            artist: 'Glass Animals',
        },
    ],
    [
        {
            image: '/images/pinkfong.jpg',
            title: 'Baby Shark',
            artist: 'Pinkfong',
        },
        {
            image: '/images/perfect.jpg',
            title: 'Perfect',
            artist: 'Ed Sheeran',
        },
        {
            image: '/images/pretty.jpg',
            title: 'Pretty Little Baby',
            artist: 'Connie Francis',
        },
    ],
    [
        {
            image: '/images/pinkfong.jpg',
            title: 'Baby Shark',
            artist: 'Pinkfong',
        },
        {
            image: '/images/perfect.jpg',
            title: 'Perfect',
            artist: 'Ed Sheeran',
        },
        {
            image: '/images/pretty.jpg',
            title: 'Pretty Little Baby',
            artist: 'Connie Francis',
        },
    ],
];

const TrackScroller = () => {
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
                    {songGroups.map((group, idx) => (
                        <div key={idx} className="flex flex-col gap-5 min-w-[270px] md:min-w-[350px]">
                            {group.map((song, i) => (
                                <div key={i} className="flex items-center gap-3 group cursor-pointer ">
                                    <div className="relative flex-shrink-0 p-0">
                                        <img
                                            src={'https://m.media-amazon.com/images/I/51yabQunwmL._SX354_SY354_BL0_QL100__UX250_FMwebp_QL85_.jpg'}
                                            alt={song.title}
                                            className="w-12 h-12 rounded-sm object-cover group-hover:opacity-40 transition-opacity"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <PlayIcon width="20" height="20" />
                                        </div>
                                    </div>

                                    <div className="flex-1 min-w-0 mr-0">
                                        <h3 className="text-sm font-medium truncate">{song.title}</h3>
                                        <p className="text-xs text-gray-400 mt-1 truncate">{song.artist}</p>
                                    </div>

                                    {/* Additional Icons */}
                                    <div className="flex items-center gap-3 text-gray-400 transition-colors">
                                        <button>

                                        <HeartIcon width="20" height="20"/>
                                        </button>
                                        <button>

                                       <MoreIcon width="20" height="20"/>
                                        </button>
                                    </div>
                                </div>


                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TrackScroller
