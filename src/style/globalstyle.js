import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
    color:white;
  }
  html {
    overflow-x: hidden;
  }
  body {
    position: relative;
    overflow-x: hidden;
    background-color:rgb(52, 55, 61);
    padding: 0;
    margin: 0;
    height: 100vh;
    width: 100%;
  }

`;

export default GlobalStyle;
