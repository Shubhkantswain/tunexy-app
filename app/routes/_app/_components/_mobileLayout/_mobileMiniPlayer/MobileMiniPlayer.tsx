import React from 'react'
import LeftSideInfo from './LeftSideInfo';
import PlaybackControls from './PlaybackControls';

interface MobileMiniPlayerProps {
    onScreenExpand: () => void;
}

const MobileMiniPlayer: React.FC<MobileMiniPlayerProps> = ({ onScreenExpand }) => {
    return (
        <>
            {
                true && (
                    <footer
                        onClick={onScreenExpand}
                        className="fixed bottom-16 mb-2.5 rounded-md left-0 right-0 z-20 h-[60px] w-[95%] mx-auto overflow-hidden">
                        {/* Background with blur */}
                        <div className="absolute inset-0 z-0">
                            <img
                                src="https://m.media-amazon.com/images/I/81NhNYtCisL._SX472_SY472_BL0_QL100__UX56_FMwebp_QL85_.jpg"
                                alt="Background"
                                className="w-full h-full object-cover blur-md opacity-60"
                            />
                        </div>

                        {/* Content overlay */}
                        <div className="relative z-10 bg-[#2B2B2B]/50 backdrop-blur-xl h-full w-full">
                            <div className="max-w-[90rem] mx-auto px-4 w-full h-full flex items-center justify-between text-white">
                                {/* Left Song Info */}
                                <LeftSideInfo/>

                                {/* Controls */}
                               <PlaybackControls/>
                            </div>
                        </div>
                    </footer>

                )
            }
        </>
    )
}

export default MobileMiniPlayer