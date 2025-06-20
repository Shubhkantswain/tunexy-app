import { useUIPreferencesStore } from "~/store/useUIPreferencesStore";

const PlaylistItemsSkeleton = () => {
    return (
        <>
            {
                Array.from({ length: 8 }).map((_, i) => (
                    <div className="shrink-0 w-[140px] md:w-[150px] animate-pulse">
                        <div className="rounded overflow-hidden">
                            <div className="w-full h-[140px] md:h-[150px] rounded bg-[#272727] flex items-center justify-center">

                            </div>

                        </div>
                        <div className="mt-2">
                            <div className="h-4 bg-[#272727] rounded mb-2"></div>
                            <div className="h-3 bg-[#272727] rounded w-3/4"></div>
                        </div>
                    </div>
                ))
            }
        </>
    );
};

const TrackScrollerSkeleton = () => {
    return (
        <section className="text-white">
            <div className='-ml-4 md:ml-0'>
                <div className="px-4 md:px-0 flex overflow-x-auto gap-10 md:gap-10 hide-scrollbar scroll-smooth">
                    {Array(4).fill(0).map((_, idx) => (
                        <div key={idx} className="flex flex-col gap-5 min-w-[270px] md:min-w-[350px]">
                            {Array(3).fill(0).map((_, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="relative flex-shrink-0">
                                        <div className="w-12 h-12 bg-[#272727] rounded-sm animate-pulse" />
                                    </div>

                                    <div className="flex-1 min-w-0 mr-0">
                                        <div className="h-4 bg-[#272727] rounded w-40 animate-pulse mb-1" />
                                        <div className="h-3 bg-[#272727] rounded w-28 animate-pulse" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


const DefaultListItemsSkeleton = () => {
    const { preferences: { panelSize } } = useUIPreferencesStore()

    return (
        <>
            <div className="flex-1 flex flex-col">
                <div className={`space-y-1 px-2.5 flex-grow ${panelSize ? "pt-2 pb-2" : "pt-0 pb-4"} overflow-auto`}>
                    {[...Array(8)].map((_, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 p-2 rounded-sm transition-colors group"
                        >
                            {/* Image Skeleton */}
                            <div className="relative flex-shrink-0">
                                <div className="w-12 h-12 rounded-sm bg-[#272727] animate-pulse" />
                            </div>

                            {/* Text Skeleton */}
                            <div className="flex-1 min-w-0 space-y-1">
                                <div className="h-4 bg-[#272727] rounded w-3/4 animate-pulse" />
                                <div className="h-3 bg-[#272727] rounded w-1/2 animate-pulse" />
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

const CompactListItemsSkeleton = () => {
    const { preferences: { panelSize } } = useUIPreferencesStore()

    return (
        <>
            <div className="flex-1 flex flex-col">
                <div className={`space-y-1 px-2.5 flex-grow ${panelSize ? "pt-2 pb-2" : "pt-0 pb-4"} overflow-auto`}>
                    {[...Array(8)].map((_, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 p-2 rounded-sm transition-colors group"
                        >
                            {/* Text Skeleton */}
                            <div className="flex-1 min-w-0 space-y-1">
                                <div className="h-4 bg-[#272727] rounded w-3/4 animate-pulse" />
                                <div className="h-3 bg-[#272727] rounded w-1/2 animate-pulse" />
                            </div>


                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

const DefaultGridItemsSkeleton = () => {
    const { preferences: { panelSize } } = useUIPreferencesStore()
    return (
        <>
            <div className="flex-1 flex flex-col">
                <div className={`space-y-1 px-2.5 flex-grow ${panelSize > 13 ? "pt-2 pb-2" : "pt-0 pb-4"} overflow-auto`}>

                    <div className={`p-2 grid ${panelSize > 28 ? 'grid-cols-3' :
                        panelSize < 17 ? 'grid-cols-1' : 'grid-cols-2'
                        } gap-6`}>
                        {[...Array(8)].map((_, index) => (
                            <div
                                key={index}
                                className="relative rounded-sm overflow-hidden transition-transform duration-200"
                            >
                                {/* Card Background Skeleton */}
                                <div className="aspect-square relative bg-[#272727] animate-pulse rounded-sm" />

                                {/* Text Skeleton */}
                                <div className="py-2 space-y-2">
                                    <div className="h-4 bg-[#272727] rounded w-3/4 animate-pulse" />
                                    <div className="h-3 bg-[#272727] rounded w-1/2 animate-pulse" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

const CompactGridItemsSkeleton = () => {
    const { preferences: { panelSize } } = useUIPreferencesStore()

    return (
        <div className="flex-1 flex flex-col">
            <div className={`space-y-1 px-2.5 flex-grow ${panelSize > 13 ? "pt-2 pb-2" : "pt-0 pb-4"} overflow-auto`}>
                <div className={`p-2 grid ${panelSize > 28 ? 'grid-cols-3' :
                    panelSize < 17 ? 'grid-cols-1' : 'grid-cols-2'
                    } gap-6`}>
                    {[...Array(8)].map((_, index) => (
                        <div
                            key={index}
                            className="relative rounded-sm overflow-hidden transition-transform duration-200"
                        >
                            {/* Card Background Skeleton */}
                            <div className="aspect-square relative bg-[#272727] animate-pulse rounded-sm" />

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

const SmallPanelLibraryItemsSkeleton = () => {
    const { preferences: { panelSize } } = useUIPreferencesStore()

    return (
        <>
            <div className="flex-1 flex flex-col">
                <div className={`space-y-1 px-2.5 flex-grow ${panelSize > 13 ? "pt-2 pb-2" : "pt-0 pb-4"} overflow-auto`}>

                    {[...Array(8)].map((_, index) => (
                        <div
                            key={index}
                            className="flex justify-center group"
                        >
                            <div className="p-2 rounded-sm relative flex-shrink-0">
                                <div className="w-12 h-12 rounded-sm bg-[#272727] animate-pulse" />
                            </div>
                        </div>
                    ))}

                </div>
            </div>

        </>
    )
}

const PlaylistInfoSkeleton = () => {
    return (
        <div className="mb-10 w-full flex flex-col items-center lg:flex-row lg:items-center gap-6 rounded-sm text-center lg:text-left">
            {/* Skeleton Playlist Cover */}
            <div className="w-[230px] h-[230px] md:w-[250px] md:h-[250px] flex-shrink-0 rounded-sm overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-[#272727] animate-pulse rounded-sm" />
            </div>

            {/* Skeleton Text Info */}
            <div className="flex flex-col gap-3 justify-center items-center lg:items-start w-full max-w-xl">
                <div className="h-4 w-20 bg-[#272727] rounded animate-pulse" />
                <div className="h-6 md:h-8 w-3/4 bg-[#272727] rounded animate-pulse" />
                <div className="h-4 w-1/2 bg-[#272727] rounded animate-pulse" />
                <div className="h-3 w-2/3 bg-[#272727] rounded animate-pulse" />
            </div>
        </div>
    )
}

const PlaylistTracksSkeleton = () => {
    const { preferences: { panelSize } } = useUIPreferencesStore()

    return (
        <>
            {
                [...Array(6)].map((_, index) => (
                    <div key={index}>
                        <div className="flex items-center justify-between p-4 transition-colors group">
                            {/* Left side - Number, image, and info */}
                            <div className="flex items-center space-x-4 flex-1 min-w-0">
                                <div className="w-4 text-gray-500 text-sm font-medium -mr-2">
                                    <div className="w-3 h-3 bg-[#272727] rounded animate-pulse" />
                                </div>

                                {/* Skeleton image (with play hover normally) */}
                                {true && (
                                    <div className="relative">
                                        <div className="w-12 h-12 rounded bg-[#272727] animate-pulse" />
                                    </div>
                                )}

                                {/* Title & Artist Skeleton */}
                                <div className="flex-1 min-w-0 space-y-2">
                                    <div className="h-4 w-3/4 bg-[#272727] rounded animate-pulse" />
                                    <div className="h-3 w-1/2 bg-[#272727] rounded animate-pulse" />
                                </div>
                            </div>

                            {/* Right side - Date, Duration, Icons */}
                            <div className="flex items-center gap-24 flex-shrink-0 min-w-fit">
                                {/* Date Added Skeleton */}
                                <div className={`hidden ${panelSize > 25 ? "lg:hidden" : "lg:block"} flex-1 px-2`}>
                                    <div className="h-4 w-20 bg-[#272727] rounded animate-pulse" />
                                </div>

                                {/* Duration Skeleton (2 conditions for responsive) */}
                                <span
                                    className={`hidden lg:hidden px-2 ${panelSize > 12 ? "md:hidden" : "md:block"
                                        } min-w-0`}
                                >
                                    <div className="h-4 w-10 bg-[#272727] rounded animate-pulse" />
                                </span>
                                <span
                                    className={`hidden px-2 ${panelSize > 30 ? "lg:hidden" : "lg:block"
                                        } min-w-0`}
                                >
                                    <div className="h-4 w-10 bg-[#272727] rounded animate-pulse" />
                                </span>

                                {/* Icons Skeleton */}
                                <div className="flex gap-7 flex-shrink-0 px-2">
                                    <div className="w-5 h-5 bg-[#272727] rounded-full animate-pulse hidden sm:block" />
                                    <div className="w-5 h-5 bg-[#272727] rounded-full animate-pulse" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export { PlaylistItemsSkeleton, TrackScrollerSkeleton, DefaultListItemsSkeleton, CompactListItemsSkeleton, DefaultGridItemsSkeleton, CompactGridItemsSkeleton, SmallPanelLibraryItemsSkeleton, PlaylistInfoSkeleton, PlaylistTracksSkeleton }