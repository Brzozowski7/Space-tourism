import styled from "styled-components";
import { Link } from "react-router-dom";
import { pallete } from "../../misc/pallete";
import { guessBgImage } from "./Home.utils";

export const Wrapper = styled.main<{ isMobile: boolean; isTablet: boolean }>`
  width: 100vw;
  height: 100vh;
  background: url(${(props) => guessBgImage(props.isMobile, props.isTablet)});
  background-size: cover;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 100px;
  color: ${pallete.TransparentWhite};
  @media only screen and (max-width: 960px) {
    flex-direction: column;
    gap: 50px;
    padding: 0 30px;
  }
`;

export const Heading = styled.h1`
  font-weight: 500;
  font-size: 20px;
  span {
    color: ${pallete.White};
    font-size: 96px;
  }
`;

export const Description = styled.p`
  width: 70%;
  @media only screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const InformationPart = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 960px) {
    width: 100%;
    align-items: center;
    text-align: center;
    margin-top: 120px;
  }
`;

export const ExploreLink = styled(Link)`
  text-decoration: none;
  background-color: ${pallete.White};
  width: 250px;
  height: 250px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: 700;
  @media only screen and (max-width: 960px) {
    width: 200px;
    height: 200px;
    font-size: 28px;
  }
  @media only screen and (max-width: 640px) {
    width: 150px;
    height: 150px;
    font-size: 24px;
  }
`;

export const ExploreLinkWrapper = styled.div`
  width: 50%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 960px) {
    width: 100%;
  }
`;
