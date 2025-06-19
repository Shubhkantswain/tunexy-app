import { useState } from 'react';
import Header from './_header/Header';
import MainContent from './_mainContent/MainContent';
import PlaybackController from './_playbackController/PlaybackController';

const DesktopLayout = () => {
  const [isScreenExpanded, setIsScreenExpanded] = useState(false)
  const screenExpand = () => setIsScreenExpanded(true);
  const screenMinimize = () => setIsScreenExpanded(false);

  return (
    <div className="hidden md:flex h-screen bg-black text-white flex-col">
      {/* Main Header */}
      <Header />

      {/* Main Content */}
      <MainContent isScreenExpanded={isScreenExpanded} onScreenMinimize={screenMinimize}/>

      {/* Footer - Music Player */}
      <PlaybackController isScreenExpanded={isScreenExpanded} onScreenExpand={screenExpand} onScreenMinimize={screenMinimize} />

    </div>
  );
};

export default DesktopLayout;



