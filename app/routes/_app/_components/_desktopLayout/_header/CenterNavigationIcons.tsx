import { Link, useLocation } from '@remix-run/react';
import SearchBar from './SearchBar';
import { navigationItems } from '~/constants';


const CenterNavigationIcons = () => {
    const { pathname } = useLocation()

    return (
        <div className="flex flex-1 basis-0 items-center justify-center gap-6">
            {navigationItems.map(({ path, name, Icon, ActiveIcon, displayOn }) => {
                const layoutContext = "desktopHeader"; // or "desktopHeader"
                const isActive = pathname === path;

                // If this item shouldn't show in the current layout, return null
                if (!displayOn.includes(layoutContext)) return null;

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
                        className={`${isActive ? "" : "hover:bg-[#292929]"
                            } p-2 rounded-full bg-[#1f1f1f] transition`}
                    >
                        {isActive ? (
                            <ActiveIcon width="20" height="20" />
                        ) : (
                            <Icon width="20" height="20" />
                        )}
                    </Link>
                );
            })}


            {/* Search Bar */}
            <SearchBar />
        </div>
    )
}

export default CenterNavigationIcons