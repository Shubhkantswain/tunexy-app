import { Outlet } from '@remix-run/react';
import React, { useEffect, useRef, useState } from 'react';
import LeftSidebar from './_leftSidebar/LeftSidebar';
import { ExitScreenIcon, FullScreenIcon, MinimizeIcon, MoreIcon } from '~/Svgs';
import ExpandedNowPlaying from './ExpandedNowPlaying';

interface MainContentProps {
    isExpanded: boolean;
    onMinimize: () => void
}

const MainContent: React.FC<MainContentProps> = ({ isExpanded, onMinimize }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [panelSize, setPanelSize] = useState(22); // Sidebar width in %
    const [isResizing, setIsResizing] = useState(false);

    const startResizing = () => {
        setIsResizing(true);
        document.body.style.userSelect = 'none';
        document.body.style.cursor = 'col-resize';
    };

    const stopResizing = () => {
        setIsResizing(false);
        document.body.style.userSelect = '';
        document.body.style.cursor = '';
    };

    const resize = (clientX: number) => {
        if (!isResizing || !containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const newSize = ((clientX - rect.left) / rect.width) * 100;
        if (newSize > 10 && newSize < 40) {
            setPanelSize(newSize);
        }
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            resize(e.clientX);
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (e.touches.length > 0) {
                resize(e.touches[0].clientX);
            }
        };

        if (isResizing) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('touchmove', handleTouchMove);
            window.addEventListener('mouseup', stopResizing);
            window.addEventListener('touchend', stopResizing);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('mouseup', stopResizing);
            window.removeEventListener('touchend', stopResizing);
        };
    }, [isResizing]);

    const [isFullScreen, setIsFullScreen] = useState(false)

    const handleToggleFullscreen = () => {
        const elem = document.documentElement;

        if (!document.fullscreenElement) {
            elem.requestFullscreen().catch((err) => {
                console.error(`Error enabling full-screen mode: ${err.message}`);
            });
            setIsFullScreen(true)
        } else {
            document.exitFullscreen();
            setIsFullScreen(false)
        }
    };

    return (
        <div className="flex-1  overflow-hidden hidden md:flex pt-[56px] pb-[75px]">
            <div ref={containerRef} className="flex w-full h-full px-[5px]">
                {
                    !isExpanded ? (
                        <>
                            {/* Left Sidebar */}
                            <div style={{ width: `${panelSize}%` }} className='mr-0.5'>
                                <LeftSidebar panelSize={panelSize} />
                            </div>

                            {/* Resizer Handle */}
                            <div
                                onMouseDown={startResizing}
                                onTouchStart={startResizing}
                                className="w-[1px] bg-transparent hover:bg-white cursor-col-resize transition-colors touch-none"
                            />

                            {/* Main Content */}
                            <div
                                style={{ width: `${100 - panelSize}%` }}
                                className="h-full bg-[#121212] rounded-md ml-0.5 custom-scrollbar overflow-y-auto"
                            >
                                <div className="p-4 sm:p-6 md:p-8 max-w-[90rem] mx-auto">
                                    <Outlet />
                                </div>
                            </div>
                        </>
                    ) : (
                        <ExpandedNowPlaying onMinimize={onMinimize}/>
                    )
                }
            </div>
        </div>
    );
}

export default MainContent;