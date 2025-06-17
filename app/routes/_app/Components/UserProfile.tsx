import { useEffect, useRef, useState } from 'react'
import { AccountIcon } from '~/Svgs';
import UserProfileDropDown from './UserProfileDropDown';

const UserProfile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            } 
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative z-50 flex flex-1 basis-0 justify-end">
            <div ref={dropdownRef}>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 rounded-full bg-[#1f1f1f] hover:bg-[#292929] text-[#DCDCDC] hover:text-white active:scale-95"
                >
                    <AccountIcon width="20" height="20" />
                </button>

               <UserProfileDropDown isOpen={isOpen}/>
            </div>
        </div>
    )
}

export default UserProfile