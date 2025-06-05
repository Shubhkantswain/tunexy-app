import Header from './_header/Header';
import PlaybackController from './_playbackController/PlaybackController';
import MainContent from './_mainContent/MainContent';
import { useState } from 'react';

const DesktopLayout = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const onExpand = () => setIsExpanded(true);    
    const onMinimize = () => setIsExpanded(false);

    return (
        <div className="flex-col h-screen text-white hidden md:flex bg-black">
            {/* Header */}
            <Header />

            <MainContent isExpanded={isExpanded} onMinimize={onMinimize} />  {/* we are passing it as a props now it become a action that why we prefer on<action> format */}

            {/* Playback Controller */}
            <PlaybackController isExpanded={isExpanded} onExpand={onExpand} onMinimize={onMinimize} />
        </div>
    );
}

export default DesktopLayout;
