import { useState } from "react";
import { useSelector } from "react-redux";
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

export default function Destination() {
  const isMobile = useScreenWidth(640);
  const isTablet = useScreenWidth(960);
  const [activePlanetIndex, setActivePlanetIndex] = useState(0);

  const destinations = useSelector(
    ({ allData }: IStore) => allData.data.destinations
  );

  return (
    destinations && (
      <Wrapper isTablet={isTablet} isMobile={isMobile}>
        <HeadingAndPlanetImage>
          <SubPageHeading subpageNumber="01">
            PICK YOUR DESTINATION
          </SubPageHeading>
          <PlanetImage
            src={destinations[activePlanetIndex].images.png}
            alt="planet"
          />
        </HeadingAndPlanetImage>
        <PlanetSwitchAndInfo>
          <PlanetSwitch
            setActivePlanetIndex={setActivePlanetIndex}
            activePlanetIndex={activePlanetIndex}
          />
          <PlanetInfo planet={destinations[activePlanetIndex]} />
        </PlanetSwitchAndInfo>
      </Wrapper>
    )
  );
}
