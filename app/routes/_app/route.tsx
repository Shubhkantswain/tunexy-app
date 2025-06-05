import DesktopLayout from './components/_desktopLayout/DesktopLayout';
import MobileLayout from './components/_mobileLayout/MobileLayout';

export default function AppLayout() {
    return (
        <>
            <DesktopLayout />

            <MobileLayout />
        </>

    );
}