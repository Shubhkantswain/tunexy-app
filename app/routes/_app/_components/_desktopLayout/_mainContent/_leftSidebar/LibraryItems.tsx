type ViewType = "Default List" | "Compact List" | "Default Grid" | "Compact Grid";

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

interface LibraryItemsProps {
    panelSize: number;
    view: ViewType
}

const LibraryItems: React.FC<LibraryItemsProps> = ({ panelSize, view }) => {
    return (
        <div className="flex-1">
            <div className={`space-y-1 px-2.5 ${panelSize > 13 ? "pt-2 pb-2" : "pt-0 pb-4"}`}>
                {panelSize <= 13 ? (
                    // Small Panel Design
                    libraryItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex justify-center group"
                        >
                            <div className="p-2 rounded-sm hover:bg-[#1F1F1F] transition-colors relative flex-shrink-0 cursor-pointer">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-12 h-12 rounded-sm"
                                />

                            </div>
                        </div>
                    ))
                ) : view == "Compact List" ? (
                    // Compact List Design
                    libraryItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center gap-3 p-2 rounded-sm hover:bg-[#1F1F1F] transition-colors cursor-pointer group"
                        >
                            <div className="flex-1 min-w-0">
                                <h3 className="text-white font-medium text-sm truncate">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-xs truncate">
                                    {item.subtitle}
                                </p>
                            </div>
                            {item.type === 'folder' && (
                                <div className="text-gray-400">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                        <path d="M6 12l4-4-4-4v8z" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))
                ) : view == "Default Grid" ? (
                    // Grid Design - Responsive columns based on panelSize
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
                                {/* Text Content */}
                                <div className="py-2">
                                    <h3 className="text-white font-medium text-sm truncate">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 text-xs truncate mt-1">
                                        {item.subtitle}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    view == "Compact Grid" ? (
                        // Grid Design - Responsive columns based on panelSize
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
                    ) : (
                        // Default List Design
                        libraryItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center gap-3 p-2 rounded-sm hover:bg-[#1F1F1F] transition-colors cursor-pointer group"
                            >
                                <div className="relative flex-shrink-0">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-12 h-12 rounded-sm"
                                    />

                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-white font-medium text-sm truncate">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 text-xs truncate">
                                        {item.subtitle}
                                    </p>
                                </div>
                                {item.type === 'folder' && (
                                    <div className="text-gray-400">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                            <path d="M6 12l4-4-4-4v8z" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        ))
                    )
                )
                }
            </div>
        </div>
    )
}

export default LibraryItems