import CategorieSection from "./_components/CategorieSection";
import TrackSection from "./_components/TrackSection";

const HomePagePlaylists = () => {
    return (
        <>
            <CategorieSection />
            
            {Array.from({ length: 5 }).map((_, index) => (
                <TrackSection key={index} />
            ))}
        </>
    );
};

export default HomePagePlaylists;