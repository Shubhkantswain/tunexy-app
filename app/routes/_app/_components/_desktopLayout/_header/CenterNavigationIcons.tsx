import { Link, useLocation, useNavigate } from '@remix-run/react';
import React from 'react'
import { AccountIcon, CloseIcon, ExploreFilledIcon, ExploreIcon, HomeFilledIcon, HomeIcon, LibrarayFilledIcon, LibrarayIcon, MicIcon, SearchFilledIcon, SearchIcon } from '~/Svgs'
import SearchBar from './SearchBar';


const CenterNavigationIcons = () => {
    const navigationItems = [
        { path: "/", name: "Home", Icon: HomeIcon, ActiveIcon: HomeFilledIcon, visible: true },
        { path: "/explore", name: "Explore", Icon: ExploreIcon, ActiveIcon: ExploreFilledIcon, visible: true },
        { path: "/my/library", name: "Library", Icon: LibrarayIcon, ActiveIcon: LibrarayFilledIcon, visible: true },
        { path: "/search", name: "Search", Icon: SearchIcon, ActiveIcon: SearchFilledIcon, visible: false },
    ];

    const { pathname } = useLocation()
    const navigate = useNavigate()

    return (
        <div className="flex flex-1 basis-0 items-center justify-center gap-6">
            {navigationItems.map(({ path, name, Icon, ActiveIcon, visible }) => {
                const isActive = pathname == path;
                if (!visible) return null;
                return (
                    <Link
                        key={path}
                        to={path}
                        onClick={(e) => {
                            if (isActive) {
                                e.preventDefault();
                                e.stopPropagation();
                            }
                        }}
                        className={`${isActive ? "" : "hover:bg-[#292929]"} p-2 rounded-full bg-[#1f1f1f] transition`}
                    >
                        {isActive ? <ActiveIcon width="20" height="20" /> : <Icon width="20" height="20" />}
                    </Link>
                );
            })}

            {/* Search Bar */}
            <SearchBar/>
        </div>
    )
}

export default CenterNavigationIcons