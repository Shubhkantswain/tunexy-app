import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SpotifyCloneLayout from "~/components/MainLayout";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { json } from "@remix-run/cloudflare";

// Loader (server-side)
export const loader = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return json({ posts });
};

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
];

const HomePagePlaylists = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const amount = direction === "left" ? -400 : 400;
            scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
        }
    };

    const categories = ["All", "Music", "Podcasts"];
    const [activeCategory, setActiveCategory] = useState("All");

    return (
        <>
            <div className="flex gap-6 rounded-full w-fit">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`rounded-full text-xs font-medium transition-colors duration-200 ${cat === activeCategory
                            ? 'text-[#3babdb]'
                            : 'text-white '
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="text-white mt-5">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                        Featured playlists for you
                    </h2>

                    {/* Controls: Arrows + See All Button */}
                    <div className="flex items-center gap-4">
                        <div className="space-x-8 hidden md:block">

                            <button
                                onClick={() => scroll("left")}
                                className="transition text-white/70"
                            >
                                <ChevronLeft size={16} />
                            </button>

                            <button
                                onClick={() => scroll("right")}
                                className=" transition text-white/70"
                            >
                                <ChevronRight size={16} />
                            </button>
                        </div>

                        <button
                            className="px-4 py-2 rounded-full bg-zinc-800 text-white font-chane font-semibold hover:bg-zinc-700 transition">
                            SEE ALL
                        </button>
                    </div>
                </div>


                {/* Scrollable Playlist Row */}
                <div className="-ml-4 md:ml-0">
                    <div
                        ref={scrollRef}
                        className="px-4 md:px-0 flex gap-4 md:gap-6 overflow-x-auto hide-scrollbar scroll-smooth"
                    >
                        {playlists.map((playlist) => (
                            <div
                                key={playlist.id}
                                className="shrink-0 w-[35vw] sm:w-[25vw] md:w-[160px] lg:w-[170px]"
                            >
                                <div className="rounded overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d"
                                        alt={playlist.title}
                                        className="w-full h-[35vw] sm:h-[25vw] md:h-[160px] lg:h-[170px] object-cover rounded"
                                    />
                                </div>
                                <div className="mt-2">
                                    <h3 className="text-sm  font-semibold truncate">
                                        {playlist.title}
                                    </h3>
                                    <p className="text-xs text-gray-400 mt-1 truncate">
                                        {playlist.subtitle}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="text-white mt-12">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                        Featured playlists for you
                    </h2>

                    {/* Controls: Arrows + See All Button */}
                    <div className="flex items-center gap-4">
                        <div className="space-x-8 hidden md:block">

                            <button
                                onClick={() => scroll("left")}
                                className="transition text-white/70"
                            >
                                <ChevronLeft size={16} />
                            </button>

                            <button
                                onClick={() => scroll("right")}
                                className=" transition text-white/70"
                            >
                                <ChevronRight size={16} />
                            </button>
                        </div>

                        <button
                            className="px-4 py-2 rounded-full bg-zinc-800 text-white font-chane font-semibold hover:bg-zinc-700 transition">
                            SEE ALL
                        </button>
                    </div>
                </div>


                {/* Scrollable Playlist Row */}
                <div className="-ml-4 md:ml-0">
                    <div
                        ref={scrollRef}
                        className="px-4 md:px-0 flex gap-4 md:gap-6 overflow-x-auto hide-scrollbar scroll-smooth"
                    >
                        {playlists.map((playlist) => (
                            <div
                                key={playlist.id}
                                className="shrink-0 w-[35vw] sm:w-[25vw] md:w-[160px] lg:w-[170px]"
                            >
                                <div className="rounded overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d"
                                        alt={playlist.title}
                                        className="w-full h-[35vw] sm:h-[25vw] md:h-[160px] lg:h-[170px] object-cover rounded"
                                    />
                                </div>
                                <div className="mt-2">
                                    <h3 className="text-sm  font-semibold truncate">
                                        {playlist.title}
                                    </h3>
                                    <p className="text-xs text-gray-400 mt-1 truncate">
                                        {playlist.subtitle}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="text-white mt-12">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                        Featured playlists for you
                    </h2>

                    {/* Controls: Arrows + See All Button */}
                    <div className="flex items-center gap-4">
                        <div className="space-x-8 hidden md:block">

                            <button
                                onClick={() => scroll("left")}
                                className="transition text-white/70"
                            >
                                <ChevronLeft size={16} />
                            </button>

                            <button
                                onClick={() => scroll("right")}
                                className=" transition text-white/70"
                            >
                                <ChevronRight size={16} />
                            </button>
                        </div>

                        <button
                            className="px-4 py-2 rounded-full bg-zinc-800 text-white font-chane font-semibold hover:bg-zinc-700 transition">
                            SEE ALL
                        </button>
                    </div>
                </div>


                {/* Scrollable Playlist Row */}
                <div className="-ml-4 md:ml-0">
                    <div
                        ref={scrollRef}
                        className="px-4 md:px-0 flex gap-4 md:gap-6 overflow-x-auto hide-scrollbar scroll-smooth"
                    >
                        {playlists.map((playlist) => (
                            <div
                                key={playlist.id}
                                className="shrink-0 w-[35vw] sm:w-[25vw] md:w-[160px] lg:w-[170px]"
                            >
                                <div className="rounded overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d"
                                        alt={playlist.title}
                                        className="w-full h-[35vw] sm:h-[25vw] md:h-[160px] lg:h-[170px] object-cover rounded"
                                    />
                                </div>
                                <div className="mt-2">
                                    <h3 className="text-sm  font-semibold truncate">
                                        {playlist.title}
                                    </h3>
                                    <p className="text-xs text-gray-400 mt-1 truncate">
                                        {playlist.subtitle}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    );
};

export default HomePagePlaylists;
