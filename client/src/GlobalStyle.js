import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

export default GlobalStyle;
