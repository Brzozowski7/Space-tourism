import styled from "styled-components";
import { pallete } from "../../../misc/pallete";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  justify-content: space-around;
  @media only screen and (max-width: 960px) {
    gap: 16px;
    align-items: center;
  }
`;

export const PlanetHeading = styled.h2`
  color: ${pallete.White};
  font-size: 96px;
`;

export const PlanetDescription = styled.p`
  width: 100%;
  @media only screen and (max-width: 960px) {
    text-align: center;
  }
`;

export const Line = styled.hr`
  border: 0.1px solid ${pallete.TransparentLightGray};
`;

export const DistanceAndTime = styled.div`
  display: flex;
  flex-direction: row;
  gap: 64px;
  align-items: flex-start;
  @media only screen and (max-width: 960px) {
    width: 100%;
    gap: 0;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 960px) {
    width: 50%;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ItemHeading = styled.h3`
  font-size: 16px;
  font-weight: 400;
  @media only screen and (max-width: 960px) {
    text-align: center;
    font-size: 12px;
  }
`;

export const ItemValue = styled.p`
  font-size: 32px;
  color: ${pallete.White};
  @media only screen and (max-width: 960px) {
    text-align: center;
    font-size: 24px;
  }
`;
