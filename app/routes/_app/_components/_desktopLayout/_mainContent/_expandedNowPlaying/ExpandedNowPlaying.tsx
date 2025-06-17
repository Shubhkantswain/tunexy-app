import React, { useState } from 'react'
import useDominantColor from '~/hooks/useDominantColor';
import { ExitScreenIcon, FullScreenIcon, MinimizeIcon, MoreIcon } from '~/Svgs';

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
            {/* Top Row */}
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

            {/* Centered Card */}
            <div className="flex flex-1 justify-center items-center z-10">
                <div className="relative shadow-2xl rounded-xl overflow-hidden">
                    <img
                        src="https://m.media-amazon.com/images/I/410ywXj9+AL._SX354_SY354_BL0_QL100__UX358_FMwebp_QL85_.jpg"
                        alt="Music Artist"
                        className="w-64 h-64 object-cover rounded-xl custom-img"
                    />
                </div>
            </div>

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