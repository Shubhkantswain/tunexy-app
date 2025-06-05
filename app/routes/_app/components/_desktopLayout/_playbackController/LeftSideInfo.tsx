import React from 'react'
import { ExpandIcon, MinimizeIcon } from '~/Svgs';

interface LeftSideInfoProps {
    isExpanded: boolean;
    handleToggleExpandScreen: () => void
}

const LeftSideInfo: React.FC<LeftSideInfoProps> = ({ isExpanded, handleToggleExpandScreen }) => {
    return (
        <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="relative group cursor-pointer"
                onClick={handleToggleExpandScreen}
            >
                <img
                    src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d"
                    alt="cover"
                    className="w-12 h-12 object-cover rounded-sm flex-shrink-0 transition-opacity duration-200 group-hover:opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <button className="p-1 rounded-full text-white hover:text-[#A2E1E2] transition-colors duration-200">
                        {
                            isExpanded ? <MinimizeIcon width="20" height="20" /> : <ExpandIcon width="20" height="20" />
                        }
                    </button>
                </div>
            </div>

            <div className="text-sm min-w-0 flex-1">
                <h3 className="font-semibold truncate text-sm">
                    Mahabharata Episode 1: Beginnings
                </h3>
                <p className="text-xs text-gray-400 truncate">
                    The Stories of Mahabharata
                </p>
            </div>
        </div>
    )
}

export default LeftSideInfo