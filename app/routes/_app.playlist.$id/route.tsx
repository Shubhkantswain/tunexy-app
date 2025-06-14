
// PlaylistPage.tsx
import { Play, MoreHorizontal, Heart } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import useImageColor from '~/hooks/useImgColor';
import { usePanelSizeStore } from '~/store/usePanelSizeStore';
import { CompactListIcon, DefaultListIcon, HeartIcon, MoreIcon, PauseIcon, PlayIcon, ShareIcon } from '~/Svgs';

const tracks = [
  {
    id: 1,
    title: "Manchild",
    artist: "Sabrina Carpenter",
    album: "Manchild [Explicit]",
    duration: "03:34",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=60&h=60&fit=crop&crop=face",
    explicit: true,
    hasLyrics: true
  },
  {
    id: 2,
    title: "Ordinary billie eilish billie eilish billie eilish",
    artist: "Alex Warren",
    album: "Ordinary",
    duration: "03:07",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
    explicit: false,
    hasLyrics: true
  },
  {
    id: 3,
    title: "Guess featuring billie eilish",
    artist: "Charli xcx & Billie Eilish",
    album: "Guess featuring Billie Eilish",
    duration: "02:23",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
    explicit: true,
    hasLyrics: true
  },
 
];
export default function PlaylistPage() {

  const dropdownRef = useRef<HTMLDivElement>(null)
  const [showDropdown, setShowDropdown] = useState(false)

  const { panelSize, setPanelSize } = usePanelSizeStore()

  console.log("panelSize", panelSize);


  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  const img = 'https://i.scdn.co/image/ab67616d0000b273143628f8f8a2ca5d59dfebf2'
  const { dominantColor } = useImageColor(img)
  console.log("d", dominantColor);





  return (
    <div className="flex flex-col">
      {/* Gradient header with fixed height (300px) */}
      <div
        style={{
          // height: '600px',
          background: `linear-gradient(to bottom, ${dominantColor}, #121212, #121212)`,
        }}

        className={`h-[950px] md:h-[1050px] ${panelSize > 33 ? "lg:h-[1050px]" : "lg:h-[600px]"} `}
      >
        <div className={`max-w-[90rem] mx-auto text-white p-4 md:p-6`}>
          <div className={`z-0 flex flex-col items-center ${panelSize > 33 ? "lg:flex-col lg:items-center" : "lg:flex-row lg:items-start"} gap-8`}>
            <div className="w-52 h-52 md:w-60 md:h-60 rounded-none shadow-xl object-cover">
              <img
                src={img}
                alt={'res.title'}
                className="w-full h-full rounded-sm shadow-2xl object-cover"
              />
            </div>

            <div className={`flex flex-col items-center ${panelSize > 33 ? "lg:flex-col lg:items-center" : "lg:items-start lg:text-left "} gap-4`}>
              <span className="text-[#25d1da] text-xs">{"PUBLIC"}</span>
              <h2 className="text-2xl md:text-3xl font-bold">
                Featured playlists for you
              </h2>

              <div className="text-xs text-zinc-300">
                Curated by FlowTune's Music Experts
              </div>

              <div className="text-xs text-zinc-300">
                {"2 Hours . 5 Tracks"}
              </div>

              <div className="flex items-center gap-7 mt-4">
                <button
                  className="flex items-center gap-2 bg-[#25d1da] hover:scale-105 hover:bg-[#93D0D5] text-black text-sm font-bold px-4 py-2 rounded-full transition-transform"
                >
                  Play
                </button>

                <div className='relative'>
                  <button
                    className=" hover:text-[#93D0D5] rounded-full transition-colors focus:outline-none group"
                    aria-label="More options"
                    onClick={async () => {
                      const shareUrl = window.location.href;
                      if (navigator.share) {
                        try {
                          await navigator.share({
                            title: document.title,
                            url: shareUrl,
                          });
                        } catch (error) {
                          console.error("Error sharing:", error);
                        }
                      } else {
                        try {
                          await navigator.clipboard.writeText(shareUrl);
                          alert("Link copied to clipboard!");
                        } catch (error) {
                          console.error("Failed to copy link:", error);
                        }
                      }
                    }}
                  >
                    <ShareIcon width="22" height="22" />

                  </button>
                </div>

                <button
                    className="hover:text-[#93D0D5] rounded-full transition-colors focus:outline-none group"
                    aria-label="More options"
                  >
                    <DefaultListIcon width="15" height="15" />
                  </button>


                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={toggleDropdown}
                    className="mt-1 hover:text-[#93D0D5] rounded-full transition-colors focus:outline-none group"
                    aria-label="More options"
                  >
                    <MoreIcon width="20" height="20" />
                  </button>

                  {showDropdown && (
                    <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 w-64 z-50 transform transition-all duration-300 ease-in-out ${showDropdown ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                      <div className="bg-gradient-to-b from-neutral-950 to-neutral-900 rounded-md shadow-xl border border-[#2E3030]">
                        <div className="py-1">
                          <button
                            className="flex items-center justify-between w-full text-left px-4 py-4 text-sm text-gray-200 hover:bg-[#29292A] hover:text-white"
                          >
                            Play
                          </button>
                          <div className="border-b border-[#2E3030]"></div>

                          <button
                            className="flex items-center justify-between w-full text-left px-4 py-4 text-sm text-gray-200 hover:bg-[#29292A] hover:text-white"


                          >
                            Share
                          </button>
                          <div className="border-b border-[#2E3030]"></div>

                          <button
                            className="flex items-center justify-between w-full text-left px-4 py-4 text-sm text-gray-200 hover:bg-[#29292A] hover:text-white"
                            onClick={() => {
                              setShowDropdown(false)
                            }}
                          >
                            {false ? "Disable Repeat" : "Enable Repeat"}
                          </button>
                          <div className="border-b border-[#2E3030]"></div>

                          <button
                            className="flex items-center justify-between w-full text-left px-4 py-4 text-sm text-gray-200 hover:bg-[#29292A] hover:text-white"
                          >
                            Delete This Playlist
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>


              </div>
            </div>


          </div>
        </div>
      </div>

      <div className={`-mt-[485px] md:-mt-[550px] ${panelSize > 33 ? "lg:-mt-[550px]" : "lg:-mt-[330px]"} `}>
        <div className='p-4 md:p-6 max-w-[90rem] mx-auto'>
          <div className="text-white ">
            <div className="divide-y divide-[#2a2b2c]">
              {tracks.map((track) => (
                <div
                  key={track.id}
                  className="flex items-center justify-between p-4 hover:bg-[#2B2C2C] transition-colors group cursor-pointer"
                >
                  {/* Left side - Track number, image, and info */}
                  <div className="flex items-center space-x-4 flex-1 min-w-0">
                    <div className="w-4 text-gray-400 text-sm font-medium -mr-2">
                      {track.id}
                    </div>

                    {/* Image with Play button on hover */}
                    <div className="relative group">
                      <img
                        src={track.image}
                        alt={`${track.title} artwork`}
                        className="w-12 h-12 rounded object-cover"
                      />

                      {/* Play button shown on hover */}
                      <button
                        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <PlayIcon width="20" height="20" />
                      </button>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <h3 className="text-sm font-medium truncate">{track.title}</h3>
                      </div>
                      <div className="flex items-center space-x-2 mt-1">
                        <p className="text-xs text-gray-400 mt-1 truncate">
                          {track.artist}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right side - Duration, heart, more options */}
                  <div className="flex items-center gap-24 flex-shrink-0 min-w-fit">
                    {/* Middle - Album name */}
                    <div className={`hidden ${panelSize >= 23 ? "lg:hidden" : " lg:block"}  flex-1 px-2`}>
                      <p className="text-white text-sm truncate">{"23 may 2025"}</p>
                    </div>

                    <span   
                      className={`hidden lg:hidden px-2 ${panelSize > 12 ? "md:hidden" : "md:block"
                        } text-white text-sm font-medium min-w-0`}
                    >
                      {track.duration}
                    </span>

                    <span
                      className={`hidden px-2 ${panelSize > 30 ? "lg:hidden" : "lg:block"
                        } text-white text-sm font-medium min-w-0`}
                    >
                      {track.duration}
                    </span>

                    <div className="flex gap-7 flex-shrink-0 px-2">
                      <button className='hidden sm:block'>
                        {/* <Heart className="w-5 h-5 text-gray-400 hover:text-white" /> */}
                        <HeartIcon width="20" height="20" />
                      </button>
                      <button>
                        <MoreIcon width="20" height="20" />

                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


