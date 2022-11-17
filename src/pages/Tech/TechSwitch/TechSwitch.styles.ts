import styled from "styled-components";
import { pallete } from "../../../misc/pallete";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media only screen and (max-width: 960px) {
    flex-direction: row;
  }
`;

export const TechNumber = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) =>
    props.active ? pallete.Black : pallete.TransparentWhite};
  background-color: ${(props) => (props.active ? pallete.White : "none")};
  border: 0.1px ${pallete.TransparentLightGray} solid;
  border-radius: 50%;
  height: 100px;
  width: 100px;
  cursor: pointer;
  font-size: 36px;
  font-weight: 700;
  @media only screen and (max-width: 960px) {
    height: 50px;
    width: 50px;
    font-size: 18px;
  }
`;
