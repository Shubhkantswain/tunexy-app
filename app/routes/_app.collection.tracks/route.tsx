import { useState } from "react"
import useDominantColor from "~/hooks/useDominantColor"
import { ViewType } from "~/types"
import PlaylistInfo from "../_app/Components/PlaylistInfo"
import CollectionTracks from "./_components/CollectionTracks"

const route = () => {
    const { dominantColor } = useDominantColor('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuAVT188-hTjJ1NDN-87fF74Hf2e1MYYlegQ&s')

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
                <CollectionTracks view={view} />
            </div>
        </div>
    )
}

export default route