import { useState, useEffect } from "react";

const useScreenWidth = (width: number) => {
  const [isMatched, setIsMatched] = useState(false);

  const checkScreenWidth = () => {
    if (window.innerWidth > width) {
      setIsMatched(false);
    } else {
      setIsMatched(true);
    }
  };

  useEffect(() => {
    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  return isMatched;
};

export default useScreenWidth;
