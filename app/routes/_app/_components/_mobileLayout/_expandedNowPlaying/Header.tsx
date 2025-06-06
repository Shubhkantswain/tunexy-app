import React from 'react'
import { DownArrowIcon, QueueIcon } from '~/Svgs'

interface HeaderProps {
    onMinimize: () => void
}

const Header: React.FC<HeaderProps> = ({ onMinimize }) => {
    return (
        <div className="p-4 flex items-center justify-between relative">
            <button
                className="relative group hover:text-[#93D0D5] text-white transition-colors duration-300"
                onClick={onMinimize}
            >
                <DownArrowIcon />
            </button>

            <button className="relative group text-white hover:text-[#93D0D5] transition-colors duration-300">
                <QueueIcon />
            </button>
        </div>
    )
}

export default Header