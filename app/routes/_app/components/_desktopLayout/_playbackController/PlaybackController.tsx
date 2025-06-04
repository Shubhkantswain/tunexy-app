import { useState } from 'react'
import { NextIcon, PlayIcon, PrevIcon, SkipBackwardIcon, SkipForwardIcon, VolumeIcon } from '~/Svgs'
import { Slider } from '~/components/ui/slider'

function PlaybackController() {
    const [progress, setProgress] = useState([25]) // Progress in percentage (0-100)
    const [currentTime, setCurrentTime] = useState("12:34")
    const [totalTime, setTotalTime] = useState("48:20")

    const handleProgressChange = (value: number[]) => {
        setProgress(value)
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 w-full bg-black text-white z-50">
            {/* Main content */}
            <div className="py-3 px-4">
                <div className="flex items-center justify-between w-full">
                    {/* Left: Episode Info */}
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                        <img
                            src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d"
                            alt="cover"
                            className="w-12 h-12 object-cover rounded-sm flex-shrink-0"
                        />
                        <div className="text-sm min-w-0 flex-1">
                            <h3 className="font-semibold truncate text-sm">
                                Mahabharata Episode 1: Beginnings
                            </h3>
                            <p className="text-xs text-gray-400 truncate">The Stories of Mahabharata</p>
                        </div>
                    </div>

                    {/* Center: Controls */}
                    <div className="flex items-center gap-6 mx-8">
                        <button className="hover:text-gray-300 transition-colors">
                            <SkipBackwardIcon width="20" height="20" />
                        </button>
                        <button className="hover:text-gray-300 transition-colors">
                            <PrevIcon width="20" height="20" />
                        </button>
                        <button className="bg-white text-black p-3 rounded-full hover:bg-gray-200 transition-colors">
                            <PlayIcon width="20" height="20" />
                        </button>
                        <button className="hover:text-gray-300 transition-colors">
                            <NextIcon width="20" height="20" />
                        </button>
                        <button className="hover:text-gray-300 transition-colors">
                            <SkipForwardIcon width="20" height="20" />
                        </button>
                    </div>

                    {/* Right: Volume */}
                    <div className="flex justify-end flex-1">
                        <VolumeIcon width="20" height="20" />
                    </div>
                </div>
            </div>

            {/* Bottom: Progress Bar */}
            <div className="w-full px-4 mb-2 group relative">
                {/* Time indicators */}
                <div className="absolute -top-5 left-2 right-2 flex justify-between text-xs text-white px-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span>{"1:55"}</span>
                    <span>{"4:55"}</span>
                </div>

                {/* Slider */}
                <Slider
                    value={progress}
                    onValueChange={handleProgressChange}
                    className="w-full cursor-grab"
                />
            </div>


        </div>
    )
}

export default PlaybackController
