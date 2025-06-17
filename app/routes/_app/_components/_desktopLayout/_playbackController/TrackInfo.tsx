import React from 'react'

const TrackInfo = () => {
    return (
        <div className="flex items-center space-x-3 flex-1 min-w-0">
            <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-600 rounded flex-shrink-0 overflow-hidden">
                <img
                    src="/api/placeholder/48/48"
                    alt="Mahabharata Episode 1"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold truncate">
                    Mahabharata Episode 1: Beginnings
                </h3>
                <p className="text-xs text-gray-400 mt-1 truncate">
                    The Stories of Mahabharata
                </p>
            </div>
        </div>
    )
}

export default TrackInfo