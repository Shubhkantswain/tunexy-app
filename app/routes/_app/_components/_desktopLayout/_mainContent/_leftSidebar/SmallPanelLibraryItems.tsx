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

const SmallPanelLibraryItems = () => {
    return (
        <>
            {
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
            }
        </>
    )
}

export default SmallPanelLibraryItems