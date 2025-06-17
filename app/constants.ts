import { AccountIcon, CloseIcon, CompactGridIcon, CompactListIcon, DefaultGridIcon, DefaultListIcon, ExploreFilledIcon, ExploreIcon, HomeFilledIcon, HomeIcon, LibrarayFilledIcon, LibrarayIcon, MicIcon, PlusIcon, SearchFilledIcon, SearchIcon } from '~/Svgs'

const navigationItems = [
    {
        path: "/",
        name: "Home",
        Icon: HomeIcon,
        ActiveIcon: HomeFilledIcon,
        displayOn: ["desktopHeader", "mobileNavigationFooter"]
    },
    {
        path: "/explore",
        name: "Explore",
        Icon: ExploreIcon,
        ActiveIcon: ExploreFilledIcon,
        displayOn: ["desktopHeader", "mobileNavigationFooter"]
    },
    {
        path: "/my/library",
        name: "Library",
        Icon: LibrarayIcon,
        ActiveIcon: LibrarayFilledIcon,
        displayOn: ["desktopHeader", "mobileNavigationFooter"]
    },
    {
        path: "/search",
        name: "Search",
        Icon: SearchIcon,
        ActiveIcon: SearchFilledIcon,
        displayOn: ["mobileNavigationFooter"]
    },
];


export { navigationItems }