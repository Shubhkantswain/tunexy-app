import TrackScroller from "./_components/TrackScroller";
import PlaylistSection from "./_components/PlaylistSection";
import { useLoadingStore } from "~/store/useLoadingStore";
import Footer from "../_app/Components/Footer";

const HomePagePlaylists = () => {
  const { isLoading, setIsLoading } = useLoadingStore()

  return (
    <>
      {!isLoading ? (
        <div className="p-4 md:p-8 max-w-[90rem] mx-auto">
          {/* Playlist Sections */}
          {Array.from({ length: 3 }).map((_, index) => (
            <PlaylistSection key={index} />
          ))}

          <TrackScroller />

          <Footer />
        </div>
      ) : (
        <div className="flex justify-center items-center overflow-hidden">
          <h1 className="text-2xl font-medium p-5">Loading</h1>
        </div>
      )}
    </>
  );
};

export default HomePagePlaylists;