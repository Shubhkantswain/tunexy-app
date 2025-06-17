import React, { useState, useRef, useEffect } from 'react'
import { CompactGridIcon, CompactListIcon, DefaultGridIcon, DefaultListIcon, SearchIcon } from '~/Svgs'

type ViewType = "Default List" | "Compact List" | "Default Grid" | "Compact Grid";
interface SearchTogglePanelProps {
    panelSize: number;
    view: ViewType;
    setView: React.Dispatch<React.SetStateAction<ViewType>>;
}


const viewOptions = [
    { id: 'compact', label: 'Default List', icon: DefaultListIcon },
    { id: 'list', label: 'Compact List', icon: CompactListIcon },
    { id: 'grid', label: 'Default Grid', icon: DefaultGridIcon },
    { id: 'large-grid', label: 'Compact Grid', icon: CompactGridIcon }
];

const SearchTogglePanel: React.FC<SearchTogglePanelProps> = ({ panelSize, view, setView }) => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    const dropdownRef = useRef<HTMLDivElement>(null);


    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node) &&
                !buttonRef.current?.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    return (
        <>
            {panelSize > 13 && (
                <div className="flex items-center justify-between relative px-4">
                    {/* Search bar */}
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

                    {/* List icon button with dropdown */}
                    <div className="relative">
                        <button
                            ref={buttonRef}
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                              className={`p-1.5 rounded-full transition-all duration-150 text-white active:scale-95 active:text-gray-400`}
                            aria-expanded={isDropdownOpen}
                            aria-haspopup="true"
                        >
                            {
                                view == "Compact List" ? (
                                    <CompactListIcon width="15" height="15" />
                                ) : (
                                    view == "Default Grid" ? (
                                        <DefaultGridIcon width="15" height="15" />

                                    ) : (
                                        view == "Compact Grid" ? (
                                            <CompactGridIcon width="15" height="15" />
                                        ) : (
                                            <DefaultListIcon width="15" height="15" />
                                        )
                                    )
                                )
                            }
                        </button>

                        {/* Dropdown Menu */}
                        <div
                            ref={dropdownRef}
                            className={`absolute right-0 top-full mt-2 w-40 bg-[#282828] border border-zinc-700 rounded-sm shadow-xl overflow-hidden z-50 ${isDropdownOpen
                                ? 'opacity-100 transform translate-y-0 scale-100'
                                : 'opacity-0 transform translate-y-[-10px] scale-95 pointer-events-none'
                                }`}
                        >
                            <div className="py-1">
                                <div className="px-3 py-2 text-xs font-medium text-gray-400 border-b border-zinc-700">
                                    View as
                                </div>
                                {viewOptions.map((option, index) => (
                                    <button
                                        key={option.id}
                                        onClick={() => setView(option.label)}
                                        className={`w-full px-3 py-3 text-left text-xs hover:bg-[#3E3E3E] transition-all duration-200 flex items-center gap-3 ${view === option.label
                                            ? 'text-[#3babdb] bg-[#3E3E3E]'
                                            : 'text-gray-300'
                                            }`}
                                        style={{
                                            animationDelay: `${index * 50}ms`
                                        }}
                                    >
                                        <span className="text-base"><option.icon width="15" height="15" /></span>
                                        <span>{option.label}</span>
                                        {view === option.label && (
                                            <span className="ml-auto text-[#3babdb] text-xs">✓</span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default SearchTogglePanel