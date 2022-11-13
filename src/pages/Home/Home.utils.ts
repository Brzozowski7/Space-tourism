import bgMobile from "../../images/background-home-mobile.jpg";
import bgTablet from "../../images/background-home-tablet.jpg";
import bgDesktop from "../../images/background-home-desktop.jpg";

export const guessBgImage = (isMobile: boolean, isTablet: boolean) => {
  if (isMobile) {
    return bgMobile;
  } else if (isTablet) {
    return bgTablet;
  } else return bgDesktop;
};
