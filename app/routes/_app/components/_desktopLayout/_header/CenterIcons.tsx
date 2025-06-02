import React from 'react'
import { ExploreIcon, HomeIcon, LibrarayIcon, SearchIcon } from '~/Svgs'

function CenterIcons() {
    return (
        <div className="flex items-center gap-6">
            <button className="p-2 rounded-full bg-[#1f1f1f] hover:bg-[#292929] text-[#DCDCDC] hover:text-[#ffffff] transition">
                <HomeIcon width="20" height="20" />
            </button>
            <button className="p-2 rounded-full bg-[#1f1f1f] hover:bg-[#292929] text-[#DCDCDC] hover:text-[#ffffff] transition">
                <ExploreIcon width="20" height="20"  />
            </button>
            <button className="p-2 rounded-full bg-[#1f1f1f] hover:bg-[#292929] text-[#DCDCDC] hover:text-[#ffffff] transition">
                <LibrarayIcon width="20" height="20"  />

            </button>

            <div className="flex items-center text-[#919191] bg-white px-6 py-2 rounded-full w-[280px] cursor-pointer">
                <input
                    readOnly
                    type="text"
                    placeholder="Search"
                    className="bg-transparent outline-none text-sm placeholder:text-zinc-400 flex-1 cursor-pointer"
                />
                <SearchIcon width="20" height="20" />
            </div>
        </div>
    )
}

export default CenterIcons