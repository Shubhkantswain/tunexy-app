import React from 'react'

interface TabsSectionProps {
    panelSize: number;
    isScrolled: boolean
}

const TabsSection: React.FC<TabsSectionProps> = ({ panelSize, isScrolled }) => {
    const tabs = ['Playlists', 'Artists', 'Albums', 'Podcasts'];

    return (
        <div className={`${isScrolled ? "shadow-[0_4px_10px_rgba(0,0,0,0.6)]" : ""} px-4 pb-3 mt-3`}>
            {
                panelSize > 13 ? (
                    <div className="flex gap-6 overflow-x-auto hide-scrollbar">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                // onClick={() => setActiveTab(tab)}
                                className={`rounded-full text-xs font-medium whitespace-nowrap transition-colors ${"Playlists" === tab
                                    ? 'text-[#3babdb]'
                                    : 'text-white '
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                ) : (
                    <>


                    </>
                )
            }
        </div>
    )
}

export default TabsSection