import React from 'react'
import { VIEW_OPTIONS } from '~/constants'

const DropdownMenu = () => {
    return (
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
                        // onClick={() => setView(option.label)}
                        className={`w-full px-3 py-3 text-left text-xs hover:bg-[#3E3E3E] transition-all duration-200 flex items-center gap-3 ${'view' === option.label
                            ? 'text-[#3babdb] bg-[#3E3E3E]'
                            : 'text-gray-300'
                            }`}
                        style={{
                            animationDelay: `${index * 50}ms`
                        }}
                    >
                        <span className="text-base"><option.icon width="15" height="15" /></span>
                        <span>{option.label}</span>
                        {'view' === option.label && (
                            <span className="ml-auto text-[#3babdb] text-xs">✓</span>
                        )}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default DropdownMenu