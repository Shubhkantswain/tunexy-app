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

   
    },
];

const DefaultListItems = () => {
    return (
        <>
            {
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
            }
        </>
    )
}

export default DefaultListItems