import { useEffect, useState } from "react";

// Returns true if screen is at least lg (1024px)
const useIsLargeScreen = () => {
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const query = "(min-width: 1024px)";
    const media = window.matchMedia(query);

    const handleChange = () => setIsLarge(media.matches);
    handleChange(); // set initial value

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  return isLarge;
};

export default useIsLargeScreen;
