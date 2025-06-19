import { useEffect, useState } from "react";

const playlists = [
    {
        id: 1,
        title: "Punjabi Hip Hop Hits",
        subtitle: "Shubh, Sidhu Moose Wala, Karan Aujla, A...",
        image: "https://images.unsplash.com/photo-1614850523545-e883f60b58fa",
        highlight: "Hip Hop Hits",
    },
    {
        id: 2,
        title: "Bollywood Party",
        subtitle: "Badshah, Tanishk Bagchi, Arijit Singh,...",
        image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
        highlight: "Party",
    },
    {
        id: 3,
        title: "Bollywood Fire",
        subtitle: "Neha Kakkar, Tanishk Bagchi, Shreya...",
        image: "https://images.unsplash.com/photo-1601758123927-1963d61a928e",
        highlight: "Fire",
    },
    {
        id: 4,
        title: "Midnight Romance: Hindi",
        subtitle: "Arijit Singh, Vishal Mishra, Sachin-Jigar,...",
        image: "https://images.unsplash.com/photo-1529635442759-489f1c6c2164",
        highlight: "Hindi",
    },
    {
        id: 5,
        title: "00s Bollywood Romance",
        subtitle: "Pritam, Alka Yagnik, Udit Narayan, Shreya...",
        image: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d",
        highlight: "Romance",
    },
    {
        id: 6,
        title: "Uncut Bollywood",
        subtitle: "Arijit Singh, Pritam, Sachet Parampara,...",
        image: "https://images.unsplash.com/photo-1533236897111-3e94666b2edf",
        highlight: "BOLLYWOOD",
    },
    {
        id: 7,
        title: "Uncut Bollywood",
        subtitle: "Arijit Singh, Pritam, Sachet Parampara,...",
        image: "https://images.unsplash.com/photo-1533236897111-3e94666b2edf",
        highlight: "BOLLYWOOD",
    },
    {
        id: 8,
        title: "Uncut Bollywood",
        subtitle: "Arijit Singh, Pritam, Sachet Parampara,...",
        image: "https://images.unsplash.com/photo-1533236897111-3e94666b2edf",
        highlight: "BOLLYWOOD",
    },
];

const SkeletonPlaylistItem = () => {
    return (
        <div className="shrink-0 w-[140px] md:w-[150px] animate-pulse">
            <div className="rounded overflow-hidden">
                <div className="w-full h-[140px] md:h-[150px] rounded bg-[#272727] flex items-center justify-center">
                   
                </div>

            </div>
            <div className="mt-2">
                <div className="h-4 bg-[#272727] rounded mb-2"></div>
                <div className="h-3 bg-[#272727] rounded w-3/4"></div>
            </div>
        </div>
    );
};


const PlaylistItems = () => {
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <>
                {Array.from({ length: 8 }).map((_, i) => (
                    <SkeletonPlaylistItem key={i} />
                ))}
            </>
        );
    }
    return (
        <>
            {playlists.map((playlist) => (
                <div
                    key={playlist.id}
                    className="shrink-0 w-[140px] md:w-[150px]"
                >
                    <div className="rounded overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d"
                            alt={playlist.title}
                            className="w-full h-[140px]  md:h-[150px] object-cover rounded"
                        />
                    </div>
                    <div className="mt-2">
                        <h3 className="text-sm font-medium truncate">
                            {playlist.title}
                        </h3>
                        <p className="text-xs text-gray-400 mt-1 truncate">
                            {playlist.subtitle}
                        </p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default PlaylistItems