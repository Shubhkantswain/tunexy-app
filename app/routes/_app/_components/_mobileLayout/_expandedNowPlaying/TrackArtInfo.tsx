import { MoreIcon, PlusIcon } from '~/Svgs'

const TrackArtInfo = () => {
    return (
        <div className="px-8 pt-8 -mt-7">
            <div
                className={`aspect-square w-full max-w-sm lg:max-w-[300px] lg:ml-0 mx-auto rounded-lg mb-8 will-change-transform transition-transform duration-500 ease-out transform wave-container ${true ? 'scale-100 playing' : 'scale-75 lg:scale-95'
                    }`}
            >
                <div className="relative w-full h-full mt-3">
                    <img
                        src={
                            'https://m.media-amazon.com/images/S/dmp-catalog-images-prod/images/674830a5-23ed-490f-b1cf-681a68570099/674830a5-23ed-490f-b1cf-681a68570099--1751145004._UX358_FMwebp_QL85_.jpg'
                        }
                        alt="Album art"
                        className="absolute inset-0 w-full h-full object-cover rounded-sm shadow-2xl"
                    />
                </div>
            </div>

            <div className="flex justify-between items-center">
                <div className="space-y-1 text-left flex-1 min-w-0">
                    <div className="relative group">
                        <h2 className="text-2xl md:text-3xl text-white font-medium transition-all duration-300 truncate overflow-hidden max-w-full">
                            {'trackDetails.title'}
                        </h2>
                    </div>

                    <div className="relative group">
                        <p className="text-zinc-400 transition-all duration-300 truncate overflow-hidden max-w-full">
                            {'trackDetails.singer'}
                        </p>
                    </div>
                </div>

                <div className="flex gap-9 items-center">
                    <button
                        className={`relative group rounded-full transition-all duration-300 group ${false ? 'text-white' : 'text-[#25d1da]'
                            } hover:text-[#93D0D5]`}
                    >
                        <PlusIcon width="24" height="24" />
                    </button>

                    <button
                        className="relative group rounded-full text-white hover:text-[#93D0D5] transition-all duration-300 group rotate-90"
                    >
                        <MoreIcon width="24" height="24" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TrackArtInfo