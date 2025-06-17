import Header from './_header/Header'
import MobileMiniPlayer from './_mobileMiniPlayer/MobileMiniPlayer'
import ExpandedNowPlaying from './_expandedNowPlaying/ExpandedNowPlaying'
import MobileNavigationFooter from './_mobileNavigationFooter/MobileNavigationFooter'
import { Outlet } from '@remix-run/react'
import { useState } from 'react'

function MobileLayout() {
  const [isScreenExpanded, setIsScreenExpanded] = useState(false)
  const screenExpand = () => setIsScreenExpanded(true);
  const screenMinimize = () => setIsScreenExpanded(false);

  return (
    <div className="bg-[#121212] text-white min-h-screen block md:hidden">
      {/* Fixed Header */}
      <Header />

      {/* Scrollable Content Area */}
      <main className="pt-[62px] pb-[135px] h-full bg-[#121212]">
        <Outlet />
      </main>

      {/* Mobile Mini Player */}
      <MobileMiniPlayer onScreenExpand={screenExpand} />

      <ExpandedNowPlaying isScreenExpanded={isScreenExpanded} onScreenMinimize={screenMinimize} />

      {/* Fixed Mobile Navigation Footer */}
      <MobileNavigationFooter />
    </div>
  )
}

export default MobileLayout

