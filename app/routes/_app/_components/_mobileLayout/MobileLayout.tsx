import { Link, Outlet, useLocation } from '@remix-run/react'
import React, { useEffect, useRef, useState } from 'react'
import { Slider } from '~/components/ui/slider'
import { AccountIcon, DownArrowIcon, ExploreFilledIcon, ExploreIcon, HomeFilledIcon, HomeIcon, LibrarayFilledIcon, LibrarayIcon, LogoIcon, MoreIcon, NextIcon, PauseIcon, PlayIcon, PlusIcon, PrevIcon, QueueIcon, SearchFilledIcon, SearchIcon, SkipBackwardIcon, SkipForwardIcon, VolumeIcon } from '~/Svgs'
import { Drawer, DrawerContent } from '~/components/ui/drawer'
import Logo from '../_desktopLayout/_header/Logo'
import UserProfile from '../_desktopLayout/_header/UserProfile'
import useDominantColor from '~/hooks/useDominantColor'

function MobileLayout() {
  const [isScreenExpanded, setIsScreenExpanded] = useState(false)

  const screenExpand = () => setIsScreenExpanded(true);
  const screenMinimize = () => setIsScreenExpanded(false);

  const navigationItems = [
    { path: "/", name: "Home", Icon: HomeIcon, ActiveIcon: HomeFilledIcon, visible: true },
    { path: "/explore", name: "Explore", Icon: ExploreIcon, ActiveIcon: ExploreFilledIcon, visible: true },
    { path: "/my/library", name: "Library", Icon: LibrarayIcon, ActiveIcon: LibrarayFilledIcon, visible: true },
    { path: "/search", name: "Search", Icon: SearchIcon, ActiveIcon: SearchFilledIcon, visible: false },

  ];

  const { pathname } = useLocation()

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const [count, setCount] = useState(0)

  const { dominantColor } = useDominantColor("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU0de2-3rXVqsxmRUmLjAGvIpG7lq6s_9OFw&s")


  return (
    <div className="bg-[#0E1112] text-white min-h-screen block md:hidden">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl h-[62px] border-b border-[#2E3030]">
        <div className="w-full h-full flex items-center justify-between px-6">
          {/* Logo on the left */}
          <Logo />

          {/* Account Icon on the right */}
          <UserProfile />
        </div>
      </header>

      {/* Scrollable Content Area */}
      <main className="pt-[62px] pb-[135px] h-full bg-[#121212]">
        <Outlet />
      </main>

      {/* Fixed Playback Footer */}
      {/* <MobileMiniPlayer onScreenExpand={screenExpand} /> we are passing it as a props now it become a action that why we prefer on<action> format */}
      {
        true && (
          <footer
            onClick={screenExpand}
            className="fixed bottom-16 mb-2.5 rounded-md left-0 right-0 z-20 h-[60px] w-[95%] mx-auto overflow-hidden bg-black"
          >
            {/* Background color */}
            <div
              className="absolute inset-0"
              style={{
                backgroundColor: `${dominantColor}`,
              }}
            />
            <div className="absolute inset-0 bg-black opacity-10" />


            {/* Content overlay */}
            <div className="relative z-10 h-full w-full">
              <div className="max-w-[90rem] mx-auto px-4 w-full h-full flex items-center justify-between text-white">
                {/* Left Song Info */}
                <div className="flex items-center gap-5 min-w-0"> {/* allow children to truncate */}
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU0de2-3rXVqsxmRUmLjAGvIpG7lq6s_9OFw&s"
                    alt="Song Thumbnail"
                    className="w-11 h-11 rounded-md object-cover"
                  />
                  <div className="flex flex-col leading-tight min-w-0 -ml-2"> {/* allow truncation inside */}
                    <h3 className="text-sm font-semibold truncate">
                      The Internet Said So Thats Why
                    </h3>
                    <p className="text-xs text-gray-400 mt-1 truncate">
                      Hemamand, The Director
                    </p>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-6">
                  <button className="hover:opacity-80">
                    <PlayIcon width="20" height="20" />
                  </button>
                  <button className=" text-white rounded-full flex items-center justify-center hover:scale-105 transition">
                    <NextIcon width="20" height="20" />
                  </button>
                </div>
              </div>
            </div>
          </footer>

        )
      }

      {/* <ExpandedNowPlaying isScreenExpanded={isScreenExpanded} onScreenMinimize={screenMinimize} /> */}
      <Drawer open={isScreenExpanded} onClose={screenMinimize}>
        <DrawerContent className=" h-full w-full bg-black">
          {/* Background color */}
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: `${dominantColor}`,
            }}
          />
          <div className="absolute inset-0 bg-black opacity-10" />


          <div
            className={`hide-scrollbar fixed inset-0  overflow-y-auto z-50`}
          >


            <div className="relative z-10 max-w-3xl mx-auto min-h-full">
              {/* Header */}
              <div className="p-4 flex items-center justify-between relative">
                <button
                  className="relative group hover:text-[#93D0D5] text-white transition-colors duration-300"
                  onClick={screenMinimize}
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
                  <div className="relative w-full h-full mt-3 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] rounded-sm overflow-hidden">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU0de2-3rXVqsxmRUmLjAGvIpG7lq6s_9OFw&s"
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
        </nav>
      </footer>
    </div>
  )
}

export default MobileLayout

