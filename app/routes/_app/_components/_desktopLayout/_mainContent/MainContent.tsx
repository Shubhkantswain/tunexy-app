import { Outlet } from '@remix-run/react';
import React, { useEffect, useRef, useState } from 'react'
import LeftSidebar from './_leftSidebar/LeftSidebar';
import ExpandedNowPlaying from './_expandedNowPlaying/ExpandedNowPlaying';
import useDominantColor from '~/hooks/useDominantColor';
import Footer from '~/routes/_app/Components/Footer';
import { useLoadingStore } from '~/store/useLoadingStore';
import { useUIPreferencesStore } from '~/store/useUIPreferencesStore';

interface MainContentProps {
  isScreenExpanded: boolean;
  onScreenMinimize: () => void
}

const MainContent: React.FC<MainContentProps> = ({ isScreenExpanded, onScreenMinimize }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { preferences: { panelSize }, setPreferences } = useUIPreferencesStore()

  const [breakpoint, setBreakpoint] = useState<'sm' | 'md' | 'lg' | 'xl' | '2xl'>('sm');

  const [isResizing, setIsResizing] = useState(false);

  const startResizing = () => {
    setIsResizing(true);
    document.body.style.userSelect = 'none';
    document.body.style.cursor = 'grab';
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

    if (breakpoint == "lg") {
      if (newSize <= 8 && newSize >= 7) {
        setPreferences({ panelSize: newSize });
        localStorage.setItem("panelSize", `${newSize}`)
      }

      if (newSize >= 25 && newSize <= 40) {
        setPreferences({ panelSize: newSize });
        localStorage.setItem("panelSize", `${newSize}`)
      }
    }
    if (breakpoint == "md") {
      if (newSize <= 11 && newSize >= 10) {
        setPreferences({ panelSize: newSize });
        localStorage.setItem("panelSize", `${newSize}`)
      }

      if (newSize >= 25 && newSize <= 40) {
        setPreferences({ panelSize: newSize });
        localStorage.setItem("panelSize", `${newSize}`)
      }
    }
  };

  console.log(breakpoint);

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



  useEffect(() => {
    const getBreakpoint = () => {
      const width = window.innerWidth;
      if (width >= 1024) return 'lg';
      if (width >= 768) return 'md';
      return 'sm';
    };

    const updateBreakpoint = () => {
      const breakpoint = getBreakpoint()
      setBreakpoint(breakpoint)
    }

    updateBreakpoint(); // set on mount
    window.addEventListener('resize', updateBreakpoint);

    return () => {
      window.removeEventListener('resize', updateBreakpoint);
    };
  }, []);


  useEffect(() => {
    const minSize = breakpoint === "lg" ? 7 : 10;
    if (panelSize < minSize) {
      setPreferences({ panelSize: minSize });
    }
  }, [breakpoint]);




  console.log("pnell", panelSize);


  const { dominantColor } = useDominantColor("https://m.media-amazon.com/images/I/410ywXj9+AL._SX354_SY354_BL0_QL100__UX358_FMwebp_QL85_.jpg")

  useEffect(() => {
    const view = localStorage.getItem("view") || "Default List"
    const panelSize = Number(localStorage.getItem("panelSize"))

    setPreferences({ view, panelSize })
  }, [])


  return (
    <div className="flex flex-1 pt-[61px] pb-[82px] overflow-hidden px-[7px] gap-[3px]"
      ref={containerRef}
    >
      {/* Left Sidebar */}
      <aside
        className="bg-[#121212] flex flex-col rounded-lg"
        style={{ width: `${panelSize}%` }}
      >
        <LeftSidebar />

      </aside>

      {/* Drag Handle */}
      <div
        onMouseDown={startResizing}
        onTouchStart={startResizing}
        className="w-[1px] bg-transparent hover:bg-white cursor-grab transition-colors touch-none"
      />

      {/* Right Content Area */}
      <main
        className="flex-1 relative overflow-y-auto custom-scrollbar bg-[#121212] rounded-lg"
      >
        {/* Gradient Overlay */}
        {/* <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-green-600 via-[#121212] to-[#121212] pointer-events-none z-0" /> */}

        {
          isScreenExpanded ? (

            <ExpandedNowPlaying onScreenMinimize={onScreenMinimize} dominantColor={dominantColor || ""} />

          ) : (
            <>
              <div className="p-0"><Outlet /></div>
            </>

          )
        }
      </main>
    </div>
  )
}

export default MainContent

