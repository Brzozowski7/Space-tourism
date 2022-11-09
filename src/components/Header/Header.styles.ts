import styled from "styled-components";
import { pallete } from "../../misc/pallete";

export const Wrapper = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 0 30px;
  margin-top: 30px;
  @media only screen and (max-width: 700px) {
    margin-top: 0px;
  }
`;

export const Logo = styled.img`
  height: 40px;
`;

export const Line = styled.hr`
  width: 30%;
  border: 0.1px solid ${pallete.TransparentLightGray};
  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;

export const MenuIcon = styled.img`
  cursor: pointer;
  display: none;
  @media only screen and (max-width: 700px) {
    color: ${pallete.TransparentWhite};
    display: inline-block;
    color: ${pallete.TransparentWhite};
    margin-right: 30px;
  }
`;
