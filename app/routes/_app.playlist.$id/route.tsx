import React from "react";
import {
    Play,
    Plus,
    Share2,
    MoreHorizontal,
    Heart,
} from "lucide-react";
import { HeartIcon, MoreIcon, PlayIcon } from "~/Svgs";
import useDominantColor from "~/hooks/useDominantColor";

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
    {
        id: 4,
        title: "Guess featuring billie eilish",
        artist: "Charli xcx & Billie Eilish",
        album: "Guess featuring Billie Eilish",
        duration: "02:23",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
        explicit: true,
        hasLyrics: true
    },
    {
        id: 5,
        title: "Guess featuring billie eilish",
        artist: "Charli xcx & Billie Eilish",
        album: "Guess featuring Billie Eilish",
        duration: "02:23",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
        explicit: true,
        hasLyrics: true
    },
    {
        id: 6,
        title: "Guess featuring billie eilish",
        artist: "Charli xcx & Billie Eilish",
        album: "Guess featuring Billie Eilish",
        duration: "02:23",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
        explicit: true,
        hasLyrics: true
    },

];


const PlaylistPage = () => {
    const panelSize = 22
    const img = "https://i.scdn.co/image/ab67616d0000b273143628f8f8a2ca5d59dfebf2"
    const { dominantColor } = useDominantColor(img)

    return (
        <div className="bg-[#121212] text-white p-4 md:p-8 min-h-screen">
            {/* Background Blur using Cover */}
            {/* <div className={`absolute top-0 left-0 w-full h-[700px] bg-gradient-to-b ${dominantColor} via-[#121212] to-[#121212] pointer-events-none z-0`}/> */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '700px',
                background: `linear-gradient(to bottom, ${dominantColor}, #121212, #121212)`,
                pointerEvents: 'none',
                zIndex: 0
            }} />

            <div className="relative z-10">
                <div className="mb-10  w-full flex flex-col items-center md:flex-row md:items-center gap-6 rounded-sm text-center md:text-left">
                    {/* Playlist Cover */}
                    <div className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] flex-shrink-0 rounded overflow-hidden shadow-2xl">
                        <img
                            src={img}
                            alt="Feeling Happy"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Text Info */}
                    <div className="flex flex-col gap-2 text-white justify-center items-center md:items-start">
                        <p className="uppercase text-sm font-semibold text-cyan-500">PUBLIC</p>
                        <h1 className="text-2xl md:text-4xl font-extrabold leading-tight">
                            Feeling Happy Album
                        </h1>
                        <p className="text-sm text-gray-400 font-medium">
                            Curated by Amazon Music
                        </p>

                        <p className="text-xs text-gray-400">109 SONGS · 5 HOURS AND 42 MINUTES</p>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-6 mt-4">
                            <button className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-6 py-2 rounded-full flex items-center gap-2 shadow-sm">
                                <Play size={18} />
                                Play
                            </button>
                            <Plus className="cursor-pointer text-gray-400 hover:text-white" />
                            <Share2 className="cursor-pointer text-gray-400 hover:text-white" />
                            <MoreHorizontal className="cursor-pointer text-gray-400 hover:text-white" />
                        </div>
                    </div>
                </div>

                {/* Song List */}
                <div className=''>
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
};

export default PlaylistPage;
