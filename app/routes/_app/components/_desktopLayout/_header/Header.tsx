import { Search } from 'lucide-react'
import React from 'react'
import {  ExploreIcon, HomeIcon, LibrarayIcon, LogoIcon, SearchIcon } from '~/Svgs'
import Logo from './Logo'
import CenterIcons from './CenterIcons'
import Account from './Account'

function Header() {
    return (
        <header className="items-center justify-between px-6 py-2 bg-black hidden md:flex">
            {/* Left: Logo */}
            <Logo/>

            {/* Center: Icons + Search */}
            <CenterIcons/>

            {/* Right: Premium + Account */}
            <Account/>
        </header>
    )
}

export default Header