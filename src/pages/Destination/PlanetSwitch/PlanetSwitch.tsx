import { Dispatch, SetStateAction } from "react";
import { useSelector } from "react-redux";
import { Wrapper, PlanetItem } from "./PlanetSwitch.styles";

interface PlanetSwitchProps {
  setActivePlanetIndex: Dispatch<SetStateAction<number>>;
  activePlanetIndex: number;
}

export default function PlanetSwitch({
  setActivePlanetIndex,
  activePlanetIndex,
}: PlanetSwitchProps) {
  const destinations = useSelector(
    (state: IStore) => state.allData.data.destinations
  );

  return (
    <Wrapper>
      {destinations.map((item, index) => {
        return (
          <PlanetItem
            onClick={() => setActivePlanetIndex(index)}
            key={index}
            active={index === activePlanetIndex}
          >
            {item.name}
          </PlanetItem>
        );
      })}
    </Wrapper>
  );
}
