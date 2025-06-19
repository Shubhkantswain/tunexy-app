import React from 'react'
import { ExitScreenIcon, FullScreenIcon, MinimizeIcon, MoreIcon } from '~/Svgs'

interface TopControlsProps {
    isFullScreen: boolean;
    handleToggleFullscreen: () => void;
    onScreenMinimize: () => void;
}

const TopControls: React.FC<TopControlsProps> = ({ isFullScreen, handleToggleFullscreen, onScreenMinimize }) => {
    return (
        <div className="flex items-center justify-between z-10">
            <h2 className="text-white font-semibold text-sm">New Music Friday India</h2>
            <div className="flex items-center gap-5 text-white text-xl">
                <MoreIcon width="20" height="20" />
                <button onClick={handleToggleFullscreen}>
                    {isFullScreen ? (
                        <ExitScreenIcon width="16" height="16" />
                    ) : (
                        <FullScreenIcon width="16" height="16" />
                    )}
                </button>
                <button onClick={onScreenMinimize}> 
                    <MinimizeIcon width="16" height="16" />
                </button>
            </div>
        </div>
    )
}

export default TopControls