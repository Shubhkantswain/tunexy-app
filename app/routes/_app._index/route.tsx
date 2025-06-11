import CategorieSection from "./_components/CategorieSection";
import TrackSection from "./_components/TrackSection";

const HomePagePlaylists = () => {
    return (
        <div className="p-4 md:p-6">
            <CategorieSection />
            
            {Array.from({ length: 15 }).map((_, index) => (
                <TrackSection key={index} />
            ))}
        </div>
    );
};

export default HomePagePlaylists;