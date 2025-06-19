import React, { useEffect, useRef, useState } from 'react'
import { VIEW_ICONS, VIEW_OPTIONS } from '~/constants';
import { DefaultListIcon, MoreIcon, PlayIcon, ShareIcon } from '~/Svgs'
import { ViewType } from '~/types';

interface ActionButtonsProps {
    view: ViewType;
    setView: React.Dispatch<React.SetStateAction<ViewType>>;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ view, setView }) => {
    const dropdownRef = useRef<HTMLDivElement>(null);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const getViewIcon = () => {
        return VIEW_ICONS[view] || VIEW_ICONS["Default List"];
    };

    const CurrentViewIcon = getViewIcon();

    return (
        <div className="flex items-center gap-6 mt-4">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-xs text-black font-semibold p-3 rounded-full flex items-center gap-2 shadow-sm">
                <PlayIcon width="20" height="20" />
            </button>

            <button>
                <ShareIcon width="24" height="24" />
            </button>

            <div className="relative" ref={dropdownRef}>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="mt-[5px] active:scale-95 active:text-gray-400">
                    <CurrentViewIcon width="16" height="16"/>
                </button>

                <div
                    className={`absolute left-1/2 top-full mt-2 w-40 bg-[#282828] border border-zinc-700 rounded-sm shadow-xl overflow-hidden z-50
                            transform ${isDropdownOpen
                            ? 'opacity-100 translate-y-0 scale-100 -translate-x-1/2'
                            : 'opacity-0 -translate-y-2 scale-95 -translate-x-1/2 pointer-events-none'
                        }`}

                >
                    <div className="py-1">
                        <div className="px-3 py-2 text-xs font-medium text-gray-400 border-b border-zinc-700">
                            View as
                        </div>
                        {VIEW_OPTIONS.map((option, index) => {
                            const layoutContext = "playlistPage"; // or "desktopHeader"

                            // If this item shouldn't show in the current layout, return null
                            if (!option.displayOn.includes(layoutContext)) return null;

                            return (
                                <button
                                    key={option.label}
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
                            )
                        })}
                    </div>
                </div>
            </div>

            <button>
                <MoreIcon width="20" height="20" />
            </button>
        </div>
    )
}

export default ActionButtons