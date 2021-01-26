import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import { ThemeProvider } from '@material-ui/core';
import { setupAxiosBaseUrl } from './helpers/axios';
import Router from './Router/Router';
import Navigation from './components/Navigation/Navigation';
import theme from './Theme/Theme';

setupAxiosBaseUrl(process.env.REACT_APP_BE_ADDRESS);

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <header>
        <Navigation />
      </header>
      <Box py={2} height="100%" component="main">
        <Container fixed>
          <Router />
        </Container>
      </Box>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
