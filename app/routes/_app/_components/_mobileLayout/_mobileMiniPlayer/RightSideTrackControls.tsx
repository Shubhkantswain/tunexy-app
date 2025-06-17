import { NextIcon, PlayIcon } from '~/Svgs'

const RightSideTrackControls = () => {
    return (
        <div className="flex items-center gap-6">
            <button className="hover:opacity-80">
                <PlayIcon width="20" height="20" />
            </button>
            <button className=" text-white rounded-full flex items-center justify-center hover:scale-105 transition">
                <NextIcon width="20" height="20" />
            </button>
        </div>
    )
}

export default RightSideTrackControls