import styled from "styled-components";
import { pallete } from "../../../misc/pallete";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

export const PlanetItem = styled.div<{ active: boolean }>`
  font-size: 18px;
  padding: 4px 2px;
  border-bottom: ${(props) =>
    props.active ? `2px solid ${pallete.White}` : "none"};
  cursor: pointer;
`;
