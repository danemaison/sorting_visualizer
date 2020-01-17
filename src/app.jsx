import React from 'react';
import GlobalStyle from './style/globalstyle';
import Client from './components/client';
import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Client />
      </ThemeProvider>
    </>
  );
};

export default App;
