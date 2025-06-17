import { Link, useLocation } from '@remix-run/react';
import React, { useEffect, useRef, useState } from 'react'
import { LogoIcon } from '~/Svgs';
import { AccountIcon, CloseIcon, CompactGridIcon, CompactListIcon, DefaultGridIcon, DefaultListIcon, ExploreFilledIcon, ExploreIcon, HomeFilledIcon, HomeIcon, LibrarayFilledIcon, LibrarayIcon, MicIcon, PlusIcon, SearchFilledIcon, SearchIcon } from '~/Svgs'
import Logo from './Logo';
import CenterControls from '../_playbackController/CenterControls';
import UserProfile from './UserProfile';
import CenterNavigationIcons from './CenterNavigationIcons';


const Header = () => {
    const navigationItems = [
        { path: "/", name: "Home", Icon: HomeIcon, ActiveIcon: HomeFilledIcon, visible: true },
        { path: "/explore", name: "Explore", Icon: ExploreIcon, ActiveIcon: ExploreFilledIcon, visible: true },
        { path: "/my/library", name: "Library", Icon: LibrarayIcon, ActiveIcon: LibrarayFilledIcon, visible: true },
        { path: "/search", name: "Search", Icon: SearchIcon, ActiveIcon: SearchFilledIcon, visible: false },
    ];
    const { pathname } = useLocation()

    const [open, setOpen] = useState(false);
   

    return (
        <header className="bg-black bg-opacity-95 backdrop-blur-sm px-[16px] py-[10px] flex items-center justify-between fixed top-0 left-0 right-0 z-50">
            {/* Left - Logo */}
            <Logo />

            {/* Center - Navigation and Search */}
            <CenterNavigationIcons />

            {/* Right - userProfile */}
            <UserProfile />
        </header>
    )
}

export default Header