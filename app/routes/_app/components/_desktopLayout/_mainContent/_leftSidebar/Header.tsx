import React from 'react'
import { LibrarayIcon, PlusIcon } from '~/Svgs';

interface HeaderProps {
    panelSize: number;
}

const Header: React.FC<HeaderProps> = ({ panelSize }) => {
    return (
        <>
            {
                panelSize > 13 ? (
                    <div className="flex items-center justify-between p-4 pb-2">
                        <h2 className="text-sm font-semibold text-gray-200 flex items-center gap-2">
                            Your Library
                        </h2>

                        {panelSize > 19 ? (
                            <div className="flex items-center gap-2">
                                <button className="flex items-center gap-1 px-4 py-2 hover:bg-[#282828] bg-[#1f1f1f] rounded-full transition-colors">
                                    <PlusIcon width="15" height="15" />
                                    <span className="text-xs text-white font-semibold">Create</span>
                                </button>
                            </div>
                        ) : (
                            <button className="hover:bg-[#282828] bg-[#1f1f1f] text-white p-2 rounded-full transition-colors">
                                <PlusIcon width="15" height="15" />
                            </button>
                        )}
                    </div>
                ) : (
                    <div className="grid place-items-center mt-4 w-full space-y-2.5 -mb-3">
                        <button className=" text-white p-2 rounded-full transition-colors">
                            <LibrarayIcon width="27" height="27" />
                        </button>
                        <button className="hover:bg-[#282828] bg-[#1f1f1f] text-white p-2 rounded-full transition-colors">
                            <PlusIcon width="15" height="15" />
                        </button>
                    </div>

                )
            }
        </>
    )
}

export default Header