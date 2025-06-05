import { Link, Outlet } from '@remix-run/react'
import React, { useState } from 'react'
import { Drawer, DrawerContent } from '~/components/ui/drawer'
import { Slider } from '~/components/ui/slider'
import { DownArrowIcon, ExploreIcon, HomeIcon, LibrarayIcon, MoreIcon, NextIcon, PauseIcon, PlayIcon, PlusIcon, PrevIcon, QueueIcon, SearchIcon, SkipBackwardIcon, SkipForwardIcon, VolumeIcon } from '~/Svgs'
import Header from './_header/Header'
import MobileMiniPlayer from './_mobileMiniPlayer/MobileMiniPlayer'
import ExpandedNowPlaying from './_expandedNowPlaying/ExpandedNowPlaying'
import MobileNavigationFooter from './_mobileNavigationFooter/MobileNavigationFooter'

function MobileLayout() {


    const [isExpanded, setIsExpanded] = useState(false)

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

    const onExpand = () => setIsExpanded(true);
    const onMinimize = () => setIsExpanded(false);


    return (
        <div className="bg-[#0E1112] text-white min-h-screen block md:hidden">
            {/* Fixed Header */}
            <Header />

            {/* Scrollable Content Area */}
            <main className="pt-[80px] p-4 pb-[150px]">
                <Outlet />
            </main>


            {/* Fixed Playback Footer */}
            <MobileMiniPlayer onExpand={onExpand} /> {/* we are passing it as a props now it become a action that why we prefer on<action> format */}

            <ExpandedNowPlaying isExpanded={isExpanded} onMinimize={onMinimize} />

            {/* Fixed Mobile Navigation Footer */}
            <MobileNavigationFooter />
        </div>
    )
}

export default MobileLayout