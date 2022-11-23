import styled from "styled-components";
import guessBgImage from "../../utils/guessBgImage";
import { pallete } from "../../misc/pallete";
import { SubPages } from "../../utils/guessBgImage/guessBgImage.const";

export const Wrapper = styled.main`
  height: 100vh;
  background: url(${guessBgImage(SubPages.DESTINATION)});
  background-size: cover;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 100px;
  color: ${pallete.TransparentWhite};
  @media only screen and (max-width: 960px) {
    height: auto;
    flex-direction: column;
    padding: 0 30px;
  }
`;

export const HeadingAndPlanetImage = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 32px;
  @media only screen and (max-width: 960px) {
    margin-top: 120px;
    align-items: center;
    width: 80%;
  }
`;

export const PlanetImage = styled.img`
  width: 60%;
  align-self: center;
`;

export const PlanetSwitchAndInfo = styled.div`
  width: 50%;
  height: 600px;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media only screen and (max-width: 960px) {
    align-items: center;
    width: 100%;
    height: auto;
  }
`;
