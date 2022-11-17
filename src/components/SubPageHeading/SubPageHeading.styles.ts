import styled from "styled-components";
import { pallete } from "../../misc/pallete";

export const Heading = styled.h1`
  display: flex;
  flex-direction: row;
  gap: 12px;
  font-size: 24px;
  font-weight: 400;
  @media only screen and (max-width: 960px) {
    text-align: center;
    flex-direction: column;
  }
`;


export const HeadingNumber = styled.span`
  color: ${pallete.TransparentLightGray};
`;
