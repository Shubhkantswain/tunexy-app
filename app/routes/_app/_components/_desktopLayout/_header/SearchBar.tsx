import { useLocation, useNavigate } from '@remix-run/react'
import React from 'react'
import { CloseIcon, MicIcon, SearchIcon } from '~/Svgs'

const SearchBar = () => {
    const { pathname } = useLocation()
    const isSearchPage = pathname == "/search"
    const navigate = useNavigate()

    return (
        <>
            {
                !isSearchPage ? (
                    <div
                        className="flex items-center text-[#919191] bg-white px-6 py-[10px] rounded-full w-[280px] cursor-pointer"
                        onClick={() => {
                            navigate("/search")
                        }}
                    >
                        <input
                            readOnly
                            type="text"
                            placeholder="Search"
                            className="bg-transparent outline-none text-sm placeholder:text-zinc-400 flex-1 cursor-pointer"
                        />
                        <SearchIcon width="20" height="20" />
                    </div>
                ) : (
                    <div className="flex items-center text-white bg-[#1f1f1f] px-4 py-[7.5px] rounded-md w-[350px]">
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-transparent outline-none text-sm placeholder:text-zinc-400 flex-1"
                        />
                        <div className="flex items-center gap-2 ml-2">
                            <button className="p-1.5 rounded-full bg-[#2a2a2a] hover:bg-[#3a3a3a] transition-colors">
                                <CloseIcon width="13" height="13" />
                            </button>
                            <button className="p-1.5 rounded-full bg-[#2a2a2a] hover:bg-[#3a3a3a] text-[#F28B82] transition-colors">
                                <MicIcon width="13" height="13" />
                            </button>
                            <button className="p-1.5 rounded-full bg-[#2a2a2a] hover:bg-[#3a3a3a] transition-colors">
                                <SearchIcon width="13" height="13" />
                            </button>
                        </div>
                    </div>

                )
            }
        </>
    )
}

export default SearchBar