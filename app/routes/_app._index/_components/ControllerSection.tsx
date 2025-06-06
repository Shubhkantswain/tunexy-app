import React from 'react'
import { LeftArrowIcon, RightArrowIcon } from '~/Svgs';

interface ControllerSectionsProps {
    scroll: (direction: "left" | "right") => void;
    canScrollLeft: boolean;
    canScrollRight: boolean;
}

const ControllerSection: React.FC<ControllerSectionsProps> = ({ scroll, canScrollLeft, canScrollRight }) => {
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
                    className="px-4 py-2 rounded-full bg-zinc-800 text-white font-chane font-semibold hover:bg-zinc-700 transition">
                    SEE ALL
                </button>
            </div>
        </div>
    )
}

export default ControllerSection