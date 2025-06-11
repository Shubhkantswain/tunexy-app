import React from 'react'
import LeftSideInfo from './LeftSideInfo';
import PlaybackControls from './PlaybackControls';
import useImageColor from '~/hooks/useImgColor';

interface MobileMiniPlayerProps {
    onScreenExpand: () => void;
}

const MobileMiniPlayer: React.FC<MobileMiniPlayerProps> = ({ onScreenExpand }) => {
    const { dominantColor } = useImageColor("https://m.media-amazon.com/images/S/dmp-catalog-images-prod/images/674830a5-23ed-490f-b1cf-681a68570099/674830a5-23ed-490f-b1cf-681a68570099--1751145004._UX358_FMwebp_QL85_.jpg")

    return (
        <>
            {
                true && (
                    <footer
                        onClick={onScreenExpand}
                        className="fixed bottom-16 mb-2.5 rounded-md left-0 right-0 z-20 h-[60px] w-[95%] mx-auto overflow-hidden bg-black"
                    >
                        {/* Background color */}
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundColor: `${dominantColor}`,
                            }}
                        />

                        {/* Dark overlay to reduce brightness */}
                        <div className="absolute inset-0 bg-black opacity-30" />
                        {/* Content overlay */}
                        <div className="relative z-10 h-full w-full">
                            <div className="max-w-[90rem] mx-auto px-4 w-full h-full flex items-center justify-between text-white">
                                {/* Left Song Info */}
                                <LeftSideInfo />

                                {/* Controls */}
                                <PlaybackControls />
                            </div>
                        </div>
                    </footer>

                )
            }
        </>
    )
}

export default MobileMiniPlayer