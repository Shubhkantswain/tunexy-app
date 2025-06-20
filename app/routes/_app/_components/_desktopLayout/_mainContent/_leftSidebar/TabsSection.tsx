import { useEffect, useRef, useState } from "react";
import { tabs } from "~/constants";
import { useUIPreferencesStore } from "~/store/useUIPreferencesStore";

interface TabsSectionProps {
    isScrolled: boolean;
}

const TabsSection: React.FC<TabsSectionProps> = ({ isScrolled }) => {
    const { preferences: { panelSize } } = useUIPreferencesStore()

    const [activeTab, setActiveTab] = useState(tabs[0]);
    const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0 });

    const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

    useEffect(() => {
        if (tabRefs.current.length > 0) {
            const activeIndex = tabs.indexOf(activeTab);
            const activeElement = tabRefs.current[activeIndex];

            if (activeElement) {
                setUnderlineStyle({
                    width: activeElement.offsetWidth,
                    left: activeElement.offsetLeft
                });
            }
        }
    }, [activeTab]);

    return (
        <>
            {panelSize > 13 ? (
                <div className={`${isScrolled ? "shadow-[0_4px_5px_rgba(0,0,0,0.6)]" : ""} py-4 px-4`}>
                    <div className="flex gap-6 overflow-x-auto hide-scrollbar relative">
                        {tabs.map((tab, index) => (
                            <button
                                key={tab}
                                ref={el => tabRefs.current[index] = el}
                                onClick={() => setActiveTab(tab)}
                                className={`rounded-full text-xs font-medium whitespace-nowrap transition-colors pb-2 relative ${activeTab === tab
                                    ? 'text-[#3babdb]'
                                    : 'text-white hover:text-gray-300'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}

                        {/* Active tab underline */}
                        <div
                            className="absolute bottom-0 h-0.5 bg-[#3babdb] transition-all duration-300"
                            style={{
                                width: `${underlineStyle.width}px`,
                                left: `${underlineStyle.left}px`
                            }}
                        />
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default TabsSection;