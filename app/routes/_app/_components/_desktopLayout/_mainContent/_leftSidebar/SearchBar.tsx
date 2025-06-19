import React from 'react'
import { SearchIcon } from '~/Svgs'

const SearchBar = () => {
    return (
        <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-800 rounded-sm w-full mr-2">
            <div className="min-w-[20px] min-h-[20px] flex items-center justify-center">
                <SearchIcon width="15" height="15" />
            </div>
            <input
                type="text"
                placeholder="Search in Your Library"
                className="bg-transparent text-xs text-white placeholder-gray-400 focus:outline-none w-full"
            />
        </div>
    )
}

export default SearchBar