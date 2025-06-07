import React from 'react'
import { Drawer, DrawerContent } from '~/components/ui/drawer'
import { Slider } from '~/components/ui/slider'
import { DownArrowIcon, MoreIcon, NextIcon, PauseIcon, PlayIcon, PlusIcon, PrevIcon, QueueIcon, SkipBackwardIcon, SkipForwardIcon, VolumeIcon } from '~/Svgs'
import Header from './Header';
import TrackArtInfo from './TrackArtInfo';
import ProgressBar from './ProgeressBar';
import VolumeControl from './VolumeControl';
import PlaybackControls from './PlaybackControls';

interface ExpandedNowPlayingProps {
    isScreenExpanded: boolean;
    onScreenMinimize: () => void
}

const ExpandedNowPlaying: React.FC<ExpandedNowPlayingProps> = ({ isScreenExpanded, onScreenMinimize }) => {
    return (
        <Drawer open={isScreenExpanded} onClose={onScreenMinimize}>
            <DrawerContent className="bg-black h-full w-full">
                <div
                    className={`hide-scrollbar fixed inset-0 bg-black overflow-y-auto z-50`}
                >
                    {/* Background Image */}
                    <div
                        className="fixed inset-0 z-0 opacity-50"
                        style={{
                            backgroundImage: `url('https://m.media-amazon.com/images/I/518f7hQbCqL._SX354_SY354_BL0_QL100__UX358_FMwebp_QL85_.jpg')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            filter: 'blur(100px)',
                        }}
                    />

                    <div className="relative z-10 max-w-3xl mx-auto min-h-full">
                        {/* Header */}
                        <Header onScreenMinimize={onScreenMinimize} />

                        <TrackArtInfo />

                        {/* Progress bar */}
                        <ProgressBar/>

                        <div className="px-4 sm:px-8 py-8 lg:py-12 w-full max-w-3xl mx-auto">
                            {/* Playback Controls */}
                           <PlaybackControls/>

                            {/* Volume Control */}
                            <VolumeControl/>
                        </div>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    )
}

export default ExpandedNowPlaying