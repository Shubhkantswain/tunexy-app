import { Slider } from '~/components/ui/slider'
import { VolumeIcon } from '~/Svgs'

const VolumeControl = () => {
    return (
        <div className="flex justify-center items-center w-full px-8">
            <div className="flex items-center gap-2 w-full max-w-md">
                <div className="text-white">
                    <VolumeIcon />
                </div>
                <div className="flex-1 backdrop-blur-sm rounded-full relative cursor-pointer">
                    <Slider step={1} className="w-full hover:cursor-grab active:cursor-grabbing" nowPlaying={true} />
                </div>
            </div>
        </div>
    )
}

export default VolumeControl