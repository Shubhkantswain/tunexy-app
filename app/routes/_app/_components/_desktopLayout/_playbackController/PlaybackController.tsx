import React, { useState } from 'react'
import { Volume2 } from 'lucide-react'
import { NextIcon, PlayIcon, PrevIcon, SkipBackwardIcon, SkipForwardIcon, VolumeIcon } from '~/Svgs'
import { Slider } from '~/components/ui/slider'
import ProgressSlider from './ProgressSlider'
import TrackInfo from './TrackInfo'
import CenterControls from './CenterControls'
import VolumeControl from './VolumeControl'

const PlaybackController = () => {
    const [progress, setProgress] = useState([25]) // Progress in percentage (0-100)

    const handleProgressChange = (value: number[]) => {
        setProgress(value)
    }
    return (
        <footer className="fixed bottom-0 left-0 right-0 w-full bg-black text-white z-10"> {/* Changed from z-0 to z-10 */}
            {/* Progress Slider */}
            <ProgressSlider progress={progress} handleProgressChange={handleProgressChange} />

            <div className="flex items-center justify-between px-[16px] py-[11px]">
                {/* Track Info */}
                <TrackInfo/>

                {/* Center Controls */}
               <CenterControls/>

                {/* Volume Control */}
               <VolumeControl/>
            </div>
        </footer>
    )
}

export default PlaybackController
