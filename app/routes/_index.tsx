import React from 'react';
import { Search, Home, Heart, Plus, Download, User, Bell, ChevronLeft, ChevronRight, Play, SkipBack, SkipForward, Repeat, Shuffle, Volume2, Maximize2 } from 'lucide-react';

const SpotifyLayout = ({ children }) => {
  return (
    <div className="h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="bg-black bg-opacity-95 backdrop-blur-sm border-b border-gray-800 px-6 py-3 flex items-center justify-between fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center space-x-4">
          {/* Spotify Logo */}
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-sm">♪</span>
          </div>
          
          {/* Navigation */}
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-800 rounded-full">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-800 rounded-full">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="What do you want to play?"
              className="w-full bg-gray-800 text-white rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-white focus:bg-gray-700"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <button className="bg-white text-black px-4 py-1 rounded-full text-sm font-medium hover:scale-105 transition-transform">
            Explore Premium
          </button>
          <button className="flex items-center space-x-1 text-gray-300 hover:text-white">
            <Download className="w-4 h-4" />
            <span className="text-sm">Install App</span>
          </button>
          <Bell className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center cursor-pointer">
            <span className="text-white font-bold text-sm">S</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 pt-16 pb-24">
        {/* Left Sidebar */}
        <aside className="w-64 bg-black p-4 flex flex-col space-y-6">
          {/* Your Library */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-gray-300 font-semibold">Your Library</h2>
              <div className="flex space-x-2">
                <Plus className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <ChevronRight className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex space-x-2 mb-4">
              <button className="px-3 py-1 bg-gray-800 text-white rounded-full text-sm hover:bg-gray-700">
                All
              </button>
              <button className="px-3 py-1 text-gray-300 rounded-full text-sm hover:bg-gray-800">
                Music
              </button>
              <button className="px-3 py-1 text-gray-300 rounded-full text-sm hover:bg-gray-800">
                Podcasts
              </button>
            </div>

            {/* Search in Library */}
            <div className="relative mb-4">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search in Your Library"
                className="w-full bg-transparent text-white text-sm py-2 pl-8 pr-2 focus:outline-none"
              />
            </div>
          </div>

          {/* Library Items */}
          <div className="flex-1 space-y-2">
            {/* Liked Songs */}
            <div className="flex items-center space-x-3 p-2 hover:bg-gray-800 rounded cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-700 to-blue-300 rounded flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-white font-medium">Liked Songs</div>
                <div className="text-gray-400 text-sm">73 songs</div>
              </div>
            </div>

            {/* Your Episodes */}
            <div className="flex items-center space-x-3 p-2 hover:bg-gray-800 rounded cursor-pointer">
              <div className="w-12 h-12 bg-green-700 rounded flex items-center justify-center">
                <Download className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-white font-medium">Your Episodes</div>
                <div className="text-gray-400 text-sm">Saved & downloaded episodes</div>
              </div>
            </div>

            {/* Artists */}
            <div className="space-y-2">
              <div className="flex items-center space-x-3 p-2 hover:bg-gray-800 rounded cursor-pointer">
                <div className="w-12 h-12 bg-gray-700 rounded-full overflow-hidden">
                  <img src="/api/placeholder/48/48" alt="Artist" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-white font-medium">Mithoon</div>
                  <div className="text-gray-400 text-sm">Artist</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-2 hover:bg-gray-800 rounded cursor-pointer">
                <div className="w-12 h-12 bg-gray-700 rounded-full overflow-hidden">
                  <img src="/api/placeholder/48/48" alt="Artist" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-white font-medium">Pritam</div>
                  <div className="text-gray-400 text-sm">Artist</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-2 hover:bg-gray-800 rounded cursor-pointer">
                <div className="w-12 h-12 bg-gray-700 rounded-full overflow-hidden">
                  <img src="/api/placeholder/48/48" alt="Artist" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-white font-medium">O Saathi</div>
                  <div className="text-gray-400 text-sm">Atif Aslam, Arko</div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Right Content Area (Children) */}
        <main className="flex-1 bg-gradient-to-b from-gray-900 to-black overflow-y-auto">
          {children}
        </main>
      </div>

      {/* Footer - Music Player */}
      <footer className="bg-gray-900 border-t border-gray-800 px-4 py-3 fixed bottom-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between">
          {/* Currently Playing */}
          <div className="flex items-center space-x-3 flex-1">
            <div className="w-14 h-14 bg-gray-700 rounded overflow-hidden">
              <img src="/api/placeholder/56/56" alt="Album" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="text-white font-medium text-sm">O Saathi</div>
              <div className="text-gray-400 text-xs">Atif Aslam, Arko</div>
            </div>
            <Heart className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
          </div>

          {/* Player Controls */}
          <div className="flex flex-col items-center space-y-2 flex-1">
            <div className="flex items-center space-x-4">
              <Shuffle className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
              <SkipBack className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                <Play className="w-4 h-4 text-black ml-0.5" />
              </button>
              <SkipForward className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Repeat className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
            </div>
            <div className="flex items-center space-x-2 w-full max-w-md">
              <span className="text-xs text-gray-400">0:00</span>
              <div className="flex-1 bg-gray-600 rounded-full h-1">
                <div className="bg-white w-1/4 h-1 rounded-full"></div>
              </div>
              <span className="text-xs text-gray-400">4:11</span>
            </div>
          </div>

          {/* Volume and Options */}
          <div className="flex items-center space-x-3 flex-1 justify-end">
            <Volume2 className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
            <div className="w-20 bg-gray-600 rounded-full h-1">
              <div className="bg-white w-3/4 h-1 rounded-full"></div>
            </div>
            <Maximize2 className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SpotifyLayout