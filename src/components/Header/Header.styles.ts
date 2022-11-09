import styled from "styled-components";
import { pallete } from "../../misc/pallete";

export const Wrapper = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  padding: 0 0 0 30px;
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
  display: none;
  @media only screen and (max-width: 1200px) {
    display: inline-block;
    color: ${pallete.TransparentWhite};
    margin-right: 30px;
  }
`;
