import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing:border-box;
        padding:0;
        margin:0;
    }
    body{
      font-family: 'Space Mono', monospace;
      height: 100%;
      overflow-x: hidden;
    }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
