import { useState } from "react";
import useDominantColor from "~/hooks/useDominantColor";
import PlaylistInfo from "../_app/Components/PlaylistInfo";
import PlaylistTracks from "./_components/PlaylistTracks";
import { ViewType } from "~/types";

const PlaylistPage = () => {
    const img = "https://i.scdn.co/image/ab67616d0000b273143628f8f8a2ca5d59dfebf2"
    const { dominantColor } = useDominantColor(img)

    const [view, setView] = useState<ViewType>("Default List")

    return (
        <div className="bg-[#121212] text-white p-4 md:p-8 min-h-screen max-w-[90rem] mx-auto">
            {/* Background Blur using Cover */}
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
                {/* Playlist Info */}
                <PlaylistInfo view={view} setView={setView} />

                {/* Playlist Tracks */}
                <PlaylistTracks view={view} />
            </div>
        </div>
    );
};

export default PlaylistPage;
