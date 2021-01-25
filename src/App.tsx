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
      <main>
        <Container fixed>
          <Box my={2}>
            <Router />
          </Box>
        </Container>
      </main>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
