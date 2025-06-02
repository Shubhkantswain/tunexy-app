import { useEffect, useRef, useState } from 'react';
import {
    ResizablePanelGroup,
    ResizablePanel,
    ResizableHandle,
} from './ui/resizable';
import {
    Menu,
    Search,
    Home,
    Plus,
    Play,
    Heart,
    Bookmark,
    Folder,
    Maximize2,
    Headphones,
    List,
    ChevronLeft,
    ChevronRight,
    User,
    Compass,
    Library,
} from 'lucide-react';
import { LibraryIcon } from '~/Svgs';

export default function SpotifyCloneLayout({ children }: { children: React.ReactNode }) {
    const [activeTab, setActiveTab] = useState('Playlists');
    const [viewMode, setViewMode] = useState('list');
    const [panelSize, setPanelSize] = useState(22);
    const [defaultSize, setDefautSize] = useState(22)

    const tabs = ['Playlists', 'Artists', 'Albums', 'Podcasts'];

    const [isOpen, setIsOpen] = useState(false)

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

    const scrollRef = useRef<HTMLDivElement>(null);
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

    return (
        <div className="h-screen w-screen flex flex-col bg-black text-white">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-10 h-14 px-6 flex items-center justify-between bg-black/70 backdrop-blur-md">
                {/* Left Section */}
                <div className="flex items-center gap-4 text-white">
                    {/* Logo */}
                    <div className="text-lg font-bold">Logo</div>

                    {/* Navigation Icons with background */}
                    <button className="bg-neutral-800 p-2 rounded-full hover:bg-neutral-700 transition">
                        <Home className="w-5 h-5" />
                    </button>
                    <button className="bg-neutral-800 p-2 rounded-full hover:bg-neutral-700 transition">
                        <Compass className="w-5 h-5" />
                    </button>
                    <button className="bg-neutral-800 p-2 rounded-full hover:bg-neutral-700 transition">
                        <Library className="w-5 h-5" />
                    </button>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-6">
                    {/* Arrows */}
                    <button className="rounded-full  transition">
                        <ChevronLeft className="w-5 h-5 text-white" />
                    </button>
                    <button className=" rounded-full  transition">
                        <ChevronRight className="w-5 h-5 text-white" />
                    </button>

                    {/* Search Bar */}
                    <div className="flex items-center bg-neutral-800 px-3 py-2 rounded-sm gap-2">
                        <Search className="w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-transparent outline-none text-sm text-white placeholder-gray-400 w-32 sm:w-48"
                        />
                    </div>

                    {/* Account Icon */}
                    <button className="bg-neutral-800 p-2 rounded-full hover:bg-neutral-700 transition">
                        <User className="text-white w-5 h-5" />
                    </button>
                </div>
            </header>

            {/* Content */}
            <div className="flex-1 pt-14 pb-1 overflow-hidden hidden md:flex">
                <div className="flex w-full h-full px-2.5"> {/* Equal left and right padding */}
                    <ResizablePanelGroup
                        direction="horizontal"
                        onLayout={(sizes) => setPanelSize(sizes[0])}
                        className="flex w-full gap-1" // Equal spacing between sidebar and content
                    >
                        {/* Sidebar */}
                        <ResizablePanel defaultSize={25} minSize={7} maxSize={35}>
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
                                        <div className="grid place-items-center mt-5 w-full space-y-4">
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
                                <div className={`${isScrolled ? "shadow-[0_4px_10px_rgba(0,0,0,0.6)]" : ""} px-4 pb-3 mt-2`}>
                                    {
                                        panelSize > 13 ? (
                                            <div className="flex gap-2 overflow-x-auto hide-scrollbar">
                                                {tabs.map((tab) => (
                                                    <button
                                                        key={tab}
                                                        onClick={() => setActiveTab(tab)}
                                                        className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${activeTab === tab
                                                            ? 'bg-white text-black'
                                                            : 'bg-[#2a2a2a] text-white hover:bg-[#333333]'
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
                                        <div className="flex items-center justify-between px-4 pb-3">
                                            <button className="p-2 hover:bg-gray-800 rounded-full transition-colors" onClick={() => setIsOpen(true)}>
                                                <Search size={16} className="text-gray-400" />
                                            </button>
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
                                                    className={`flex items-center ${panelSize < 13 ? 'justify-center items-center' : 'gap-3'
                                                        } p-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer group`}
                                                >
                                                    {/* Icon/Avatar */}
                                                    <div className="relative flex-shrink-0">
                                                        {item.avatar ? (
                                                            <img
                                                                src={item.avatar}
                                                                alt={item.title}
                                                                className="w-12 h-12 rounded-full"
                                                            />
                                                        ) : (
                                                            <div
                                                                className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center`}
                                                            >
                                                                <item.icon size={20} className={item.iconColor} />
                                                            </div>
                                                        )}
                                                        {item.type === 'playlist' && (
                                                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                                                                <Play size={16} className="text-white fill-white" />
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

                        <ResizableHandle withHandle className='cursor-grab bg-black hover:bg-white' />

                        {/* Main Content */}
                        <ResizablePanel defaultSize={50}>
                            <main className="h-full w-full overflow-y-auto hide-scrollbar bg-[#121212] text-white rounded-md">
                                <div className="p-4">{children}</div>
                            </main>
                        </ResizablePanel>

                        {
                            isOpen && (
                                <>
                                    <ResizableHandle withHandle className='cursor-grab bg-black hover:bg-white' />
                                    <ResizablePanel defaultSize={25} minSize={0} maxSize={25}>
                                        <main className="h-full w-full overflow-y-auto hide-scrollbar bg-[#121212] text-white rounded-md">
                                            <div className="p-4">{children}</div>
                                        </main>
                                    </ResizablePanel>
                                </>
                            )
                        }

                    </ResizablePanelGroup>
                </div>
            </div>


            {/* Mobile View */}
            <div className="flex-1 pt-14 pb-20 overflow-hidden flex md:hidden">
                <main className="h-full w-full overflow-y-auto p-6 bg-gradient-to-b from-neutral-900 to-black">
                    {children}
                </main>
            </div>


        </div>
    );
}


<svg fill="#000000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M0 0h20v20H0V0zm10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-5a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path></g></svg>