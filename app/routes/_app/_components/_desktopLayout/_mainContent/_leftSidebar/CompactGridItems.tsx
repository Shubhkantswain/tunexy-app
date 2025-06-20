import { useUIPreferencesStore } from "~/store/useUIPreferencesStore";

const libraryItems = [
    {
        id: 1,
        type: 'playlist',
        title: 'Liked Songs',
        subtitle: 'Playlist • 73 songs',
        img: "https://m.media-amazon.com/images/I/41wN7b5qZiL._UX250_FMwebp_QL85_.jpg"
    },
    {
        id: 1,
        type: 'playlist',
        title: 'Liked Songs',
        subtitle: 'Playlist • 73 songs',
        img: "https://m.media-amazon.com/images/I/41wN7b5qZiL._UX250_FMwebp_QL85_.jpg"

    }, {
        id: 1,
        type: 'playlist',
        title: 'Liked Songs',
        subtitle: 'Playlist • 73 songs',
        img: "https://m.media-amazon.com/images/I/41wN7b5qZiL._UX250_FMwebp_QL85_.jpg"

    },
    {
        id: 2,
        type: 'podcast',
        title: 'Your Episodes',
        subtitle: 'Saved & downloaded episodes',
        img: "https://m.media-amazon.com/images/I/41wN7b5qZiL._UX250_FMwebp_QL85_.jpg"

    },
    {
        id: 3,
        type: 'folder',
        title: 'New Folder',
        subtitle: '0 playlists',
        img: "https://m.media-amazon.com/images/I/41wN7b5qZiL._UX250_FMwebp_QL85_.jpg"

    },
    {
        id: 4,
        type: 'artist',
        title: 'Mithoon',
        subtitle: 'Artist',
        img: "https://m.media-amazon.com/images/I/41wN7b5qZiL._UX250_FMwebp_QL85_.jpg"

    },
    {
        id: 5,
        type: 'artist',
        title: 'Pritam',
        subtitle: 'Artist',
        img: "https://m.media-amazon.com/images/I/41wN7b5qZiL._UX250_FMwebp_QL85_.jpg"

    },
];

const CompactGridItems = () => {
    const { preferences: { panelSize } } = useUIPreferencesStore()

    return (
        <div className={`p-2 grid ${panelSize > 28 ? 'grid-cols-3' :
            panelSize < 17 ? 'grid-cols-1' :
                'grid-cols-2'
            } gap-6`}>
            {libraryItems.map((item) => (
                <div
                    key={item.id}
                    className="relative rounded-sm hover:scale-105 overflow-hidden cursor-pointer transition-transform duration-200"
                >
                    {/* Card Background */}
                    <div className={` aspect-square relative`}>
                        {/* Icon/Avatar */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-15 h-15 rounded-sm object-cover"
                            />

                        </div>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default CompactGridItems