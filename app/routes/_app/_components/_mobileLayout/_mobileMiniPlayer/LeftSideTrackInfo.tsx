import React from 'react'

const LeftSideTrackInfo = () => {
    return (
        <div className="flex items-center gap-5 min-w-0"> {/* allow children to truncate */}
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU0de2-3rXVqsxmRUmLjAGvIpG7lq6s_9OFw&s"
                alt="Song Thumbnail"
                className="w-11 h-11 rounded-md object-cover"
            />
            <div className="flex flex-col leading-tight min-w-0 -ml-2"> {/* allow truncation inside */}
                <h3 className="text-sm font-semibold truncate">
                    The Internet Said So Thats Why
                </h3>
                <p className="text-xs text-gray-400 mt-1 truncate">
                    Hemamand, The Director
                </p>
            </div>
        </div>
    )
}

export default LeftSideTrackInfo