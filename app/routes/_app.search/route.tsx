import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState('');

  const handleClear = () => {
    setSearchValue('');
  };

  const handleSubmit = () => {
    console.log('Search submitted:', searchValue);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="relative">
        <div className="relative flex items-center bg-gray-800 rounded-lg border border-gray-700 focus-within:border-cyan-400 transition-colors shadow-lg">
          {/* Search Input */}
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search..."
            className="flex-1 bg-transparent text-white placeholder-gray-400 px-3 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4 rounded-l-lg focus:outline-none text-sm sm:text-base lg:text-lg min-w-0"
          />
          
          {/* Clear Button */}
          {searchValue && (
            <button
              type="button"
              onClick={handleClear}
              className="p-2 sm:p-2.5 lg:p-3 text-gray-400 hover:text-white transition-colors flex-shrink-0"
              aria-label="Clear search"
            >
              <X size={16} className="sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
            </button>
          )}
          
          {/* Search Button */}
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 p-2 sm:p-3 lg:p-4 rounded-r-lg transition-colors group flex-shrink-0"
            aria-label="Search"
          >
            <Search size={16} className="text-white sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
          </button>
        </div>
      </div>
      
      {/* Demo text */}
      <p className="text-gray-400 text-xs sm:text-sm mt-3 sm:mt-4 text-center">
        Type something and press Enter or click the search button
      </p>
    </div>
  );
}