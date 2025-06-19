import React, { useEffect, useRef, useState } from 'react'
import { VIEW_ICONS, VIEW_OPTIONS } from '~/constants'
import { ViewType } from '~/types';

interface ViewTypeButtonProps {
    view: ViewType;
    setView: React.Dispatch<React.SetStateAction<ViewType>>;
}

const ViewTypeButton: React.FC<ViewTypeButtonProps> = ({ view, setView }) => {
    const dropdownRef = useRef<HTMLDivElement>(null);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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
        <div className="relative">
            <div ref={dropdownRef}>
                <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`p-1.5 rounded-full transition-all duration-150 text-white active:scale-95 active:text-gray-400`}
                    aria-expanded={isDropdownOpen}
                    aria-haspopup="true"
                >
                    <CurrentViewIcon width="15" height="15" />
                </button>

                {/* Dropdown Menu */}
                <div
                    className={`absolute right-0 top-full mt-2 w-40 bg-[#282828] border border-zinc-700 rounded-sm shadow-xl overflow-hidden z-50 ${isDropdownOpen
                        ? 'opacity-100 transform translate-y-0 scale-100'
                        : 'opacity-0 transform translate-y-[-10px] scale-95 pointer-events-none'
                        }`}
                >
                    <div className="py-1">
                        <div className="px-3 py-2 text-xs font-medium text-gray-400 border-b border-zinc-700">
                            View as
                        </div>
                        {VIEW_OPTIONS.map((option, index) => (
                            <button
                                key={option.label}
                                onClick={() => {
                                    setView(option.label)
                                    localStorage.setItem("view", option.label)
                                }}
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
    )
}

export default ViewTypeButton