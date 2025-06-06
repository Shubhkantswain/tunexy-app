import { Link, useLocation } from '@remix-run/react';
import React from 'react'
import { ExploreFilledIcon, ExploreIcon, HomeFilledIcon, HomeIcon, LibrarayFilledIcon, LibrarayIcon, SearchIcon } from '~/Svgs';

const NavItems = () => {
    const navigationItems = [
        { path: "/", name: "Home", Icon: HomeIcon, ActiveIcon: HomeFilledIcon, visible: true },
        { path: "/explore", name: "Explore", Icon: ExploreIcon, ActiveIcon: ExploreFilledIcon, visible: true },
        { path: "/library", name: "Library", Icon: LibrarayIcon, ActiveIcon: LibrarayFilledIcon, visible: true },
        { path: "/search", name: "Search", Icon: SearchIcon, ActiveIcon: SearchIcon, visible: false },

    ];

    const { pathname } = useLocation()

    return (
        <>
            {navigationItems.map(({ path, name, Icon, ActiveIcon }) => {
                const isActive = pathname == path; // Replace this with actual route match if needed

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
                        className={`flex flex-col items-center text-xs
                            }`}
                    >
                        {
                            isActive ? <ActiveIcon /> : <Icon />
                        }
                        <span className={`${isActive ? "font-bold" : "font-thin"} text-[9px]`}>{name}</span>
                    </Link>
                );
            })}
        </>
    )
}

export default NavItems