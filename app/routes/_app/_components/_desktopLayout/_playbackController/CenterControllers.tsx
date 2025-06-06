import { NextIcon, PlayIcon, PrevIcon, SkipBackwardIcon, SkipForwardIcon } from '~/Svgs'

const CenterControllers = () => {
    return (
        <div className="flex items-center gap-6 mx-8">
            <button className="hover:text-gray-300 transition-colors">
                <SkipBackwardIcon width="20" height="20" />
            </button>
            <button className="hover:text-gray-300 transition-colors">
                <PrevIcon width="20" height="20" />
            </button>
            <button className="bg-white text-black p-3 rounded-full hover:bg-gray-200 transition-colors">
                <PlayIcon width="20" height="20" />
            </button>
            <button className="hover:text-gray-300 transition-colors">
                <NextIcon width="20" height="20" />
            </button>
            <button className="hover:text-gray-300 transition-colors">
                <SkipForwardIcon width="20" height="20" />
            </button>
        </div>
    )
}

export default CenterControllers