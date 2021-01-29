import React, { RefObject, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, IconButton, ThemeProvider } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';

import { setupAxiosBaseUrl, setToken } from './utils/axios/axios';
import Router from './Router/Router';
import Navigation from './components/Navigation/Navigation';
import theme from './Theme/Theme';
import { setUser } from './store/user/actions';
import useMessageCounter from './hooks/useMessageCounter/useMessageCounter';

import { Main } from './App.styles';

setupAxiosBaseUrl(process.env.REACT_APP_BE_ADDRESS);

const App = () => {
  const snackbarsRef = useRef<SnackbarProvider>() as RefObject<SnackbarProvider>;
  const dispatch = useDispatch();
  const history = useHistory();
  useMessageCounter();

  const onDismissClick = (key: any) => () => {
    // @ts-ignore
    snackbarsRef.current?.closeSnackbar(key);
  };

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem('token');
      if (token) {
        setToken(token);
        try {
          const { data } = await axios.get('/auth/get-user-data');
          dispatch(setUser({
            login: data.login,
            email: data.email,
            id: data.id,
          }));
        } catch (e) {
          history?.push('/user/login');
          setToken(null);
        }
      }
    })();
  }, [dispatch, history]);

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        maxSnack={3}
        ref={snackbarsRef}
        action={(key) => (
          <IconButton onClick={onDismissClick(key)} color="inherit">
            <CloseIcon />
          </IconButton>
        )}
      >
        <Navigation />
        <Main>
          <Container fixed>
            <Router />
          </Container>
        </Main>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
