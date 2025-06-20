import { useEffect, useState } from "react"
import useDominantColor from "~/hooks/useDominantColor"
import { ViewType } from "~/types"
import PlaylistInfo from "../_app/Components/PlaylistInfo"
import CollectionTracks from "./_components/CollectionTracks"
import { useLoadingStore } from "~/store/useLoadingStore"
import { LogoIcon } from "~/Svgs"

const route = () => {
    const img = "https://cdn.prod.website-files.com/65e071a6ccb6912b68a93653/65e27b6ed6144cbeb2b57cb7_thumb__illustration.svg"
    const { dominantColor } = useDominantColor(img)
    const { isLoading, setIsLoading } = useLoadingStore();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // 2 seconds delay

        return () => clearTimeout(timer);
    }, []);

    const [view, setView] = useState<ViewType>("Default List")

    const [isLoading2, setIsLoading2] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 4000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (isLoading) return;
        const timer = setTimeout(() => {
            setIsLoading2(false);
        }, 4000);
        return () => clearTimeout(timer);
    }, [isLoading]);

    if (isLoading) {
        return (
            <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white gap-4">
                <LogoIcon width="80" height="80" />
                <p className="text-2xl font-semibold tracking-wide">Tunexy-app</p>
            </div>
        )
    }

    return (
        <div className="bg-[#121212] text-white p-4 md:p-8 min-h-screen max-w-[90rem] mx-auto">
            {/* Background Blur using Cover */}
            {
                !isLoading2 && (
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
                )
            }

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