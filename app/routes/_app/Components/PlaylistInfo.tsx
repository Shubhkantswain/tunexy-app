import { ViewType } from "~/types";
import ActionButtons from "../../_app.playlist.$id/_components/ActionButtons";

interface PlaylistInfoProps {
    view: ViewType; 
    setView: React.Dispatch<React.SetStateAction<ViewType>>;
}

const PlaylistInfo: React.FC<PlaylistInfoProps> = ({ view, setView }) => {
    // const img = "https://i.scdn.co/image/ab67616d0000b273143628f8f8a2ca5d59dfebf2"
    const img = 'https://us.123rf.com/450wm/littlecuckoo/littlecuckoo1506/littlecuckoo150604243/41290467-coraz%C3%B3n-icono-de-la-muestra-valent%C3%ADn-icono.jpg?ver=6'


    return (
        <div className="mb-10  w-full flex flex-col items-center lg:flex-row lg:items-center gap-6 rounded-sm text-center lg:text-left">
            {/* Playlist Cover */}
            <div className="w-[230px] h-[230px] md:w-[250px] md:h-[250px] flex-shrink-0 rounded-sm overflow-hidden shadow-2xl">
                <img
                    src={img}
                    alt="Feeling Happy"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Text Info */}
            <div className="flex flex-col gap-2 text-white justify-center items-center lg:items-start">
                <p className="uppercase text-sm font-semibold text-cyan-500">PUBLIC</p>
                <h1 className="text-2xl md:text-4xl font-extrabold leading-tight">
                    Feeling Happy Album
                </h1>
                <p className="text-sm text-gray-400 font-medium">
                    Curated by Amazon Music
                </p>

                <p className="text-xs text-gray-400">109 SONGS · 5 HOURS AND 42 MINUTES</p>

                {/* Action Buttons */}
                <ActionButtons view={view} setView={setView} />
            </div>
        </div>
    )
}

export default PlaylistInfo