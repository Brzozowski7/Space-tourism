import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { pallete } from "../../../misc/pallete";

export const Wrapper = styled.nav<{ isMenuActive: boolean }>`
  width: 60%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background: rgb(4, 11, 54);
  background: linear-gradient(
    90deg,
    rgba(4, 11, 54, 0.6449930313922444) 0%,
    rgba(4, 11, 18, 1) 100%
  );
  @media only screen and (max-width: 640px) {
    position: absolute;
    display: ${(props) => (props.isMenuActive ? "flex" : "none")};
    flex-direction: column;
    left: 0;
    top: 70px;
    height: 90vh;
    width: 100%;
    z-index: 99;
  }
`;

export const StyledLink = styled(NavLink)`
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 4px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${pallete.TransparentWhite};
  &.active {
    border-bottom: 2px ${pallete.White} solid;
  }
  @media only screen and (max-width: 640px) {
    width: 50%;
  }
`;

export const MenuItemNumber = styled.span`
  font-weight: 700;
  color: ${pallete.White};
  @media only screen and (max-width: 960px) {
    display: none;
  }
`;

export const MenuItemName = styled.span`
  color: ${pallete.TransparentWhite};
`;
