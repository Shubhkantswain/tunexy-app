import { Slider } from '~/components/ui/slider'

const ProgressBar = () => {
    return (
        <div className="px-8 mt-8 w-full max-w-3xl mx-auto">
            <Slider step={1} className="w-full hover:cursor-grab active:cursor-grabbing" nowPlaying={true} />
            <div className="flex justify-between mt-2 text-xs text-zinc-400">
                <span>1:45</span>
                <span>4:55</span>
            </div>
        </div>
    )
}

export default ProgressBar