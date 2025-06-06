import { Link } from '@remix-run/react';
import React from 'react'
import { ExploreIcon, HomeIcon, LibrarayIcon, SearchIcon } from '~/Svgs';

const NavItems = () => {
    const navigationItems = [
        { path: "/", name: "Home", Icon: HomeIcon, visible: true },
        { path: "/explore", name: "Explore", Icon: ExploreIcon, visible: true },
        { path: "/library", name: "Library", Icon: LibrarayIcon, visible: true },
        { path: "/search", name: "Search", Icon: SearchIcon, visible: false },
    ];
    return (
        <>
            {navigationItems.map(({ path, name, Icon }) => {
                const isActive = false; // Replace this with actual route match if needed

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
                        className={`flex flex-col items-center text-xs ${isActive ? "text-[#25d1da]" : "text-white hover:text-[#A8EDF0]"
                            }`}
                    >
                        <Icon />
                        <span className="font-thin text-[9px]">{name}</span>
                    </Link>
                );
            })}
        </>
    )
}

export default NavItems