import React, { useState } from 'react'
import { ExitScreenIcon, FullScreenIcon, MinimizeIcon, MoreIcon } from '~/Svgs';

interface ExpandedNowPlayingProps {
    handleToggleExpandScreen: () => void;
}

const ExpandedNowPlaying: React.FC<ExpandedNowPlayingProps> = ({ handleToggleExpandScreen }) => {
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
        <div className="bg-gradient-to-b from-[#363c49] to-[#1e222d] flex flex-col w-full h-full p-6 rounded-md relative">
            {/* Top Row */}
            <div className="flex items-center justify-between">
                <h2 className="text-white font-semibold text-sm">New Music Friday India</h2>
                <div className="flex items-center gap-5 text-white text-xl">
                    <MoreIcon width="20" height="20" />
                    <button
                        onClick={handleToggleFullscreen}
                    >
                        {
                            isFullScreen ? <ExitScreenIcon width="16" height="16" /> : <FullScreenIcon width="16" height="16" />
                        }
                    </button>

                    <button
                        onClick={handleToggleExpandScreen}

                    >
                        <MinimizeIcon width="16" height="16" />
                    </button>
                </div>
            </div>

            {/* Centered Card */}
            <div className="flex flex-1 justify-center items-center">
                <div className="relative shadow-2xl rounded-xl overflow-hidden">
                    <img
                        src="https://m.media-amazon.com/images/I/410ywXj9+AL._SX354_SY354_BL0_QL100__UX358_FMwebp_QL85_.jpg"
                        alt="Music Artist"
                        className="w-64 h-64 object-cover rounded-xl"
                    />
                    <div className="absolute bottom-4 left-4 bg-white px-2 py-1 text-black font-bold text-xs rounded shadow">
                        COLORS<br />STUDIOS
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExpandedNowPlaying