import { useState, useEffect } from "react";

const useScreenWidth = () => {
  const [isMobile, setIsMobile] = useState(false);

  const checkScreenWidth = () => {
    if (window.innerWidth > 640) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  };

  useEffect(() => {
    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  return { isMobile };
};

export default useScreenWidth;
