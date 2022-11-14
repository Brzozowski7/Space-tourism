import { useState } from "react";
import { useSelector } from "react-redux";
import { IStore } from "../../declarations";
import {
  Wrapper,
  HeadingAndPlanetImage,
  PlanetImage,
  PlanetSwitchAndInfo,
} from "./Destination.styles";
import useScreenWidth from "../../hooks/useScreenWidth";
import PlanetSwitch from "./PlanetSwitch";
import SubPageHeading from "../../components/SubPageHeading";
import PlanetInfo from "./PlanetInfo";

export default function Destinations() {
  const isMobile = useScreenWidth(640);
  const isTablet = useScreenWidth(960);
  const [activePlanet, setActivePlanet] = useState(0);

  const destinations = useSelector(
    ({allData}:IStore) => allData.data.destinations
  );

  return (
    destinations && (
      <Wrapper isTablet={isTablet} isMobile={isMobile}>
        <HeadingAndPlanetImage>
          <SubPageHeading subpageNumber="01">
            PICK YOUR DESTINATION
          </SubPageHeading>
          <PlanetImage
            src={destinations[activePlanet].images.png}
            alt="planet"
          />
        </HeadingAndPlanetImage>
        <PlanetSwitchAndInfo>
          <PlanetSwitch
            setActivePlanet={setActivePlanet}
            activePlanet={activePlanet}
          />
          <PlanetInfo planet={destinations[activePlanet]} />
        </PlanetSwitchAndInfo>
      </Wrapper>
    )
  );
}
