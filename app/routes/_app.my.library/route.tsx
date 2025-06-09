import React from 'react';
import CategorieSection from '../_app._index/_components/CategorieSection';
import TrackSection from '../_app._index/_components/TrackSection';
import ListSection from './_components/ListSection';
import { Plus } from 'lucide-react';

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

const LibraryPage = () => {
  return (
    <div className="min-h-screen text-white">
      <h2 className="text-lg md:text-xl mb-4 font-bold">
        Library
      </h2>

      <div className="flex gap-4 mb-8">
        {['Playlists', 'Podcasts', 'Songs', 'Albums'].map((tab) => (
          <button
            key={tab}
            className="bg-[#2d2f2f] hover:bg-[#535555] text-xs text-white py-1.5 px-4 rounded-full"
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Header */}
      <div className="flex items-center justify-between -mb-2">
        <h2 className="text-white text-xl font-semibold">Playlists</h2>
        <button className="flex items-center gap-2 text-xs px-3 py-1.5 bg-[#2d2f2f] hover:bg-[#535555] text-white rounded-full font-medium transition">
          <Plus size={16} />
          New Playlist
        </button>
      </div>

      {Array.from({ length: 5 }).map((_, index) => (
        <ListSection key={index} />
      ))}
    </div>
  );
};

export default LibraryPage;
