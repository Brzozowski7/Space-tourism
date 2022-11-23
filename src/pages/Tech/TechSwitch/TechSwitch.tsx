import { Dispatch, SetStateAction } from "react";
import { useSelector } from "react-redux";
import { Wrapper, TechNumber } from "./TechSwitch.styles";

interface TechSwitchProps {
  setActiveTechIndex: Dispatch<SetStateAction<number>>;
  activeTechIndex: number;
}

export default function TechSwitch({
  setActiveTechIndex,
  activeTechIndex,
}: TechSwitchProps) {
  const technologies = useSelector(
    ({ allData }: IStore) => allData.data.technology
  );

  return (
    <Wrapper>
      {technologies.map((item, index) => {
        return (
          <TechNumber
            key={item.name}
            onClick={() => setActiveTechIndex(index)}
            active={index === activeTechIndex}
          >
            {index + 1}
          </TechNumber>
        );
      })}
    </Wrapper>
  );
}
