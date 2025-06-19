import { Slider } from '~/components/ui/slider'
import { VolumeIcon } from '~/Svgs'

const VolumeControl = () => {
    return (
        <div className="flex items-center space-x-3 flex-1 justify-end">
            <VolumeIcon width="20" height="20" />
            <Slider
                defaultValue={[75]}
                max={100}
                step={1}
                className="w-[120px] lg:w-[150px]  cursor-grab"
            />
        </div>
    )
}

export default VolumeControl