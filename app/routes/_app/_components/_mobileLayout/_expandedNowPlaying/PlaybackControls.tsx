import { NextIcon, PauseIcon, PlayIcon, PrevIcon, SkipBackwardIcon, SkipForwardIcon } from '~/Svgs'

const PlaybackControls = () => {
    return (
        <div className="flex items-center justify-center space-x-3 sm:space-x-4 md:space-x-5 lg:space-x-6 xl:space-x-8 mb-6">
            <button className="relative group rounded-full p-2 text-white hover:text-[#93D0D5] transition-colors">
                <SkipBackwardIcon width="24" height="24" />
            </button>

            <button
                className={`p-2 relative group rounded-full ${true ? 'opacity-100 hover:text-[#93D0D5]' : 'opacity-50 cursor-not-allowed'
                    } transition-colors text-white hover:text-[#93D0D5]`}
            >
                <PrevIcon width="24" height="24" />
            </button>

            <div className="relative group rounded-full">
                <button className="w-16 h-16 opacity-100 hover:scale-105 bg-white rounded-full flex items-center justify-center transition-transform">
                    {true ? <PauseIcon width="30" height="30" /> : <PlayIcon width="30" height="30" />}
                </button>
            </div>

            <button
                className={`p-2 relative group rounded-full ${true ? 'opacity-100 hover:text-[#93D0D5]' : 'opacity-50 cursor-not-allowed'
                    } transition-colors text-white`}
            >
                <NextIcon width="24" height="24" />
            </button>

            <button className="p-2 relative group rounded-full text-white hover:text-[#93D0D5] transition-colors">
                <SkipForwardIcon width="24" height="24" />
            </button>
        </div>
    )
}

export default PlaybackControls