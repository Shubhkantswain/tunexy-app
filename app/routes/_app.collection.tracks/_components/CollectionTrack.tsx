import { useUIPreferencesStore } from "~/store/useUIPreferencesStore";
import { HeartIcon, MoreIcon, PlayIcon } from "~/Svgs";
import { ViewType } from "~/types";

interface Track {
    id: number;
    title: string;
    image: string;
    album: string;
    artist: string;
    dateAdded: string; // Format: "DD MMM YYYY"
    duration: string;  // Format: "mm:ss"
}

interface CollectionTrackProps {
    track: Track
    view: ViewType;
}

const CollectionTrack: React.FC<CollectionTrackProps> = ({ track, view }) => {
    const { preferences: { panelSize } } = useUIPreferencesStore()

    return (
        <div
            className="flex items-center justify-between p-4 hover:bg-[#2B2C2C] transition-colors group cursor-pointer"
        >
            {/* Left side - Track number, image, and info */}
            <div className="flex items-center space-x-4 flex-1 min-w-0">
                <div className="w-4 text-gray-400 text-sm font-medium -mr-2">
                    {track.id}
                </div>

                {/* Image with Play button on hover */}
                {
                    view == "Default List" && (
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
                    )
                }


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
                <div className={`hidden ${panelSize > 25 ? "lg:hidden" : " lg:block"}   flex-1 px-2`}>
                    <p className="text-white text-sm truncate">{track.album}</p>
                </div>

                <span
                    className={`hidden lg:hidden px-2 ${panelSize > 12 ? "md:hidden" : "md:block"
                        } text-white text-sm font-medium min-w-0`}
                >
                    {track.dateAdded}
                </span>

                <span
                    className={`hidden px-2 ${panelSize > 30 ? "lg:hidden" : "lg:block"
                        } text-white text-sm font-medium min-w-0`}
                >
                    {track.dateAdded}
                </span>

                <div className="flex gap-7 flex-shrink-0 px-2 text-sm">
                    <button>
                        {/* <MoreIcon width="20" height="20" /> */}
                        {"05:33"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CollectionTrack