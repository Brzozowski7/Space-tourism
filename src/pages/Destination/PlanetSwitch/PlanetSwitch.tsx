import { Dispatch, SetStateAction } from "react";
import { useSelector } from "react-redux";
import { Wrapper, PlanetItem } from "./PlanetSwitch.styles";
import { IStore } from "../../../declarations";

interface PlanetSwitchProps {
  setActivePlanet: Dispatch<SetStateAction<number>>;
  activePlanet: number;
}

export default function PlanetSwitch({
  setActivePlanet,
  activePlanet,
}: PlanetSwitchProps) {
    
  const destinations = useSelector(
    (state: IStore) => state.allData.data.destinations
  );

  return (
    <Wrapper>
      {destinations.map((item, index) => {
        return (
          <PlanetItem
            onClick={() => setActivePlanet(index)}
            key={index}
            active={index === activePlanet}
          >
            {item.name}
          </PlanetItem>
        );
      })}
    </Wrapper>
  );
}
