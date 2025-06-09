import { HeartIcon } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'
import { usePanelSizeStore } from '~/store/usePanelSizeStore';
import { MoreIcon, PauseIcon, PlayIcon } from '~/Svgs';

const route = () => {
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

    const tracks = [
        {
            title: "Night Drive the best song from my",
            singer: "Ava James",
            coverImageUrl: "https://source.unsplash.com/100x100/?music,night",
            hasLiked: true,
        },
        {
            title: "Golden Hour",
            singer: "Alex Rivers",
            coverImageUrl: "https://source.unsplash.com/100x100/?music,sunset",
            hasLiked: false,
        },
        {
            title: "Chasing Dreams",
            singer: "Nova Lane",
            coverImageUrl: "https://source.unsplash.com/100x100/?music,stars",
            hasLiked: false,
        },
        {
            title: "Echoes of You",
            singer: "Miles Carter",
            coverImageUrl: "https://source.unsplash.com/100x100/?music,city",
            hasLiked: true,
        },
        {
            title: "Into the Mist",
            singer: "Luna Hale",
            coverImageUrl: "https://source.unsplash.com/100x100/?music,fog",
            hasLiked: false,
        },
    ];

    return (
        <div className="text-white relative max-w-[90rem] mx-auto">
            <div
                className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-0"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,1) 10%), url(${'https://m.media-amazon.com/images/I/51TZEpzJOYL._UX250_FMwebp_QL85_.jpg'})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center top',
                    filter: 'blur(100px)',
                    opacity: '0.9',
                }}
            />

            <div className="relative z-10">
                <div className="">

                    <div className={`flex flex-col items-center ${panelSize > 33 ? "lg:flex-col lg:items-center" : "lg:flex-row lg:items-start"}  gap-8`}>
                        {/* Wrapper with dynamic size based on scroll */}
                        <div
                            className="w-52 h-52 md:w-60 md:h-60 rounded-none shadow-xl object-cover"
                        >
                            <img
                                src={'https://m.media-amazon.com/images/I/51TZEpzJOYL._UX250_FMwebp_QL85_.jpg'}
                                alt={'res.title'}
                                className="w-full h-full rounded-none shadow-2xl object-cover"
                            />
                        </div>

                        <div className={`flex flex-col items-center ${panelSize > 33 ? "lg:flex-col lg:items-center" : "lg:items-start lg:text-left "}  gap-4`}>
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

                                    className="flex items-center gap-2 bg-[#25d1da] hover:scale-105 hover:bg-[#93D0D5] text-black text-xs font-medium px-4 py-2 rounded-full transition-transform"
                                >
                                    <PlayIcon width='16' height='16' />
                                    Play
                                </button>

                                <div className='relative'>
                                    <button
                                        className="mt-1.5 hover:text-[#93D0D5] rounded-full transition-colors focus:outline-none group"
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
                                        {/* Tooltip inside the button */}
                                        {/* <Tooltip text='Share' className='-top-8' /> */}


                                        {/* <MoreIcon width="2/4" height="24" /> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><defs><path id="ic_action_shareandroid-a" d="M18,15 C16.798,15 15.732,15.542 14.999,16.381 L7.91,12.836 C7.967,12.566 8,12.287 8,12 C8,11.713 7.967,11.434 7.909,11.164 L14.998,7.619 C15.732,8.458 16.798,9 18,9 C20.209,9 22,7.209 22,5 C22,2.791 20.209,1 18,1 C15.791,1 14,2.791 14,5 C14,5.287 14.033,5.566 14.091,5.836 L7.001,9.381 C6.268,8.542 5.202,8 4,8 C1.791,8 0,9.791 0,12 C0,14.209 1.791,16 4,16 C5.202,16 6.268,15.458 7.001,14.619 L14.09,18.164 C14.033,18.434 14,18.713 14,19 C14,21.209 15.791,23 18,23 C20.209,23 22,21.209 22,19 C22,16.791 20.209,15 18,15 Z"></path></defs><g fill-rule="evenodd" fill="transparent"><rect width="24" height="24"></rect><use href="#ic_action_shareandroid-a" fill="currentColor"></use></g></svg>


                                    </button>
                                </div>

                                <div className="relative" ref={dropdownRef}>
                                    <button
                                        onClick={toggleDropdown}
                                        className="mt-1.5  hover:text-[#93D0D5] rounded-full transition-colors focus:outline-none group"
                                        aria-label="More options"
                                    >
                                        {/* Tooltip inside the button */}

                                        {/* <Tooltip text='More' className='-top-7' /> */}


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

                    {/* <PlaylistTrackItems res={res} handleControll={handleControll} initialized={initialized} setInitialized={setInitialized} /> */}
                    <div className="pb-8 mt-7">
                        <table className="w-full">
                            <tbody>
                                {(tracks)?.map((track, index) => (
                                    <tr
                                        key={index}
                                        className="hover:bg-[#29292A] group border-b border-[#2a2b2c] mt-4"
                                    >
                                        <td className="py-7 pl-4 pr-2"> {/* Added pr-2 for spacing */}
                                            <span>{index + 1}</span>
                                        </td>
                                        <td className="w-full max-w-0">
                                            <div className="flex items-center gap-4">
                                                <div className="flex-shrink-0 relative cursor-pointer">
                                                    <img
                                                        src={"https://m.media-amazon.com/images/I/51TZEpzJOYL._UX250_FMwebp_QL85_.jpg"}
                                                        alt={track?.title}
                                                        className="w-12 h-12 rounded-sm object-cover"
                                                    />
                                                    {/* Play button overlay */}
                                                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded">
                                                        <button className='hover:text-[#93D0D5] text-white'>
                                                            {(false) ? (
                                                                <PauseIcon width="20" height="20" />
                                                            ) : (
                                                                <PlayIcon width="20" height="20" />
                                                            )}
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="min-w-0 flex-1 overflow-hidden">
                                                    <h3 className="text-sm font-normal truncate">
                                                        {track.title}
                                                    </h3>
                                                    <p className="text-xs text-gray-400 mt-1 truncate">
                                                        {track.singer}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        {/* <td className="hidden lg:table-cell text-gray-400 px-16 text-sm">{formatTime(track.createdAt)}</td> */}
                                        <td className={`hidden ${panelSize > 23 ? "lg:hidden" : "lg:table-cell"}  text-gray-400 px-4 text-sm whitespace-nowrap`}>
                                            {"23 May 2025"}
                                        </td>
                                        {/* 29 */}

                                        <td className={`hidden ${panelSize > 11 ? "md:hidden" : "md:table-cell"} lg:hidden text-right text-gray-400 px-24 text-sm`}>{"5:45"}</td>
                                        <td className={`hidden ${panelSize > 29 ? "lg:hidden" : "lg:table-cell"} text-right text-gray-400 px-24 text-sm`}>{"5:45"}</td>



                                        <td className="text-right px-4 relative hidden sm:table-cell">
                                            <button
                                                className={`cursor-pointer group/more hover:text-[#93D0D5] ${false ? "text-[#25d1da]" : "text-white"} flex-shrink-0 ml-2`}
                                                onClick={async (e) => {
                                                    e.stopPropagation();
                                                }}
                                            >


                                                <HeartIcon width="17" height="17" />
                                            </button>

                                        </td>
                                        <td className="text-right px-4 relative">
                                            <button
                                                className="cursor-pointer relative group/more hover:text-[#93D0D5] flex-shrink-0 ml-2"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                }}
                                            >
                                                <MoreIcon width="20" height="20" />
                                            </button>

                                            {showDropdown === index && (
                                                <div
                                                    ref={dropdownRef}
                                                    className={`absolute right-0 top-0 w-64 z-50 transform transition-all duration-300 ease-in-out ${showDropdown === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                                                >
                                                    <div className="bg-gradient-to-b from-neutral-950 to-neutral-900 rounded-md shadow-xl border border-[#2E3030]">
                                                        <div className="py-1">
                                                            <button
                                                                className="flex items-center justify-between w-full text-left px-4 py-4 text-sm text-gray-200 hover:bg-[#29292A] hover:text-white"
                                                                onClick={(e) => {
                                                                    e.stopPropagation()

                                                                }}

                                                            >
                                                                Add To Playlist

                                                            </button>

                                                            <div className="border-b border-[#2E3030]"></div>

                                                            <button
                                                                className="flex items-center justify-between w-full text-left px-4 py-4 text-sm text-gray-200 hover:bg-[#29292A] hover:text-white"
                                                                onClick={(e) => {
                                                                    e.stopPropagation()
                                                                }}
                                                            >
                                                                {false ? "Remove From Queue" : "Add To Queue"}
                                                            </button>

                                                            <div className="border-b border-[#2E3030]"></div>

                                                            <button
                                                                className="flex items-center justify-between w-full text-left px-4 py-4 text-sm text-gray-200 hover:bg-[#29292A] hover:text-white"
                                                                onClick={async (e) => {
                                                                    e.preventDefault()
                                                                }}
                                                            >
                                                                {
                                                                    track.hasLiked ? "Unlike This Track" : "Like This Track"
                                                                }

                                                            </button>

                                                            <div className="border-b border-[#2E3030]"></div>

                                                            <button
                                                                className="flex items-center justify-between w-full text-left px-4 py-4 text-sm text-gray-200 hover:bg-[#29292A] hover:text-white"

                                                            >
                                                                {
                                                                    (false) ? "Pause This Track" : "Play This Track"
                                                                }

                                                            </button>


                                                            <button
                                                                className="flex items-center justify-between w-full text-left px-4 py-4 text-sm text-gray-200 hover:bg-[#29292A] hover:text-white"
                                                                onClick={(e) => {
                                                                    e.stopPropagation()
                                                                }}
                                                            >
                                                                Remove This Track

                                                            </button>

                                                        </div>
                                                    </div>

                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>





                    </div>

                </div>
            </div>
        </div>
    )
}

export default route