import useDominantColor from "~/hooks/useDominantColor";
import LeftSideTrackInfo from "./LeftSideTrackInfo";
import RightSideTrackControls from "./RightSideTrackControls";

interface MobileMiniPlayerProps {
    onScreenExpand: () => void;
}

const MobileMiniPlayer: React.FC<MobileMiniPlayerProps> = ({ onScreenExpand }) => {
    const { dominantColor } = useDominantColor("https://m.media-amazon.com/images/S/dmp-catalog-images-prod/images/674830a5-23ed-490f-b1cf-681a68570099/674830a5-23ed-490f-b1cf-681a68570099--1751145004._UX358_FMwebp_QL85_.jpg")

    return (
        <>
            <footer
                onClick={onScreenExpand}
                className="fixed bottom-16 mb-2.5 rounded-md left-0 right-0 z-20 h-[60px] w-[95%] mx-auto overflow-hidden bg-black"
            >
                {/* Background color */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundColor: `${dominantColor}`,
                    }}
                />
                <div className="absolute inset-0 bg-black opacity-10" />


                {/* Content overlay */}
                <div className="relative z-10 h-full w-full">
                    <div className="max-w-[90rem] mx-auto px-4 w-full h-full flex items-center justify-between text-white">
                        {/* Left Song Info */}
                      <LeftSideTrackInfo/>

                        {/* Controls */}
                       <RightSideTrackControls/>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default MobileMiniPlayer