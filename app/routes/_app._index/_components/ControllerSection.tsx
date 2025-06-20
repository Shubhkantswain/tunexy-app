import React, { useEffect, useState } from 'react'
import ShowTrackDialog from '~/routes/_app/Components/ShowTracksDialog';
import { useLoadingStore } from '~/store/useLoadingStore';
import { LeftArrowIcon, RightArrowIcon } from '~/Svgs';

interface ControllerSectionsProps {
    scroll: (direction: "left" | "right") => void;
    canScrollLeft: boolean;
    canScrollRight: boolean;
}

const ControllerSection: React.FC<ControllerSectionsProps> = ({ scroll, canScrollLeft, canScrollRight }) => {
    const [isOpen, setIsOpen] = useState(false)
    const {isLoading, setIsLoading} = useLoadingStore();
   
   
 

    if (isLoading) {
        return (
            <div className="flex items-center justify-between mb-4 animate-pulse">
                {/* Title Skeleton */}
                <div className="h-6 w-48 bg-[#272727] rounded-md"></div>

                {/* Controls Skeleton */}
                <div className="flex items-center gap-4">
                   

                    {/* See All Button Skeleton */}
                    <div className="h-8 w-20 bg-[#272727] rounded-full"></div>
                </div>
            </div>
        )
    }

    return (
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg md:text-xl font-bold">
                Featured playlists for you
            </h2>

            {/* Controls: Arrows + See All Button */}
            <div className="flex items-center gap-4">
                <div className="space-x-8 hidden md:block">
                    <button
                        onClick={() => scroll("left")}
                        className={`transition ${canScrollLeft ? "text-white cursor-pointer" : "text-[#4D4E4E] cursor-not-allowed"}`}
                    >
                        <LeftArrowIcon width="20" height="20" />
                    </button>

                    <button
                        onClick={() => scroll("right")}
                        className={`transition ${canScrollRight ? "text-white cursor-pointer" : "text-[#4D4E4E] cursor-not-allowed"}`}
                    >
                        <RightArrowIcon width="20" height="20" />
                    </button>
                </div>

                <button
                    className="px-4 py-2 rounded-full bg-zinc-800 text-white text-[10px] font-semibold hover:bg-zinc-700 transition"
                    onClick={() => setIsOpen(true)}
                >
                    SEE ALL
                </button>
            </div>

            <ShowTrackDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>
    )
}

export default ControllerSection