const CenteredImage = () => {
    return (
        <div className="flex flex-1 justify-center items-center z-10">
            <div className="relative shadow-2xl rounded-xl overflow-hidden">
                <img
                    src="https://m.media-amazon.com/images/I/410ywXj9+AL._SX354_SY354_BL0_QL100__UX358_FMwebp_QL85_.jpg"
                    alt="Music Artist"
                    className="w-64 h-64 object-cover rounded-xl custom-img"
                />
            </div>
        </div>
    )
}

export default CenteredImage