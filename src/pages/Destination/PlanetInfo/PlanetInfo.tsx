import { IDestinations } from "../../../declarations";
import {
  Wrapper,
  PlanetHeading,
  PlanetDescription,
  Line,
  DistanceAndTime,
  Item,
  ItemHeading,
  ItemValue,
} from "./PlanetInfo.styles";

interface PlanetInfoProps {
  planet: IDestinations;
}

export default function PlanetInfo({ planet }: PlanetInfoProps) {
  return (
    <Wrapper>
      <PlanetHeading>{planet.name}</PlanetHeading>
      <PlanetDescription>{planet.description}</PlanetDescription>
      <Line />
      <DistanceAndTime>
        <Item>
          <ItemHeading>AVG. DISTANCE</ItemHeading>
          <ItemValue>{planet.distance}</ItemValue>
        </Item>
        <Item>
          <ItemHeading>EST. TRAVEL TIME</ItemHeading>
          <ItemValue>{planet.travel}</ItemValue>
        </Item>
      </DistanceAndTime>
    </Wrapper>
  );
}
