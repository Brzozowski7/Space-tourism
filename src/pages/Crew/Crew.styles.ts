import styled from "styled-components";
import guessBgImage from "../../utils/guessBgImage";
import { pallete } from "../../misc/pallete";
import { SubPages } from "../../utils/guessBgImage/guessBgImage.const";

export const Wrapper = styled.main<{ isMobile: boolean; isTablet: boolean }>`
  min-height: 100vh;
  height: 100%;
  background: url(${(props) => guessBgImage(SubPages.CREW, props.isMobile, props.isTablet)});
  background-size: cover;
  display: flex;
  flex-direction: column;
  color: ${pallete.TransparentWhite};
  h1 {
    margin-top: 150px;
    padding: 0 100px;
    @media only screen and (max-width: 960px) {
      padding: 0 30px;
    }
  }
  @media only screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

export const CrewMemberWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0 100px;
  user-select: none;
  padding-top: 40px;
  @media only screen and (max-width: 960px) {
    flex-direction: column;
    padding: 0 30px;
    gap: 16px;
  }
`;

export const CrewMemberDescription = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  white-space: normal;
  @media only screen and (max-width: 960px) {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`;

export const Title = styled.h2`
  color: ${pallete.TransparentWhite};
  font-size: 36px;
  @media only screen and (max-width: 960px) {
    font-size: 24px;
  }
`;

export const Name = styled.p`
  font-size: 72px;
  color: ${pallete.White};
  word-break: break-word;
  @media only screen and (max-width: 960px) {
    font-size: 32px;
  }
`;

export const Bio = styled.p`
  color: ${pallete.TransparentWhite};
`;

export const CrewMemberImageWrapper = styled.div`
  width: 50%;
  height: 500px;
  display: flex;
  pointer-events: none;
  @media only screen and (max-width: 960px) {
    width: 100%;
    height: 500px;
  }
  @media only screen and (max-width: 640px) {
    height: 250px;
  }
`;

export const CrewMemberImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
