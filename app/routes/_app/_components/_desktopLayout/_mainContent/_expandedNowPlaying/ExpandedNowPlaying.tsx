import React, { useState } from 'react'
import TopControls from './TopControls';
import CenteredImage from './CenteredImage';

interface ExpandedNowPlayingProps {
    onScreenMinimize: () => void;
    dominantColor: string
}

const ExpandedNowPlaying: React.FC<ExpandedNowPlayingProps> = ({ onScreenMinimize, dominantColor }) => {
    const [isFullScreen, setIsFullScreen] = useState(false)

    const handleToggleFullscreen = () => {
        const elem = document.documentElement;

        if (!document.fullscreenElement) {
            elem.requestFullscreen().catch((err) => {
                console.error(`Error enabling full-screen mode: ${err.message}`);
            });
            setIsFullScreen(true)
        } else {
            document.exitFullscreen();
            setIsFullScreen(false)
        }
    };

    return (
        <div className="bg-gradient-to-b flex flex-col w-full h-full p-6 rounded-md relative overflow-hidden">
            {/* Top Controls */}
            <TopControls isFullScreen={isFullScreen} handleToggleFullscreen={handleToggleFullscreen} onScreenMinimize={onScreenMinimize} />

            {/* Centered Img */}
            <CenteredImage/>

            {/* Background color - positioned behind content */}
            <div
                className="absolute inset-0 -z-0"
                style={{
                    backgroundColor: `${dominantColor}`,
                }}
            />

            {/* Dark overlay - positioned behind content but above color */}
            <div className="absolute inset-0 bg-black opacity-10 -z-0" />
        </div>

    )
}

export default ExpandedNowPlaying