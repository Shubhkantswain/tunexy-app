import { PlayIcon } from "~/Svgs";
import TrackSection from "./_components/TrackSection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import SongScroller from "./_components/SongScroller";

const HomePagePlaylists = () => {


  return (
    <div className="p-4 md:p-8 max-w-[90rem] mx-auto">
      {/* Playlist Sections */}
      {Array.from({ length: 3 }).map((_, index) => (
        <TrackSection key={index} />
      ))}

      <SongScroller />
    </div>
  );
};

export default HomePagePlaylists;
