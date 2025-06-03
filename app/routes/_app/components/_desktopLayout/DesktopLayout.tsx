import React, { useEffect, useState } from 'react';
import Header from './_header/Header';
import PlaybackController from './_playbackController/PlaybackController';
import { MoreHorizontal, Expand, Maximize2 } from 'lucide-react';
import MainContent from './_mainContent/MainContent';

function DesktopLayout() {
    const [hide, setHide] = useState(false)
    const [expanded, setExpanded] = useState(false)

    const handleToggleFullscreen = () => {
        const elem = document.documentElement;

        if (!document.fullscreenElement) {
            elem.requestFullscreen().catch((err) => {
                console.error(`Error enabling full-screen mode: ${err.message}`);
            });
            setHide(true)
        } else {
            document.exitFullscreen();
            setHide(false)
        }
    };


    return (
        <div className={`${expanded ? "bg-[#4B6741]": "bg-black"} flex-col h-screen rounded-lg text-white hidden md:flex`}>
            {/* Header */}
            {
                !hide && <Header />
            }

            {
                !expanded ? (
                    <MainContent />

                ) : (
                    <>
                        {/* Top Bar with Title and Icons */}
                        <div className={`${hide ? "mt-[0px]" : "mt-[50px]"} flex justify-between items-center px-6 pt-4`}>
                            <span className="text-sm font-semibold text-white/80">New Music Friday India</span>

                            <div className="flex items-center gap-4 text-white/70">
                                <MoreHorizontal size={18} className="cursor-pointer hover:text-white" />
                                <Expand
                                    size={18}
                                    className="cursor-pointer hover:text-white"
                                    onClick={handleToggleFullscreen}
                                />
                                <Maximize2 size={18} className="cursor-pointer hover:text-white"
                                    onClick={() => {
                                        setExpanded(false)
                                        setHide(false)
                                    }}
                                />
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
                    </>
                )
            }

            {/* Playback Controller */}
            <div onClick={() => setExpanded(true)}>

                <PlaybackController />
            </div>
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