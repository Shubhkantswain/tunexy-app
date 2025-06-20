import { useUIPreferencesStore } from '~/store/useUIPreferencesStore';
import { LibrarayIcon, PlusIcon } from '~/Svgs';

interface HeaderProps {
    isScrolled: boolean
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
    const { preferences: { panelSize }, setPreferences } = useUIPreferencesStore()


    return (
        <>
            {
                panelSize > 13 ? (
                    <div className='px-4 pt-4'>
                        <div className="flex items-center justify-between">
                            <h2
                                className="text-md font-bold text-gray-200 flex items-center group gap-2 cursor-pointer hover:text-gray-400"
                                onClick={() => {
                                    const newSize = window.innerWidth >= 1024 ? 7 : 10;
                                    setPreferences({ panelSize: newSize })
                                    localStorage.setItem("panelSize", `${newSize}`)
                                }}
                                title="Click to collapse library panel"
                            >
                                My Library
                            </h2>

                            <div className="flex items-center gap-2">
                                <button className={`${panelSize < 29 ? "md:p-2" : "md:gap-1 px-4 py-2"} lg:gap-1 lg:px-4 lg:py-2 flex items-center hover:bg-[#282828] bg-[#1f1f1f] rounded-full transition-colors`}>

                                    <PlusIcon width="15" height="15" />
                                    <span className={`${panelSize < 29 ? "md:hidden" : "md:block"} lg:block text-xs text-white font-semibold`}>Create</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className={`${isScrolled ? "shadow-[0_4px_5px_rgba(0,0,0,0.6)]" : ""} grid place-items-center w-full py-4 space-y-4`}>
                            <button className=" text-white rounded-full transition-colors"
                                onClick={() => {
                                    const newSize = 25;
                                    setPreferences({ panelSize: newSize })
                                    localStorage.setItem("panelSize", `${newSize}`)
                                }}
                            >
                                <LibrarayIcon width="27" height="27" />
                            </button>
                            <button className="hover:bg-[#282828] bg-[#1f1f1f] text-white p-2 rounded-full transition-colors">
                                <PlusIcon width="15" height="15" />
                            </button>
                        </div>
                    </>

                )
            }
        </>
    )
}

export default Header