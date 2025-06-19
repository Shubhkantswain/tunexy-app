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

const CompactListItems = () => {
    return (
        <>
            {
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
            }
        </>
    )
}

export default CompactListItems