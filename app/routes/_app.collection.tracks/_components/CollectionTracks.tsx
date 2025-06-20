import React from 'react'
import { ViewType } from '~/types';
import CollectionTrack from './CollectionTrack';
import { useUIPreferencesStore } from '~/store/useUIPreferencesStore';
// import PlaylistTrack from './PlaylistTrack';

interface Track {
    id: number;
    title: string;
    image: string;
    album: string;
    artist: string;
    dateAdded: string; // Format: "DD MMM YYYY"
    duration: string;  // Format: "mm:ss"
}

export const tracks: Track[] = [
    {
        id: 1,
        title: "Manchild",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=60&h=60&fit=crop&crop=face",
        album: "Emails I Can’t Send",
        artist: "Sabrina Carpenter",
        dateAdded: "12 May 2022",
        duration: "03:34",
    },
    {
        id: 2,
        title: "Ordinary billie eilish billie eilish billie eilish",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
        album: "One More Night ",
        artist: "Alex Warren",
        dateAdded: "23 Aug 2022",
        duration: "03:07",
    },
    {
        id: 3,
        title: "Guess featuring billie eilish",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
        album: "Dark Paradise",
        artist: "Charli xcx & Billie Eilish",
        dateAdded: "04 Jan 2023",
        duration: "02:23",
    },
    {
        id: 4,
        title: "Guess featuring billie eilish",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
        album: "Euphoria Dreams",
        artist: "Charli xcx & Billie Eilish",
        dateAdded: "14 Mar 2023",
        duration: "02:23",
    },
    {
        id: 5,
        title: "Guess featuring billie eilish",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
        album: "Electric Hearts",
        artist: "Charli xcx & Billie Eilish",
        dateAdded: "30 Apr 2023",
        duration: "02:23",
    },
    {
        id: 6,
        title: "Guess featuring billie eilish",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
        album: "Voices in My Head",
        artist: "Charli xcx & Billie Eilish",
        dateAdded: "09 Jun 2024",
        duration: "02:23",
    },
];


interface CollectionTracksProps {
    view: ViewType;
}

const CollectionTracks: React.FC<CollectionTracksProps> = ({ view }) => {
    const { preferences: { panelSize } } = useUIPreferencesStore()

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
                        <div className="flex items-center gap-[130px] flex-shrink-0 min-w-fit">
                            {/* Middle - Album name */}
                            <div className={`flex-1 px-2 text-gray-400`}>
                                <p className={`hidden ${panelSize > 25 ? "lg:hidden" : " lg:block"} text-xs`}>{"ALBUM"}</p>
                            </div>

                            <div
                                className={`hidden lg:hidden px-2 text-xs ${panelSize > 12 ? "md:hidden" : "md:block"
                                    } text-gray-400 text-sm font-medium min-w-0`}
                            >
                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clock-icon lucide-clock"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg> */}
                                DATE ADDED
                            </div>

                            <div
                                className={`hidden px-2 text-xs ${panelSize > 30 ? "lg:hidden" : "lg:block"
                                    } text-gray-400 text-sm font-medium min-w-0`}
                            >
                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clock-icon lucide-clock"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg> */}

                                {/* {track.duration} */}
                                DATE ADDED
                            </div>


                            <div className="flex gap-4 flex-shrink-0 px-2 text-gray-400">

                                <button className="text-xs">
                                    {/* <MoreIcon width="20" height="20" /> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clock-icon lucide-clock"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>


                                </button>
                            </div>
                        </div>
                    </div>

                    {tracks.map((track) => (
                        <div key={track.id}>
                            <CollectionTrack track={track} view={view} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CollectionTracks