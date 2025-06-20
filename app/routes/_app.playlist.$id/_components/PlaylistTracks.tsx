import React, { useEffect, useState } from 'react'
import { ViewType } from '~/types';
import PlaylistTrack from './PlaylistTrack';
import { useUIPreferencesStore } from '~/store/useUIPreferencesStore';
import { PlaylistTracksSkeleton } from '~/components/Skeletons';

interface Track {
    id: number;
    title: string;
    image: string;
    artist: string;
    dateAdded: string; // Format: "DD MMM YYYY"
    duration: string;  // Format: "mm:ss"
}

export const tracks: Track[] = [
    {
        id: 1,
        title: "Manchild",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=60&h=60&fit=crop&crop=face",
        artist: "Sabrina Carpenter",
        dateAdded: "12 May 2022",
        duration: "03:34",
    },
    {
        id: 2,
        title: "Ordinary billie eilish billie eilish billie eilish",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
        artist: "Alex Warren",
        dateAdded: "23 Aug 2022",
        duration: "03:07",
    },
    {
        id: 3,
        title: "Guess featuring billie eilish",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
        artist: "Charli xcx & Billie Eilish",
        dateAdded: "04 Jan 2023",
        duration: "02:23",
    },
    {
        id: 4,
        title: "Guess featuring billie eilish",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
        artist: "Charli xcx & Billie Eilish",
        dateAdded: "14 Mar 2023",
        duration: "02:23",
    },
    {
        id: 5,
        title: "Guess featuring billie eilish",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
        artist: "Charli xcx & Billie Eilish",
        dateAdded: "30 Apr 2023",
        duration: "02:23",
    },
    {
        id: 6,
        title: "Guess featuring billie eilish",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
        artist: "Charli xcx & Billie Eilish",
        dateAdded: "09 Jun 2024",
        duration: "02:23",
    },
];

interface PlaylistTracksProps {
    view: ViewType;
}

const PlaylistTracks: React.FC<PlaylistTracksProps> = ({ view }) => {
    const { preferences: { panelSize } } = useUIPreferencesStore()

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 4000);
        return () => clearTimeout(timer);
    }, []);

    if(isLoading) {
        return <PlaylistTracksSkeleton/>
    }
    
    return (
        <div className=''>
            <div className="text-white ">
                <div className="divide-y divide-[#2a2b2c]">
                    <div
                        className="flex items-center justify-between p-4 transition-colors group"
                    >
                        {/* Left side - Track number, image, and info */}
                        <div className="flex items-center space-x-4 flex-1 min-w-0">
                            <div className="w-4 text-gray-400 text-sm font-medium -mr-2">
                                {"#"}
                            </div>

                            {/* Image with Play button on hover */}


                            <div className="flex-1 min-w-0">
                                <div className="flex items-center space-x-2 text-gray-400">
                                    <h3 className="text-xs font-medium truncate">{"TITLE"}</h3>
                                </div>

                            </div>
                        </div>

                        {/* Right side - Duration, heart, more options */}
                        <div className="flex items-center gap-[108px] flex-shrink-0 min-w-fit">
                            {/* Middle - Album name */}
                            <div className={`flex-1 px-2 text-gray-400`}>
                                <p className={`hidden ${panelSize > 25 ? "lg:hidden" : " lg:block"} text-xs`}>{"DATE ADDED"}</p>
                            </div>

                            <span
                                className={`hidden lg:hidden px-2 ${panelSize > 12 ? "md:hidden" : "md:block"
                                    } text-gray-400 text-sm font-medium min-w-0`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clock-icon lucide-clock"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                            </span>

                            <span
                                className={`hidden px-2 ${panelSize > 30 ? "lg:hidden" : "lg:block"
                                    } text-gray-400 text-sm font-medium min-w-0`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clock-icon lucide-clock"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>

                                {/* {track.duration} */}
                            </span>


                            <div className="flex gap-4 flex-shrink-0 px-2 text-gray-400">
                                <button className='hidden sm:block text-xs'>
                                    {/* <Heart className="w-5 h-5 text-gray-400 hover:text-white" /> */}
                                    {/* <HeartIcon width="20" height="20" /> */}
                                    LIKE
                                </button>
                                <button className="text-xs">
                                    {/* <MoreIcon width="20" height="20" /> */}
                                    MORE

                                </button>
                            </div>
                        </div>
                    </div>

                    {tracks.map((track) => (
                        <div key={track.id}>
                            <PlaylistTrack track={track} view={view} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PlaylistTracks