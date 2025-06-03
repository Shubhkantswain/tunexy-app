import { Play, RotateCcw, RotateCw, SkipBack, SkipForward, Volume2 } from 'lucide-react'
import React from 'react'

function PlaybackController() {
    return (
        <div className="fixed bottom-0 left-0 right-0 w-full bg-black text-white items-center justify-between px-4 py-3 flex flex-col md:flex-row z-50">
            {/* Left: Episode Info - shown on all screens */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start mb-2 md:mb-0">
                <img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ee/Mahabharata_BR_Chopra.jpg/220px-Mahabharata_BR_Chopra.jpg"
                    alt="cover"
                    className="w-10 h-10 md:w-12 md:h-12 object-cover rounded-md"
                />
                <div className="text-sm flex-1 md:flex-none ml-2">
                    <h3 className="font-semibold line-clamp-1 text-xs md:text-sm">
                        Mahabharata Episode 1: Beginnings
                    </h3>
                    <p className="text-xs text-gray-400">The Stories of Mahabharata</p>
                </div>
                {/* Show volume on mobile */}
                <div className="md:hidden">
                    <Volume2 className="w-5 h-5 cursor-pointer" />
                </div>
            </div>

            {/* Center: Controls - always shown */}
            <div className="flex items-center gap-4 md:gap-6 w-full md:w-auto justify-center">
                <SkipBack className="w-4 h-4 md:w-5 md:h-5 cursor-pointer" />
                <RotateCcw className="w-4 h-4 md:w-5 md:h-5 cursor-pointer" />
                <button className="bg-gray-800 p-1 md:p-2 rounded-full">
                    <Play className="text-white w-4 h-4 md:w-5 md:h-5" />
                </button>
                <RotateCw className="w-4 h-4 md:w-5 md:h-5 cursor-pointer" />
                <SkipForward className="w-4 h-4 md:w-5 md:h-5 cursor-pointer" />
            </div>

            {/* Right: Volume - hidden on mobile (shown in top row) */}
            <div className="hidden md:block">
                <Volume2 className="w-5 h-5 cursor-pointer" />
            </div>
        </div>
    )
}

export default PlaybackController