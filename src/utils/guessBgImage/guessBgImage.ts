import bgHomeMobile from "../../images/background-home-mobile.jpg";
import bgHomeTablet from "../../images/background-home-tablet.jpg";
import bgHomeDesktop from "../../images/background-home-desktop.jpg";
import bgDestinationMobile from "../../images/background-destination-mobile.jpg";
import bgDestinationTablet from "../../images/background-destination-tablet.jpg";
import bgDestinationDesktop from "../../images/background-destination-desktop.jpg";
import bgCrewMobile from "../../images/background-crew-mobile.jpg";
import bgCrewTablet from "../../images/background-crew-tablet.jpg";
import bgCrewDesktop from "../../images/background-crew-desktop.jpg";
import bgTechMobile from "../../images/background-technology-mobile.jpg";
import bgTechTablet from "../../images/background-technology-tablet.jpg";
import bgTechDesktop from "../../images/background-technology-desktop.jpg";
import { SubPages } from "./guessBgImage.const";

export const guessBgImage = (
  subpage: string,
  isMobile: boolean,
  isTablet: boolean
) => {
  switch (subpage) {
    case SubPages.HOME:
      if (isMobile) {
        return bgHomeMobile;
      } else if (isTablet) {
        return bgHomeTablet;
      } else return bgHomeDesktop;
    case SubPages.DESTINATION:
      if (isMobile) {
        return bgDestinationMobile;
      } else if (isTablet) {
        return bgDestinationTablet;
      } else return bgDestinationDesktop;
    case SubPages.CREW:
      if (isMobile) {
        return bgCrewMobile;
      }
      if (isTablet) {
        return bgCrewTablet;
      } else return bgCrewDesktop;
    case SubPages.TECHNOLOGY:
      if (isMobile) {
        return bgTechMobile;
      }
      if (isTablet) {
        return bgTechTablet;
      } else return bgTechDesktop;
  }
};

export default guessBgImage;
