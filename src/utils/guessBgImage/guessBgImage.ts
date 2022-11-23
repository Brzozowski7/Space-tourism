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
import { DisplayTypes, SubPages } from "./guessBgImage.const";

function reportWindowSize() {
  if (window.innerWidth > 960) {
    return DisplayTypes.DESKTOP;
  } else if (window.innerWidth <= 960 && window.innerWidth > 640) {
    return DisplayTypes.TABLET;
  } else {
    return DisplayTypes.MOBILE;
  }
}

export const guessBgImage = (subpage: string) => {
  let displayType;
  window.addEventListener("resize", () => {
    displayType = reportWindowSize();
  });

  switch (subpage) {
    case SubPages.HOME:
      if (displayType === DisplayTypes.MOBILE) {
        return bgHomeMobile;
      } else if (displayType === DisplayTypes.TABLET) {
        return bgHomeTablet;
      } else return bgHomeDesktop;
    case SubPages.DESTINATION:
      if (displayType === DisplayTypes.MOBILE) {
        return bgDestinationMobile;
      } else if (displayType === DisplayTypes.TABLET) {
        return bgDestinationTablet;
      } else return bgDestinationDesktop;
    case SubPages.CREW:
      if (displayType === DisplayTypes.MOBILE) {
        return bgCrewMobile;
      }
      if (displayType === DisplayTypes.TABLET) {
        return bgCrewTablet;
      } else return bgCrewDesktop;
    case SubPages.TECHNOLOGY:
      if (displayType === DisplayTypes.MOBILE) {
        return bgTechMobile;
      }
      if (displayType === DisplayTypes.TABLET) {
        return bgTechTablet;
      } else return bgTechDesktop;
  }
};

export default guessBgImage;
