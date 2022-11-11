import { useState, useEffect } from "react";
import Menu from "./Menu";
import { Wrapper, Logo, Line, MenuIcon } from "./Header.styles";
import LogoSVG from "../../images/logo.svg";
import HamburgerMenuIcon from "../../images/icon-hamburger.svg";
import CloseMenuIcon from "../../images/icon-close.svg";
import useScreenWidth from "./useScreenWidth";

export default function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const { isMatched } = useScreenWidth(640);

  useEffect(() => {
    if (isMatched) {
      setIsMenuActive(false);
    }
  }, [isMatched]);

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
