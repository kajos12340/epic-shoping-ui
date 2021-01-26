import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { ThemeProvider } from '@material-ui/core';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';

import { setupAxiosBaseUrl } from './helpers/axios';
import Router from './Router/Router';
import Navigation from './components/Navigation/Navigation';
import theme from './Theme/Theme';
import store from './store/store';

import { MobileSpacer } from './components/Navigation/Menu/Menu.styles';

setupAxiosBaseUrl(process.env.REACT_APP_BE_ADDRESS);

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
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
        <MobileSpacer />
      </SnackbarProvider>
    </ThemeProvider>
  </Provider>
);

export default App;
