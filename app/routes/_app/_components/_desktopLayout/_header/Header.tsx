import Logo from '../../../Components/Logo';
import UserProfile from '../../../Components/UserProfile';
import CenterNavigationIcons from './CenterNavigationIcons';


const Header = () => {
    return (
        <header className="bg-black bg-opacity-95 backdrop-blur-sm px-[16px] py-[10px] flex items-center justify-between fixed top-0 left-0 right-0 z-50">
            {/* Left - Logo */}
            <Logo />

            {/* Center - Navigation and Search */}
            <CenterNavigationIcons />

            {/* Right - userProfile */}
            <UserProfile />
        </header>
    )
}

export default Header 