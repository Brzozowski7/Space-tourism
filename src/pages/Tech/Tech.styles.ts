import styled from "styled-components";
import { pallete } from "../../misc/pallete";
import guessBgImage from "../../utils/guessBgImage";
import { SubPages } from "../../utils/guessBgImage/guessBgImage.const";

export const Wrapper = styled.main<{ isMobile: boolean; isTablet: boolean }>`
  min-height: 100vh;
  height: 100%;
  background: url(${(props) => guessBgImage(SubPages.TECHNOLOGY, props.isMobile, props.isTablet)});
  background-size: cover;
  display: flex;
  flex-direction: column;
  color: ${pallete.TransparentWhite};
  padding: 0 100px;
  gap: 30px;
  h1 {
    margin-top: 150px;
  }
  @media only screen and (max-width: 960px) {
    flex-direction: column;
    padding: 0 30px;
  }
`;

export const Technologies = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 960px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const TechInformation = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media only screen and (max-width: 960px) {
    width: 100%;
    text-align: center;
  }
`;

export const Heading = styled.h2`
  font-size: 56px;
  font-weight: 400;
  color: ${pallete.White};
  @media only screen and (max-width: 960px) {
    font-size: 36px;
  }
`;

export const Description = styled.p`
  @media only screen and (max-width: 960px) {
    font-size: 12px;
  }
`;

export const TechImageWrapper = styled.div`
  width: 40%;
  @media only screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const TechImage = styled.img`
  width: 100%;
  height: 100%;
`;
