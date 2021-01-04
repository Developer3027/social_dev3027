import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  li {
    margin-left: 1em;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a {
    color: white;
    font-family: "Inter", sans-serif;
  }
`;
