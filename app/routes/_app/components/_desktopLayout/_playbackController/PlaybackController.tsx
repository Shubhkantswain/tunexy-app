import { Play, RotateCcw, RotateCw, SkipBack, SkipForward, Volume2 } from 'lucide-react'
import React from 'react'

function PlaybackController() {
    return (
        <div className="w-full bg-black text-white items-center justify-between px-4 py-3 hidden md:flex">
            {/* Left: Episode Info */}
            <div className="flex items-center gap-3">
                <img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ee/Mahabharata_BR_Chopra.jpg/220px-Mahabharata_BR_Chopra.jpg"
                    alt="cover"
                    className="w-12 h-12 object-cover rounded-md"
                />
                <div className="text-sm">
                    <h3 className="font-semibold line-clamp-1">
                        Mahabharata Episode 1: Beginnings
                    </h3>
                    <p className="text-xs text-gray-400">The Stories of Mahabharata</p>
                </div>
            </div>

            {/* Center: Controls */}
            <div className="flex items-center gap-6">
                <SkipBack className="w-5 h-5 cursor-pointer" />
                <RotateCcw className="w-5 h-5 cursor-pointer" />
                <button className="bg-gray-800 p-2 rounded-full">
                    <Play className="text-white w-5 h-5" />
                </button>
                <RotateCw className="w-5 h-5 cursor-pointer" />
                <SkipForward className="w-5 h-5 cursor-pointer" />
            </div>

            {/* Right: Volume */}
            <div>
                <Volume2 className="w-5 h-5 cursor-pointer" />
            </div>
        </div>
    )
}

export default PlaybackController