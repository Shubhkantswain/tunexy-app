import { Outlet } from '@remix-run/react';
import { useState, useEffect, useRef, ReactNode } from 'react';

const MobileLayout = () => {
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setShowMenu(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        // Reset scroll position to top on component mount
        window.scrollTo(0, 0);
    }, []);
    const tabs = ["All", "Music", "Podcasts"];
    const activeTab = "All";

    const categories = [
        "Kabir singh all songs",
        "Atif Aslam All Songs",
        "Bollywood Sundowner",
        "Khamoshiyan",
        "Trending Now India",
        "Mohit Chauhan All Songs",
        "Bollywood Dance Music",
        "pov: you're in love"
    ];

    const musicCards = [
        { title: "New Music Friday", highlight: false },
        { title: "Release Radar", highlight: false },
        { title: "Latest Love Tamil", highlight: false },
        { title: "Naya Indiestan", highlight: true },
        { title: "I-POP Friday", highlight: false }
    ];

    return (
        <div className="block md:hidden min-h-screen text-white relative">
            {/* Header */}
            <header className="fixed top-0 left-0 w-full h-[55px] bg-gray-900 flex items-center justify-between px-6 z-50 shadow-md">
                <div className="text-lg font-semibold">Header (10%)</div>

                {/* Account Icon and Dropdown */}
                <div className="relative" ref={menuRef}>
                    <button
                        className="p-2 rounded-full hover:bg-gray-700"
                        onClick={() => setShowMenu(prev => !prev)}
                    >
                        {/* User SVG */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-white"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5.121 17.804A9.004 9.004 0 0112 15a9.004 9.004 0 016.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                    </button>

                    {showMenu && (
                        <div className="absolute right-0 mt-2 w-56 bg-[#181818] rounded shadow-lg z-50 text-sm border border-gray-700">
                            {["Account", "Profile", "Upgrade to Premium", "Support", "Download"].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center justify-between px-4 py-2 hover:bg-gray-700 cursor-pointer"
                                >
                                    <span>{item}</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7v7m0-7L10 14" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 5v14h14v-7" />
                                    </svg>
                                </div>
                            ))}
                            <div className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Settings</div>
                            <hr className="border-gray-700" />
                            <div className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Log out</div>
                        </div>
                    )}
                </div>
            </header>




            {/* Footer */}
            <footer className="fixed bottom-0 left-0 w-full h-[70px] bg-gray-800 flex items-center justify-center z-50 shadow-md">
                Footer (15%)
            </footer>

            {/* Main Content */}
            <div className="mt-[55px] mb-[70px] bg-[#121212]">
                {/* Fireflies */}
                
                <div className="p-0">

                    <div className='p-0'>

                        {/* {children} */}
                        <Outlet/>
                       
                      

                    </div>

                </div>
            </div>
        </div>
    );
};

export default MobileLayout;