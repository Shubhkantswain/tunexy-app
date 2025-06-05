import React from 'react'

const LeftSideInfo = () => {
    return (
        <div className="flex items-center gap-4">
            <img
                src="https://m.media-amazon.com/images/I/81NhNYtCisL._SX472_SY472_BL0_QL100__UX56_FMwebp_QL85_.jpg"
                alt="Song Thumbnail"
                className="w-11 h-11 rounded-md object-cover"
            />
            <div className="flex flex-col leading-tight">
                <span className="text-sm font-medium">Holiday - A COLORS SHOW</span>
                <span className="text-xs text-gray-400">Hemamand, COLORS</span>
            </div>
        </div>
    )
}

export default LeftSideInfo