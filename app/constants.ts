import { CompactGridIcon, CompactListIcon, DefaultGridIcon, DefaultListIcon, ExploreFilledIcon, ExploreIcon, HomeFilledIcon, HomeIcon, LibrarayFilledIcon, LibrarayIcon, SearchFilledIcon, SearchIcon } from '~/Svgs'
import { ViewType } from './types';
import CompactListItems from './routes/_app/_components/_desktopLayout/_mainContent/_leftSidebar/CompactListItems';
import DefaultGridItems from './routes/_app/_components/_desktopLayout/_mainContent/_leftSidebar/DefaultGridItems';
import CompactGridItems from './routes/_app/_components/_desktopLayout/_mainContent/_leftSidebar/CompactGridItems';
import DefaultListItems from './routes/_app/_components/_desktopLayout/_mainContent/_leftSidebar/DefaultListItems';
import SmallPanelLibraryItems from './routes/_app/_components/_desktopLayout/_mainContent/_leftSidebar/SmallPanelLibraryItems';
import { CompactGridItemsSkeleton, CompactListItemsSkeleton, DefaultGridItemsSkeleton, DefaultListItemsSkeleton, SmallPanelLibraryItemsSkeleton } from './components/Skeletons';


type DisplayLocation = "desktopHeader" | "mobileNavigationFooter";

interface NavigationItem {
  path: string;
  name: string;
  Icon: React.ElementType;
  ActiveIcon: React.ElementType;
  displayOn: DisplayLocation[];
}

const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    path: "/",
    name: "Home",
    Icon: HomeIcon,
    ActiveIcon: HomeFilledIcon,
    displayOn: ["desktopHeader", "mobileNavigationFooter"],
  },
  {
    path: "/explore",
    name: "Explore",
    Icon: ExploreIcon,
    ActiveIcon: ExploreFilledIcon,
    displayOn: ["desktopHeader", "mobileNavigationFooter"],
  },
  {
    path: "/my/library",
    name: "Library",
    Icon: LibrarayIcon,
    ActiveIcon: LibrarayFilledIcon,
    displayOn: ["desktopHeader", "mobileNavigationFooter"],
  },
  {
    path: "/search",
    name: "Search",
    Icon: SearchIcon,
    ActiveIcon: SearchFilledIcon,
    displayOn: ["mobileNavigationFooter"],
  },
];


type ViewDisplayLocation = "leftSidebar" | "playlistPage";

interface ViewOption {
  label: ViewType;
  icon: React.ElementType;
  displayOn: ViewDisplayLocation[];
}

const VIEW_OPTIONS: ViewOption[] = [
  {
    label: "Default List",
    icon: DefaultListIcon,
    displayOn: ["leftSidebar", "playlistPage"],
  },
  {
    label: "Compact List",
    icon: CompactListIcon,
    displayOn: ["leftSidebar", "playlistPage"],
  },
  {
    label: "Default Grid",
    icon: DefaultGridIcon,
    displayOn: ["leftSidebar"],
  },
  {
    label: "Compact Grid",
    icon: CompactGridIcon,
    displayOn: ["leftSidebar"],
  },
];


const tabs = ['Playlists', 'Artists', 'Albums', 'Podcasts'];

const VIEW_COMPONENTS = {
  "Default List": DefaultListItems,
  "Compact List": CompactListItems,
  "Default Grid": DefaultGridItems,
  "Compact Grid": CompactGridItems,
  "Small Panel": SmallPanelLibraryItems,
};

const VIEW_COMPONENTS_SKELETONS = {
  "Default List": DefaultListItemsSkeleton,
  "Compact List": CompactListItemsSkeleton,
  "Default Grid": DefaultGridItemsSkeleton,
  "Compact Grid": CompactGridItemsSkeleton,
  "Small Panel": SmallPanelLibraryItemsSkeleton,
};

const VIEW_ICONS = {
  "Compact List": CompactListIcon,
  "Default Grid": DefaultGridIcon,
  "Compact Grid": CompactGridIcon,
  "Default List": DefaultListIcon,
};

export { NAVIGATION_ITEMS, VIEW_OPTIONS, tabs, VIEW_COMPONENTS, VIEW_COMPONENTS_SKELETONS, VIEW_ICONS }