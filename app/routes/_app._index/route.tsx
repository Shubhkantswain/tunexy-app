import { useEffect } from "react";
import PlaylistSection from "./_components/PlaylistSection";
import Footer from "../_app/Components/Footer";
import { LogoIcon } from "~/Svgs";
import { json, LoaderFunction } from "@remix-run/cloudflare";
import { useLoadingStore } from "~/store/useLoadingStore";
import TrackSection from "./_components/TrackSection";

// SSR loader function
export const loader: LoaderFunction = async () => {
  return json({ data: false });
};

const HomePagePlaylists = () => {
  const { isLoading, setIsLoading } = useLoadingStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  console.log("isLoading", isLoading);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white gap-4">
        <LogoIcon width="80" height="80" />
        <p className="text-2xl font-semibold tracking-wide">Tunexy-app</p>
      </div>
    )
  }

  return (
    <>
      <div className="p-4 md:p-8 max-w-[90rem] mx-auto">
        {/* Playlist Sections */}
        {Array.from({ length: 3 }).map((_, index) => (
          <PlaylistSection key={index} />
        ))}

        <TrackSection />
        <Footer />
      </div>
    </>
  );
};

export default HomePagePlaylists;
