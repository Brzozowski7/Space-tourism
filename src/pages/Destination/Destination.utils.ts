import bgMobile from "../../images/background-destination-mobile.jpg";
import bgTablet from "../../images/background-destination-tablet.jpg";
import bgDesktop from "../../images/background-destination-desktop.jpg";

export const guessBgImage = (isMobile: boolean, isTablet: boolean) => {
  if (isMobile) {
    return bgMobile;
  } else if (isTablet) {
    return bgTablet;
  } else return bgDesktop;
};
