import React from 'react'

const dropdownItems = [
    'My Profile',
    'Your Amazon Music Settings',
    'Music Preferences',
    'Change Display Language',
    'Block Explicit Songs',
    'Import your playlists',
    'Terms and Conditions',
    'Get Help',
    'Sign Out',
];

const AccountDrowDown = () => {
    return (
        <div
            className="z-[100] absolute right-0 mt-3 w-64 rounded-md bg-[#282828] shadow-xl 
                 border border-[#1f1f1f] max-h-[calc(90vh-120px)] overflow-y-auto"
        >
            {dropdownItems.map((item, index) => (
                <div
                    key={index}
                    className="px-4 py-3 text-xs text-white hover:bg-white/10 cursor-pointer border-b border-white/10 last:border-none"
                >
                    {item}
                </div>
            ))}
        </div>
    );
};


export default AccountDrowDown