import { useState } from 'react'
import ProgressBar from './ProgressBar';
import LeftSideInfo from './LeftSideInfo';
import CenterControllers from './CenterControllers';
import { VolumeIcon } from '~/Svgs';

interface PlaybackControllerProps {
    isExpanded: boolean;
    handleToggleExpandScreen: () => void
}

const PlaybackController: React.FC<PlaybackControllerProps> = ({ isExpanded, handleToggleExpandScreen }) => {
    const [progress, setProgress] = useState([25]) // Progress in percentage (0-100)

    const handleProgressChange = (value: number[]) => {
        setProgress(value)
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 w-full bg-black text-white z-50">
            {/* Top: Progress Bar */}
            <ProgressBar progress={progress} handleProgressChange={handleProgressChange}/>

            {/* Main content */}
            <div className="py-3 px-4">
                <div className="flex items-center justify-between w-full">
                    {/* Left: Episode Info */}
                   <LeftSideInfo isExpanded={isExpanded} handleToggleExpandScreen={handleToggleExpandScreen}/>

                    {/* Center: Controls */}
                    <CenterControllers/>

                    {/* Right: Volume */}
                    <div className="flex justify-end flex-1">
                        <VolumeIcon width="20" height="20" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlaybackController
