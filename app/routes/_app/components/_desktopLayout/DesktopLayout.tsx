import React from 'react';
import Header from './_header/Header';
import PlaybackController from './_playbackController/PlaybackController';
import { MoreHorizontal, Expand, Maximize2 } from 'lucide-react';

function DesktopLayout() {
  const handleToggleFullscreen = () => {
    const elem = document.documentElement;

    if (!document.fullscreenElement) {
      elem.requestFullscreen().catch((err) => {
        console.error(`Error enabling full-screen mode: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div className="flex-col h-screen bg-gradient-to-b from-[#2a2f3b] to-[#1e2230] text-white hidden md:flex">
      {/* Header */}
      <Header />

      {/* Top Bar with Title and Icons */}
      <div className="flex justify-between items-center px-6 pt-4">
        <span className="text-sm font-semibold text-white/80">New Music Friday India</span>

        <div className="flex items-center gap-4 text-white/70">
          <MoreHorizontal size={18} className="cursor-pointer hover:text-white" />
          <Expand
            size={18}
            className="cursor-pointer hover:text-white"
            onClick={handleToggleFullscreen}
          />
          <Maximize2 size={18} className="cursor-pointer hover:text-white" />
        </div>
      </div>

      {/* Centered Main Content */}
      <div className="flex-grow flex justify-center items-center mb-[100px]">
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmdkExRWxKScpLQpl27MhrmwG-mLXc3pzLDho1Y13l_m4OgFxD1hE04AeMHTtsJC000vw&usqp=CAU"
            alt="Centered"
            className="w-[300px] h-[300px] object-cover"
          />
        </div>
      </div>

      {/* Playback Controller */}
      <PlaybackController />
    </div>
  );
}

export default DesktopLayout;


// import React from 'react'
// import Header from './_header/Header'
// import MainContent from './_mainContent/MainContent'
// import PlaybackController from './_playbackController/PlaybackController'
// import { ClientOnly } from '~/layout/ClientOnly'

// function DesktopLayout() {
//     return (

//         <div className="flex-col h-screen bg-black text-white hidden md:flex">
//             {/* Header */}
//             <Header />

//             {/* Main Content with Resizable Sidebar */}
//             <MainContent />

//            <PlaybackController/>
//         </div>
//     )
// }

// export default DesktopLayout