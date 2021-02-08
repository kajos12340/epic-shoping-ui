import React, {
  ReactText, RefObject, useEffect, useRef,
} from 'react';
import { useHistory } from 'react-router-dom';
import { Container, IconButton, ThemeProvider } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { SnackbarProvider, ProviderContext, useSnackbar } from 'notistack';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';
import moment from 'moment';

import { setupAxiosBaseUrl, setToken } from './utils/axios';
import Router from './Router/Router';
import Navigation from './components/Navigation';
import theme from './Theme/Theme';
import { setUser } from './store/user/actions';
import useMessageCounter from './hooks/useMessageCounter';

import { Main } from './App.styles';

setupAxiosBaseUrl(process.env.REACT_APP_BE_ADDRESS);

const App = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  useMessageCounter();

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
            lastLoginDate: moment(data.lastLoginDate).format('DD.MM.YYYY HH:mm'),
            registrationDate: moment(data.registrationDate).format('DD.MM.YYYY HH:mm'),
            isConfirmed: data.isConfirmed,
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
        autoHideDuration={3000}
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
