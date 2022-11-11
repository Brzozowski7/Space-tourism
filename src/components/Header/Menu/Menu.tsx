import { menuItems } from "./Menu.const";
import {
  Wrapper,
  StyledLink,
  MenuItemName,
  MenuItemNumber,
} from "./Menu.styles";

interface MenuProps {
  isMenuActive: boolean;
}

export default function Menu({ isMenuActive }: MenuProps) {
  return (
    <Wrapper isMenuActive={isMenuActive}>
      {menuItems.map((item) => (
        <StyledLink to={item.href} key={item.id}>
          <MenuItemNumber>{item.id}</MenuItemNumber>
          <MenuItemName>{item.title}</MenuItemName>
        </StyledLink>
      ))}
    </Wrapper>
  );
}
