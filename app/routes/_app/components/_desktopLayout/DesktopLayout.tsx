import Header from './_header/Header';
import PlaybackController from './_playbackController/PlaybackController';
import MainContent from './_mainContent/MainContent';
import { ExitScreenIcon, FullScreenIcon, MinimizeIcon, MoreIcon } from '~/Svgs';
import { useState } from 'react';

const DesktopLayout = () => {
    const [isExpanded, setIsExpanded] = useState(false)

    const handleToggleExpandScreen = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <div className="flex-col h-screen text-white hidden md:flex bg-black">
            {/* Header */}
            <Header />

            <MainContent isExpanded={isExpanded} handleToggleExpandScreen={handleToggleExpandScreen} />
           

            {/* Playback Controller */}
            <PlaybackController isExpanded={isExpanded} handleToggleExpandScreen={handleToggleExpandScreen} />
        </div>
    );
}

export default DesktopLayout;
