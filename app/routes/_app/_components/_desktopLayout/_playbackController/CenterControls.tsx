import { NextIcon, PlayIcon, PrevIcon, SkipBackwardIcon, SkipForwardIcon, VolumeIcon } from '~/Svgs'


const CenterControls = () => {
    return (
        <div className="flex items-center gap-6 mx-8">
            <button className="hidden lg:block hover:text-gray-300 transition-colors">
                <SkipBackwardIcon width="21" height="21" />
            </button>
            <button className="hover:text-gray-300 transition-colors">
                <PrevIcon width="21" height="21" />
            </button>
            <button className="bg-white text-black p-3 rounded-full hover:bg-gray-200 transition-colors">
                <PlayIcon width="21" height="21" />
            </button>
            <button className="hover:text-gray-300 transition-colors">
                <NextIcon width="21" height="21" />
            </button>
            <button className="hidden lg:block hover:text-gray-300 transition-colors">
                <SkipForwardIcon width="21" height="21" />
            </button>
        </div>
    )
}

export default CenterControls