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
    const [isScreenExpanded, setIsScreenExpanded] = useState(false)

    const screenExpand = () => setIsScreenExpanded(true);
    const screenMinimize = () => setIsScreenExpanded(false);

    return (
        <div className="bg-[#0E1112] text-white min-h-screen block md:hidden">
            {/* Fixed Header */}
            <Header />

            {/* Scrollable Content Area */}
            <main className="pt-[62px] pb-[135px] h-full bg-[#121212]">
                <Outlet />
            </main>

            {/* Fixed Playback Footer */}
            <MobileMiniPlayer onScreenExpand={screenExpand} /> {/* we are passing it as a props now it become a action that why we prefer on<action> format */}

            <ExpandedNowPlaying isScreenExpanded={isScreenExpanded} onScreenMinimize={screenMinimize} />

            {/* Fixed Mobile Navigation Footer */}
            <MobileNavigationFooter />
        </div>
    )
}

export default MobileLayout


