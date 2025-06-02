import { Link, Outlet } from '@remix-run/react'
import React, { useState } from 'react'
import { Drawer, DrawerContent } from '~/components/ui/drawer'
import { Slider } from '~/components/ui/slider'
import { DownArrowIcon, ExploreIcon, HomeIcon, LibrarayIcon, MoreIcon, NextIcon, PauseIcon, PlayIcon, PlusIcon, PrevIcon, QueueIcon, SearchIcon, SkipBackwardIcon, SkipForwardIcon, VolumeIcon } from '~/Svgs'

function MobileLayout() {
    const navLinks = [
        { to: '/', label: 'Home', icon: <HomeIcon />, showInHeader: true },
        { to: '/explore', label: 'Explore', icon: <ExploreIcon />, showInHeader: true },
        { to: '/library', label: 'Library', icon: <LibrarayIcon />, showInHeader: true },
        { to: '/search', label: 'Search', icon: <SearchIcon />, showInHeader: false },
    ]

    const [isOpen, setIsOpen] = useState(false)

    return (
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
                <Outlet />
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
                                    <QueueIcon />
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
                                            <PlusIcon width="24" height="24" />
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
    )
}

export default MobileLayout