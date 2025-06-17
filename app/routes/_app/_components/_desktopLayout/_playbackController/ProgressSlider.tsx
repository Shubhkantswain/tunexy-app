import { Slider } from "~/components/ui/slider";

interface ProgressSliderProps {
    progress: number[];
    handleProgressChange: (value: number[]) => void;
}

const ProgressSlider: React.FC<ProgressSliderProps> = ({ progress, handleProgressChange }) => {
    return (
        <div className="w-full px-0 mb-0 group relative">
            {/* Time indicators */}
            <div className="absolute -top-5 left-0 right-0 flex justify-between text-xs text-white px-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span>{"1:55"}</span>
                <span>{"4:55"}</span>
            </div>

            {/* Slider */}
            <Slider
                value={progress}
                onValueChange={handleProgressChange}
                className="w-full cursor-grab"
            />
        </div>
    )
}

export default ProgressSlider