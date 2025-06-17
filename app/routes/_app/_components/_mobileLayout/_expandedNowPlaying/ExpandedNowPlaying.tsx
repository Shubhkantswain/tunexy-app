import React from 'react'
import { Drawer, DrawerContent } from '~/components/ui/drawer'
import Header from './Header';
import TrackArtInfo from './TrackArtInfo';
import ProgressBar from './ProgeressBar';
import VolumeControl from './VolumeControl';
import PlaybackControls from './PlaybackControls';
import useDominantColor from '~/hooks/useDominantColor';

interface ExpandedNowPlayingProps {
    isScreenExpanded: boolean;
    onScreenMinimize: () => void
}

const ExpandedNowPlaying: React.FC<ExpandedNowPlayingProps> = ({ isScreenExpanded, onScreenMinimize }) => {
    const { dominantColor } = useDominantColor("https://m.media-amazon.com/images/S/dmp-catalog-images-prod/images/674830a5-23ed-490f-b1cf-681a68570099/674830a5-23ed-490f-b1cf-681a68570099--1751145004._UX358_FMwebp_QL85_.jpg")

    return (
        <Drawer open={isScreenExpanded} onClose={onScreenMinimize}>
            <DrawerContent className="h-full w-full bg-black">
                {/* Background color */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundColor: `${dominantColor}`,
                    }}
                />

                {/* Dark overlay to reduce brightness */}
                <div className="absolute inset-0 bg-black opacity-30" />
                <div
                    className={`hide-scrollbar fixed inset-0  overflow-y-auto z-50`}
                >


                    <div className="relative z-10 max-w-3xl mx-auto min-h-full">
                        {/* Header */}
                        <Header onScreenMinimize={onScreenMinimize} />

                        <TrackArtInfo />

                        {/* Progress bar */}
                        <ProgressBar />

                        <div className="px-4 sm:px-8 py-8 lg:py-12 w-full max-w-3xl mx-auto">
                            {/* Playback Controls */}
                            <PlaybackControls />

                            {/* Volume Control */}
                            <VolumeControl />
                        </div>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    )
}

export default ExpandedNowPlaying