import React from 'react'

const LeftSideInfo = () => {
    return (
        <div className="flex items-center gap-5 min-w-0"> {/* allow children to truncate */}
            <img
                src="https://m.media-amazon.com/images/I/81NhNYtCisL._SX472_SY472_BL0_QL100__UX56_FMwebp_QL85_.jpg"
                alt="Song Thumbnail"
                className="w-11 h-11 rounded-md object-cover"
            />
            <div className="flex flex-col leading-tight min-w-0 -ml-2"> {/* allow truncation inside */}
                <span className="text-sm font-medium truncate">
                    The Internet Said So Thats Why
                </span>
                <span className="text-xs text-gray-400 truncate">
                    Hemamand, The Director
                </span>
            </div>
        </div>
    )
}

export default LeftSideInfo
