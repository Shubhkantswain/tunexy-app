import { Link, useLocation, useNavigate } from '@remix-run/react';
import { ExploreFilledIcon, ExploreIcon, HomeFilledIcon, HomeIcon, LibrarayFilledIcon, LibrarayIcon, SearchFilledIcon, SearchIcon } from '~/Svgs'
import SearchBar from './SearchBar';


function CenterIcons() {
    const navigationItems = [
        { path: "/", name: "Home", Icon: HomeIcon, ActiveIcon: HomeFilledIcon, visible: true },
        { path: "/explore", name: "Explore", Icon: ExploreIcon, ActiveIcon: ExploreFilledIcon, visible: true },
        { path: "/library", name: "Library", Icon: LibrarayIcon, ActiveIcon: LibrarayFilledIcon, visible: true },
        { path: "/search", name: "Search", Icon: SearchIcon, ActiveIcon: SearchFilledIcon, visible: false },

    ];

    const { pathname } = useLocation()

    return (
        <div className="flex items-center gap-6">
            {
                navigationItems.map(({ path, name, Icon, ActiveIcon, visible }) => {
                    const isActive = pathname == path;

                    if (!visible) return null

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
                            {
                                isActive ? <ActiveIcon width="20" height="20" /> : <Icon width="20" height="20" />
                            }
                        </Link>
                    )
                })
            }

          <SearchBar/>
        </div>
    )
}

export default CenterIcons