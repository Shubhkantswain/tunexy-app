import React, { useEffect, useRef, useState } from 'react'
import { AccountIcon } from '~/Svgs';

const UserProfile = () => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        // <div className="">

        <div className="relative z-50 flex flex-1 basis-0 justify-end">
            <div ref={dropdownRef}>

                <button
                    onClick={() => setOpen(!open)}
                    className="p-2 rounded-full bg-[#1f1f1f] hover:bg-[#292929] text-[#DCDCDC] hover:text-white active:scale-95"
                >
                    <AccountIcon width="20" height="20" />
                </button>

                {open && (
                    <div className="absolute right-0 top-[51px] w-56 bg-[#181818] rounded-sm shadow-lg z-50 text-sm border border-gray-700">
                        {["Account", "Profile", "Upgrade to Premium", "Support", "Download"].map((item) => (
                            <div
                                key={item}
                                className="flex items-center justify-between px-4 py-2 hover:bg-gray-700 cursor-pointer"
                            >
                                <span>{item}</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7v7m0-7L10 14" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 5v14h14v-7" />
                                </svg>
                            </div>
                        ))}
                        <div className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Settings</div>
                        <hr className="border-gray-700" />
                        <div className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Log out</div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default UserProfile