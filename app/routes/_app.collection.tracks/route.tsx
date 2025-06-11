
// PlaylistPage.tsx
import { Play, MoreHorizontal, Heart, Clock, Clock1 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import useImageColor from '~/hooks/useImgColor';
import { usePanelSizeStore } from '~/store/usePanelSizeStore';
import { CompactListIcon, DefaultListIcon, HeartIcon, MoreIcon, PauseIcon, PlayIcon, ShareIcon } from '~/Svgs';

const tracks = [
    {
        id: 1,
        title: "Bom Diggy Diggy",
        artist: "Zack Knight, Jasmin Walia",
        album: "Sonu Ke Titu Ki Sweety",
        dateAdded: "May 3, 2025",
        duration: "3:58",
        albumArt: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=40&h=40&fit=crop&crop=face"
    },

    {
        id: 3,
        title: "Sau Aasmaan",
        artist: "Armaan Malik, Neeti Mohan, Kumaar",
        album: "Baar Baar Dekho (Original Motion PicturePicturePicturePicturePicturePicturePicturePicture",
        dateAdded: "May 1, 2025",
        duration: "3:54",
        albumArt: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=40&h=40&fit=crop"
    },
    {
        id: 4,
        title: "Kahani Suno 2.0",
        artist: "Kaifi Khalil",
        album: "Kahani Suno 2.Picture PicturePicturePicturePicturePicture0",
        dateAdded: "Apr 30, 2025",
        duration: "2:53",
        albumArt: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=40&h=40&fit=crop&crop=center"
    }
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

    const img = 'https://m.media-amazon.com/images/I/61pId5QmuDL._UX250_FMwebp_QL85_.jpg'
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
                            <span className="text-[#25d1da] text-xs">{"PRIVATE"}</span>
                            <h2 className="text-2xl md:text-3xl font-bold">
                                LIKED TRACKS COLLECTION
                            </h2>

                            <div className="text-xs text-zinc-300">
                                {"shubh . 12 songs"}
                            </div>

                            <div className="flex items-center gap-7 mt-4">
                                <button
                                    className="flex items-center gap-2 bg-[#25d1da] hover:scale-105 hover:bg-[#93D0D5] text-black text-sm font-bold p-4 rounded-full transition-transform"
                                >
                                    <PlayIcon width="20" height="20" />
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

            <div className={`-mt-[485px] md:-mt-[550px] ${panelSize > 33 ? "lg:-mt-[550px]" : "lg:-mt-[330px]"}`}>
  <div className='p-4 md:p-6 max-w-[90rem] mx-auto'>
    <div className="text-white space-y-2">
      {tracks.map((track, index) => (
        <div key={track.id} className="flex items-center justify-between px-4 py-3 hover:bg-[#29292A] rounded-md transition-colors group cursor-pointer">
          {/* Left section */}
          <div className="flex items-center gap-4 w-[40%] min-w-0">
            <span className="w-4 text-sm text-gray-400">{index + 1}</span>
            <img src={track.image} alt={track.title} className="w-12 h-12 rounded-md object-cover" />
            <div className="min-w-0">
              <p className="truncate font-semibold text-sm">{track.title}</p>
              <p className="truncate text-xs text-gray-400">{track.artists}</p>
            </div>
          </div>

          {/* Middle section */}
          <div className="hidden md:block w-[25%] truncate text-sm text-gray-300">{track.album}</div>

          {/* Date */}
          <div className="hidden lg:block text-xs text-gray-400 w-[15%]">{track.date}</div>

          {/* Duration */}
          <div className="text-xs text-gray-400 w-[5%] text-right">{track.duration}</div>
        </div>
      ))}
    </div>
  </div>
</div>


        </div>
    );
}


