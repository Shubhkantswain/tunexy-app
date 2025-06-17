import React from 'react'
import Logo from '../../../Components/Logo'
import UserProfile from '../../../Components/UserProfile'

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl h-[62px] border-b border-[#2E3030]">
            <div className="w-full h-full flex items-center justify-between px-6">
                {/* Logo on the left */}
                <Logo />

                {/* Account Icon on the right */}
                <UserProfile />
            </div>
        </header>
    )
}
 
export default Header