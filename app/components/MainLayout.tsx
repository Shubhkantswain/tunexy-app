import { useEffect, useRef, useState } from 'react';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from './ui/resizable';
import { ScrollArea } from './ui/scroll-area';
import { Search, Library, Plus, Heart, Music2, Home, Compass, List, Play, Headphones, Folder } from 'lucide-react';
import useIsLargeScreen from '~/hooks/UseMediaQuery';
import {
    SkipBack,
    SkipForward,
    Volume2,
    RotateCcw,
    RotateCw,
    User,
} from "lucide-react";
import { DownArrowIcon, ExploreIcon, HeartIconFilled, HomeIcon, LibraryIcon, ListIcon, MoreIcon, NextIcon, PauseIcon, PlayIcon, PrevIcon, SearchIcon, SkipBackwardIcon, SkipForwardIcon, VolumeIcon } from '~/Svgs';
import { Link } from '@remix-run/react';
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from './ui/drawer';
import { Slider } from './ui/slider';

export default function SpotifyCloneLayout({ children }: { children: React.ReactNode }) {
    const libraryItems = [
        {
            id: 1,
            type: 'playlist',
            title: 'Liked Songs',
            subtitle: 'Playlist • 73 songs',
            icon: Heart,
            color: 'bg-gradient-to-br from-purple-500 to-blue-600',
            iconColor: 'text-white',
        },
        {
            id: 1,
            type: 'playlist',
            title: 'Liked Songs',
            subtitle: 'Playlist • 73 songs',
            icon: Heart,
            color: 'bg-gradient-to-br from-purple-500 to-blue-600',
            iconColor: 'text-white',
        }, {
            id: 1,
            type: 'playlist',
            title: 'Liked Songs',
            subtitle: 'Playlist • 73 songs',
            icon: Heart,
            color: 'bg-gradient-to-br from-purple-500 to-blue-600',
            iconColor: 'text-white',
        },
        {
            id: 2,
            type: 'podcast',
            title: 'Your Episodes',
            subtitle: 'Saved & downloaded episodes',
            icon: Headphones,
            color: 'bg-green-600',
            iconColor: 'text-white',
        },
        {
            id: 3,
            type: 'folder',
            title: 'New Folder',
            subtitle: '0 playlists',
            icon: Folder,
            color: 'bg-gray-700',
            iconColor: 'text-gray-400',
        },
        {
            id: 4,
            type: 'artist',
            title: 'Mithoon',
            subtitle: 'Artist',
            avatar: 'data:image/svg+xml;base64,...',
            color: null,
            iconColor: null,
        },
        {
            id: 5,
            type: 'artist',
            title: 'Pritam',
            subtitle: 'Artist',
            avatar: 'data:image/svg+xml;base64,...',
            color: null,
            iconColor: null,
        },
    ];
    const tabs = ['Playlists', 'Artists', 'Albums', 'Podcasts'];
    const scrollRef = useRef<HTMLDivElement>(null);


    const [panelSize, setPanelSize] = useState(22);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = scrollRef.current?.scrollTop || 0;
            setIsScrolled(currentScrollTop > 0);
        };

        const div = scrollRef.current;
        if (div) {
            div.addEventListener("scroll", handleScroll);
        }

        // Cleanup
        return () => {
            div?.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const isLgScreen = useIsLargeScreen()
    const minSize = isLgScreen ? 7 : 12

    const navLinks = [
        { to: '/', label: 'Home', icon: <HomeIcon />, showInHeader: true },
        { to: '/explore', label: 'Explore', icon: <ExploreIcon />, showInHeader: true },
        { to: '/library', label: 'Library', icon: <LibraryIcon />, showInHeader: true },
        { to: '/search', label: 'Search', icon: <SearchIcon />, showInHeader: false },
    ]

    const [isOpen, setIsOpen] = useState(false)


    const categories = ["All", "Music", "Podcasts"];
    const [activeCategory, setActiveCategory] = useState("All");

    return (
        <>
            <div className="flex-col h-screen bg-black text-white hidden md:flex">
                {/* Header */}
                <header className="items-center justify-between px-6 py-2 bg-black hidden md:flex">
                    {/* Left: Logo */}
                    <div className="flex items-center gap-4">
                        <button className=" flex items-center justify-center p-0">
                            <svg
                                width="35"
                                height="35"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M9.772 4.28c.56-.144 1.097.246 1.206.814.1.517-.263 1.004-.771 1.14A7 7 0 1 0 19 12.9c.009-.5.4-.945.895-1 .603-.067 1.112.371 1.106.977L21 13c0 .107-.002.213-.006.32a.898.898 0 0 1 0 .164l-.008.122a9 9 0 0 1-9.172 8.392A9 9 0 0 1 9.772 4.28z"
                                        fill="#3babdb"
                                    ></path>
                                    <path
                                        d="M15.93 13.753a4.001 4.001 0 1 1-6.758-3.581A4 4 0 0 1 12 9c.75 0 1.3.16 2 .53 0 0 .15.09.25.17-.1-.35-.228-1.296-.25-1.7a58.75 58.75 0 0 1-.025-2.035V2.96c0-.52.432-.94.965-.94.103 0 .206.016.305.048l4.572 1.689c.446.145.597.23.745.353.148.122.258.27.33.446.073.176.108.342.108.801v1.16c0 .518-.443.94-.975.94a.987.987 0 0 1-.305-.049l-1.379-.447-.151-.05c-.437-.14-.618-.2-.788-.26a5.697 5.697 0 0 1-.514-.207 3.53 3.53 0 0 1-.213-.107c-.098-.05-.237-.124-.521-.263L16 6l.011 7c0 .255-.028.507-.082.753h.001z"
                                        fill="#3babdb"
                                    ></path>
                                </g>
                            </svg>
                        </button>
                    </div>

                    {/* Center: Icons + Search */}
                    <div className="flex items-center gap-6">
                        <button className="p-2 rounded-full bg-[#1f1f1f] hover:bg-[#292929] text-[#DCDCDC] hover:text-[#ffffff] transition">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M12 18V15"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M10.07 2.81997L3.14002 8.36997C2.36002 8.98997 1.86002 10.3 2.03002 11.28L3.36002 19.24C3.60002 20.66 4.96002 21.81 6.40002 21.81H17.6C19.03 21.81 20.4 20.65 20.64 19.24L21.97 11.28C22.13 10.3 21.63 8.98997 20.86 8.36997L13.93 2.82997C12.86 1.96997 11.13 1.96997 10.07 2.81997Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </g>
                            </svg>
                        </button>
                        <button className="p-2 rounded-full bg-[#1f1f1f] hover:bg-[#292929] text-[#DCDCDC] hover:text-[#ffffff] transition">
                            {/* <Compass size={20} /> */}
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-labelledby="exploreIconTitle"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="square"
                                strokeLinejoin="miter"
                                fill="none"
                                color="currentColor"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <title id="exploreIconTitle">Explore</title>
                                    <polygon points="14.121 14.121 7.05 16.95 9.879 9.879 16.95 7.05"></polygon>
                                    <circle cx="12" cy="12" r="10"></circle>
                                </g>
                            </svg>
                        </button>
                        <button className="p-2 rounded-full bg-[#1f1f1f] hover:bg-[#292929] text-[#DCDCDC] hover:text-[#ffffff] transition">
                            {/* <Library size={20} /> */}
                            <svg
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M2.38351 13.793C1.93748 10.6294 1.71447 9.04765 2.66232 8.02383C3.61017 7 5.29758 7 8.67239 7H15.3276C18.7024 7 20.3898 7 21.3377 8.02383C22.2855 9.04765 22.0625 10.6294 21.6165 13.793L21.1935 16.793C20.8437 19.2739 20.6689 20.5143 19.7717 21.2572C18.8745 22 17.5512 22 14.9046 22H9.09536C6.44881 22 5.12553 22 4.22834 21.2572C3.33115 20.5143 3.15626 19.2739 2.80648 16.793L2.38351 13.793Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    />
                                    <path
                                        d="M12 17C12 17.8284 11.3284 18.5 10.5 18.5C9.67157 18.5 9 17.8284 9 17C9 16.1716 9.67157 15.5 10.5 15.5C11.3284 15.5 12 16.1716 12 17ZM12 17V10.5C12 12.1569 13.8954 13.5 15 13.5"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M19.5617 7C19.7904 5.69523 18.7863 4.5 17.4617 4.5H6.53788C5.21323 4.5 4.20922 5.69523 4.43784 7"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    />
                                    <path
                                        d="M17.4999 4.5C17.5283 4.24092 17.5425 4.11135 17.5427 4.00435C17.545 2.98072 16.7739 2.12064 15.7561 2.01142C15.6497 2 15.5194 2 15.2588 2H8.74099C8.48035 2 8.35002 2 8.24362 2.01142C7.22584 2.12064 6.45481 2.98072 6.45704 4.00434C6.45727 4.11135 6.47146 4.2409 6.49983 4.5"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    />
                                </g>
                            </svg>

                        </button>

                        <div className="flex items-center bg-white px-6 py-2 rounded-full w-[280px] cursor-pointer">
                            <input
                                readOnly
                                type="text"
                                placeholder="Search"
                                className="bg-transparent outline-none text-sm placeholder:text-zinc-400 flex-1 cursor-pointer"
                            />
                            <Search size={16} className="text-zinc-400 ml-2" />
                        </div>
                    </div>

                    {/* Right: Premium + Account */}
                    <div className="flex items-center gap-4">
                        <button className='p-2 rounded-full bg-[#1f1f1f] hover:bg-[#292929] text-[#DCDCDC] hover:text-[#ffffff]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" /></svg>
                        </button>

                    </div>
                </header>


                {/* Main Content with Resizable Sidebar */}
                <div className="flex-1 pb-1 overflow-hidden hidden md:flex">
                    <div className="flex w-full h-full px-1">
                        <ResizablePanelGroup
                            direction="horizontal"
                            onLayout={(sizes) => setPanelSize(sizes[0])}
                            className="flex w-full gap-0.5" // Equal spacing between sidebar and content
                        >
                            {/* Left Sidebar with Library */}
                            <ResizablePanel defaultSize={25} minSize={minSize} maxSize={35}>
                                <div className="h-full bg-[#121212] flex flex-col text-white rounded-md">
                                    {/* Header */}
                                    {
                                        panelSize > 13 ? (
                                            <div className="flex items-center justify-between p-4 pb-2">
                                                <h2 className="text-sm font-semibold text-gray-200 flex items-center gap-2">
                                                    Your Library
                                                </h2>

                                                {panelSize > 19 ? (
                                                    <div className="flex items-center gap-2">
                                                        <button className="flex items-center gap-1 px-4 py-2 hover:bg-[#282828] bg-[#1f1f1f] rounded-full transition-colors">
                                                            <Plus size={18} />
                                                            <span className="text-xs text-white font-semibold">Create</span>
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <button className="hover:bg-[#282828] bg-[#1f1f1f] text-white p-2 rounded-full transition-colors">
                                                        <Plus size={18} />
                                                    </button>
                                                )}
                                            </div>
                                        ) : (
                                            <div className="grid place-items-center mt-5 w-full space-y-2.5 -mb-3">
                                                <button className=" text-white p-2 rounded-full transition-colors">
                                                    <LibraryIcon width="27" height="27" />
                                                </button>
                                                <button className="hover:bg-[#282828] bg-[#1f1f1f] text-white p-2 rounded-full transition-colors">
                                                    <Plus size={20} />
                                                </button>
                                            </div>

                                        )
                                    }


                                    {/* Tabs */}
                                    <div className={`${isScrolled ? "shadow-[0_4px_10px_rgba(0,0,0,0.6)]" : ""} px-4 pb-3 mt-3`}>
                                        {
                                            panelSize > 13 ? (
                                                <div className="flex gap-6 overflow-x-auto hide-scrollbar">
                                                    {tabs.map((tab) => (
                                                        <button
                                                            key={tab}
                                                            // onClick={() => setActiveTab(tab)}
                                                            className={`rounded-full text-xs font-medium whitespace-nowrap transition-colors ${"Playlists" === tab
                                                                ? 'text-[#3babdb]'
                                                                : 'text-white '
                                                                }`}
                                                        >
                                                            {tab}
                                                        </button>
                                                    ))}
                                                </div>
                                            ) : (
                                                <>


                                                </>
                                            )
                                        }
                                    </div>

                                    <div className='overflow-y-auto hide-scrollbar'
                                        ref={scrollRef}
                                    >
                                        {/* Search & View Options */}
                                        {panelSize > 13 && (
                                            <div className="flex items-center justify-between px-4 pb-3 mt-3">
                                                {/* Search bar */}
                                                <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-800 rounded-md w-full mr-2">
                                                    <Search size={16} className="text-gray-400" />
                                                    <input
                                                        type="text"
                                                        placeholder="Search in Your Library"
                                                        className="bg-transparent text-sm text-white placeholder-gray-400 focus:outline-none w-full"
                                                    />
                                                </div>

                                                {/* List icon button remains */}
                                                <button className="p-1.5 hover:bg-gray-800 rounded-full transition-colors">
                                                    <List size={16} className="text-gray-400" />
                                                </button>
                                            </div>

                                        )}

                                        {/* Library Items */}
                                        <div className="flex-1 px-2">
                                            <div className="space-y-1">
                                                {libraryItems.map((item) => (
                                                    <div
                                                        key={item.id}
                                                        className={`${panelSize < 13
                                                            ? 'flex justify-center'
                                                            : 'flex items-center gap-3 p-2 rounded-sm hover:bg-[#1F1F1F] transition-colors'
                                                            } cursor-pointer group`}
                                                    >
                                                        {/* Icon/Avatar */}
                                                        <div className={`relative flex-shrink-0 ${panelSize < 13
                                                            ? 'p-2 rounded-sm hover:bg-[#1F1F1F] transition-colors'
                                                            : ''
                                                            }`}>
                                                            {item.avatar ? (
                                                                <img
                                                                    src={item.avatar}
                                                                    alt={item.title}
                                                                    className="w-12 h-12 rounded-full"
                                                                />
                                                            ) : (
                                                                <div
                                                                    className={`w-11 h-11 rounded-sm ${item.color} flex items-center justify-center`}
                                                                >
                                                                    <item.icon size={20} className={item.iconColor} />
                                                                </div>
                                                            )}

                                                        </div>

                                                        {/* Content */}
                                                        {panelSize > 13 && (
                                                            <div className="flex-1 min-w-0">
                                                                <div className="text-white font-medium text-sm truncate">
                                                                    {item.title}
                                                                </div>
                                                                <div className="text-gray-400 text-xs truncate">
                                                                    {item.subtitle}
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* Arrow for folders */}
                                                        {panelSize > 13 && item.type === 'folder' && (
                                                            <div className="text-gray-400">
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                                                    <path d="M6 12l4-4-4-4v8z" />
                                                                </svg>
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </ResizablePanel>



                            {/* Resize Handle */}
                            <ResizableHandle withHandle className="bg-transparent hover:bg-white" />

                            {/* Main Content */}
                            <ResizablePanel defaultSize={75}>
                                <div className="h-full bg-[#121212] rounded-md custom-scrollbar overflow-y-auto">
                                    <div className="p-4 sm:p-6 md:p-8 max-w-[90rem] mx-auto ">{children}</div>
                                   

                                </div>
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </div>
                </div>

                <footer className="w-full bg-black text-white items-center justify-between px-4 py-3 hidden md:flex">
                    {/* Left: Episode Info */}
                    <div className="flex items-center gap-3">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ee/Mahabharata_BR_Chopra.jpg/220px-Mahabharata_BR_Chopra.jpg"
                            alt="cover"
                            className="w-12 h-12 object-cover rounded-md"
                        />
                        <div className="text-sm">
                            <h3 className="font-semibold line-clamp-1">
                                Mahabharata Episode 1: Beginnings
                            </h3>
                            <p className="text-xs text-gray-400">The Stories of Mahabharata</p>
                        </div>
                    </div>

                    {/* Center: Controls */}
                    <div className="flex items-center gap-6">
                        <SkipBack className="w-5 h-5 cursor-pointer" />
                        <RotateCcw className="w-5 h-5 cursor-pointer" />
                        <button className="bg-gray-800 p-2 rounded-full">
                            <Play className="text-white w-5 h-5" />
                        </button>
                        <RotateCw className="w-5 h-5 cursor-pointer" />
                        <SkipForward className="w-5 h-5 cursor-pointer" />
                    </div>

                    {/* Right: Volume */}
                    <div>
                        <Volume2 className="w-5 h-5 cursor-pointer" />
                    </div>
                </footer>
            </div>

            <div className="bg-[#0E1112] text-white min-h-screen block md:hidden">
                {/* Fixed Header */}
                <header className="fixed top-0 left-0 right-0 z-10 bg-black/80 backdrop-blur-xl h-[62px] border-b border-[#2E3030]">
                    <div className="w-full h-full flex items-center justify-between px-6">
                        {/* Logo on the left */}
                        <div className="font-bold text-white">
                            <svg
                                width="35"
                                height="35"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M9.772 4.28c.56-.144 1.097.246 1.206.814.1.517-.263 1.004-.771 1.14A7 7 0 1 0 19 12.9c.009-.5.4-.945.895-1 .603-.067 1.112.371 1.106.977L21 13c0 .107-.002.213-.006.32a.898.898 0 0 1 0 .164l-.008.122a9 9 0 0 1-9.172 8.392A9 9 0 0 1 9.772 4.28z"
                                        fill="#3babdb"
                                    ></path>
                                    <path
                                        d="M15.93 13.753a4.001 4.001 0 1 1-6.758-3.581A4 4 0 0 1 12 9c.75 0 1.3.16 2 .53 0 0 .15.09.25.17-.1-.35-.228-1.296-.25-1.7a58.75 58.75 0 0 1-.025-2.035V2.96c0-.52.432-.94.965-.94.103 0 .206.016.305.048l4.572 1.689c.446.145.597.23.745.353.148.122.258.27.33.446.073.176.108.342.108.801v1.16c0 .518-.443.94-.975.94a.987.987 0 0 1-.305-.049l-1.379-.447-.151-.05c-.437-.14-.618-.2-.788-.26a5.697 5.697 0 0 1-.514-.207 3.53 3.53 0 0 1-.213-.107c-.098-.05-.237-.124-.521-.263L16 6l.011 7c0 .255-.028.507-.082.753h.001z"
                                        fill="#3babdb"
                                    ></path>
                                </g>
                            </svg>
                        </div>

                        {/* Account Icon on the right */}
                        <button className='p-2 rounded-full bg-[#1f1f1f] hover:bg-[#292929] text-[#DCDCDC] hover:text-[#ffffff]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" /></svg>
                        </button>
                    </div>
                </header>

                {/* Scrollable Content Area */}
                <main className="pt-[80px] p-4 pb-[150px]">
                    {children}
                </main>

                {
                    true && (
                        <footer
                            onClick={() => setIsOpen(true)}
                            className="fixed bottom-16 mb-2.5 rounded-md left-0 right-0 z-20 h-[60px] w-[95%] mx-auto overflow-hidden">
                            {/* Background with blur */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src="https://m.media-amazon.com/images/I/81NhNYtCisL._SX472_SY472_BL0_QL100__UX56_FMwebp_QL85_.jpg"
                                    alt="Background"
                                    className="w-full h-full object-cover blur-md opacity-60"
                                />
                            </div>

                            {/* Content overlay */}
                            <div className="relative z-10 bg-[#2B2B2B]/50 backdrop-blur-xl h-full w-full">
                                <div className="max-w-[90rem] mx-auto px-4 w-full h-full flex items-center justify-between text-white">
                                    {/* Song Info */}
                                    <div className="flex items-center gap-4">
                                        <img
                                            src="https://m.media-amazon.com/images/I/81NhNYtCisL._SX472_SY472_BL0_QL100__UX56_FMwebp_QL85_.jpg"
                                            alt="Song Thumbnail"
                                            className="w-11 h-11 rounded-md object-cover"
                                        />
                                        <div className="flex flex-col leading-tight">
                                            <span className="text-sm font-medium">Holiday - A COLORS SHOW</span>
                                            <span className="text-xs text-gray-400">Hemamand, COLORS</span>
                                        </div>
                                    </div>

                                    {/* Controls */}
                                    <div className="flex items-center gap-6">
                                        <button className="hover:opacity-80">
                                            <svg
                                                data-encore-id="icon"
                                                role="img"
                                                aria-hidden="true"
                                                className="e-9921-icon e-9921-baseline"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                height="24"
                                                fill="currentColor"
                                            >
                                                <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z" />
                                            </svg>
                                        </button>
                                        <button className=" text-white rounded-full flex items-center justify-center hover:scale-105 transition">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs><path id="ic_playback_next-a" d="M18,3 L16,3 C15.45,3 15,3.45 15,4 L15,10.067 L6.57,4.182 C6.26,3.97 5.87,3.939 5.54,4.111 C5.21,4.293 5,4.636 5,5.009 L5,18.99 C5,19.363 5.21,19.707 5.54,19.878 C5.68,19.96 5.84,20 6,20 C6.2,20 6.4,19.939 6.57,19.818 L15,13.923 L15,20 C15,20.55 15.45,21 16,21 L18,21 C18.55,21 19,20.55 19,20 L19,4 C19,3.45 18.55,3 18,3 Z"></path></defs><g fill-rule="evenodd" fill="transparent"><rect width="24" height="24"></rect><use href="#ic_playback_next-a" fill="currentColor"></use></g></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </footer>

                    )
                }
                {/* Fixed Playback Footer */}

                <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
                    <DrawerContent className="bg-black h-full w-full">
                        <div
                            className={`hide-scrollbar fixed inset-0 bg-black overflow-y-auto z-50`}
                        >
                            {/* Background Image */}
                            <div
                                className="fixed inset-0 z-0 opacity-50"
                                style={{
                                    backgroundImage: `url('https://m.media-amazon.com/images/I/518f7hQbCqL._SX354_SY354_BL0_QL100__UX358_FMwebp_QL85_.jpg')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    filter: 'blur(100px)',
                                }}
                            />

                            <div className="relative z-10 max-w-3xl mx-auto min-h-full">
                                {/* Header */}
                                <div className="p-4 flex items-center justify-between relative">
                                    <button
                                        className="relative group hover:text-[#93D0D5] text-white transition-colors duration-300"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <DownArrowIcon />
                                    </button>

                                    <button className="relative group text-white hover:text-[#93D0D5] transition-colors duration-300">
                                        <ListIcon />
                                    </button>
                                </div>

                                <div className="px-8 pt-8 -mt-7">
                                    <div
                                        className={`aspect-square w-full max-w-sm lg:max-w-[300px] lg:ml-0 mx-auto rounded-lg mb-8 will-change-transform transition-transform duration-500 ease-out transform wave-container ${true ? 'scale-100 playing' : 'scale-75 lg:scale-95'
                                            }`}
                                    >
                                        <div className="relative w-full h-full mt-3">
                                            <img
                                                src={
                                                    'https://m.media-amazon.com/images/I/518f7hQbCqL._SX354_SY354_BL0_QL100__UX358_FMwebp_QL85_.jpg'
                                                }
                                                alt="Album art"
                                                className="absolute inset-0 w-full h-full object-cover rounded-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <div className="space-y-1 text-left flex-1 min-w-0">
                                            <div className="relative group">
                                                <h2 className="text-2xl md:text-3xl text-white font-medium transition-all duration-300 truncate overflow-hidden max-w-full">
                                                    {'trackDetails.title'}
                                                </h2>
                                            </div>

                                            <div className="relative group">
                                                <p className="text-zinc-400 transition-all duration-300 truncate overflow-hidden max-w-full">
                                                    {'trackDetails.singer'}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-9 items-center">
                                            <button
                                                className={`relative group rounded-full transition-all duration-300 group ${false ? 'text-white' : 'text-[#25d1da]'
                                                    } hover:text-[#93D0D5]`}
                                            >
                                                <HeartIconFilled width="24" height="24" />
                                            </button>

                                            <button
                                                className="relative group rounded-full text-white hover:text-[#93D0D5] transition-all duration-300 group rotate-90"
                                            >
                                                <MoreIcon width="24" height="24" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Progress bar */}
                                <div className="px-8 mt-8 w-full max-w-3xl mx-auto">
                                    <Slider step={1} className="w-full hover:cursor-grab active:cursor-grabbing" nowPlaying={true} />
                                    <div className="flex justify-between mt-2 text-xs text-zinc-400">
                                        <span>1:45</span>
                                        <span>4:55</span>
                                    </div>
                                </div>

                                <div className="px-4 sm:px-8 py-8 lg:py-12 w-full max-w-3xl mx-auto">
                                    {/* Playback Controls */}
                                    <div className="flex items-center justify-center space-x-3 sm:space-x-4 md:space-x-5 lg:space-x-6 xl:space-x-8 mb-6">
                                        <button className="relative group rounded-full p-2 text-white hover:text-[#93D0D5] transition-colors">
                                            <SkipBackwardIcon width="24" height="24" />
                                        </button>

                                        <button
                                            className={`p-2 relative group rounded-full ${true ? 'opacity-100 hover:text-[#93D0D5]' : 'opacity-50 cursor-not-allowed'
                                                } transition-colors text-white hover:text-[#93D0D5]`}
                                        >
                                            <PrevIcon width="24" height="24" />
                                        </button>

                                        <div className="relative group rounded-full">
                                            <button className="w-16 h-16 opacity-100 hover:scale-105 bg-white rounded-full flex items-center justify-center transition-transform">
                                                {true ? <PauseIcon width="30" height="30" /> : <PlayIcon width="30" height="30" />}
                                            </button>
                                        </div>

                                        <button
                                            className={`p-2 relative group rounded-full ${true ? 'opacity-100 hover:text-[#93D0D5]' : 'opacity-50 cursor-not-allowed'
                                                } transition-colors text-white`}
                                        >
                                            <NextIcon width="24" height="24" />
                                        </button>

                                        <button className="p-2 relative group rounded-full text-white hover:text-[#93D0D5] transition-colors">
                                            <SkipForwardIcon width="24" height="24" />
                                        </button>
                                    </div>

                                    {/* Volume Control */}
                                    <div className="flex justify-center items-center w-full px-8">
                                        <div className="flex items-center gap-2 w-full max-w-md">
                                            <div className="text-white">
                                                <VolumeIcon />
                                            </div>
                                            <div className="flex-1 backdrop-blur-sm rounded-full relative cursor-pointer">
                                                <Slider step={1} className="w-full hover:cursor-grab active:cursor-grabbing" nowPlaying={true} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </DrawerContent>
                </Drawer>

                {/* Fixed Mobile Navigation Footer */}
                <footer className="fixed bottom-0 h-[72px] left-0 right-0 z-10 bg-black/80 backdrop-blur-xl border-t border-[#2E3030]">
                    <nav className="flex justify-around items-center h-full">
                        {navLinks.map(({ to, label, icon }) => {
                            const isActive = false

                            return (
                                <Link
                                    key={to}
                                    to={to}
                                    onClick={(e) => {
                                        if (isActive) {
                                            e.preventDefault()
                                            e.stopPropagation()
                                        }
                                    }}
                                    className={`flex flex-col items-center text-xs ${isActive ? 'text-[#25d1da]' : 'text-white hover:text-[#A8EDF0]'
                                        }`}
                                >
                                    {icon}
                                    <span className="font-thin text-[9px]">{label}</span>
                                </Link>
                            )
                        })}
                    </nav>
                </footer>

            </div>
        </>

    );
}