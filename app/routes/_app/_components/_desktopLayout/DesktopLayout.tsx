import Header from './_header/Header';
import MainContent from './_mainContent/MainContent';
import PlaybackController from './_playbackController/PlaybackController';

const DesktopLayout = () => {
  return (
    <div className="hidden md:flex h-screen bg-black text-white flex-col">
      {/* Main Header */}
      <Header />

      {/* Main Content */}
      <MainContent/>

      {/* Footer - Music Player */}
      <PlaybackController/>
    </div>
  );
};

export default DesktopLayout;