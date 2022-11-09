import { useState } from "react";
import Menu from "./Menu";
import { Wrapper, Logo, Line, MenuIcon } from "./Header.styles";
import LogoSVG from "../../images/logo.svg";
import HamburgerMenuIcon from "../../images/icon-hamburger.svg";
import CloseMenuIcon from "../../images/icon-close.svg";

export default function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <Wrapper>
      <Logo src={LogoSVG} alt="logo" />
      <Line />
      <Menu isMenuActive={isMenuActive} />
      <MenuIcon
        onClick={() => setIsMenuActive((prev) => !prev)}
        src={isMenuActive ? CloseMenuIcon : HamburgerMenuIcon}
        alt="menu icon"
      />
    </Wrapper>
  );
}
