import React, { FormEvent, useState } from 'react';
import {
  Typography, Button, Link, Grid, Box, Paper,
} from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';
import { useSnackbar } from 'notistack';

import { useDispatch } from 'react-redux';
import useForm from '../../hooks/useForm/useForm';
import { required } from '../../validators/Validators';
import Input, { IValidator } from '../Input/Input';
import Loader from '../Loader/Loader';
import { setUser } from '../../store/user/actions';
import { login } from '../../utils/auth/auth';

import { RegisterLinkContainer, Avatar } from './LoginForm.styles';

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const form = useForm();
  const { enqueueSnackbar } = useSnackbar();

  const dispatch = useDispatch();

  const handleSubmit = async (e: FormEvent) => {
    setLoading(true);
    const values = form.submit(e, validators);

    if (!values) return;

    try {
      const { data } = await axios.post('/auth/login', {
        login: values.login,
        password: values.password,
      });

      dispatch(setUser({
        login: data.login,
        email: data.email,
        id: data.id,
      }));
      login(data.token);
      enqueueSnackbar('Zalogowano!', {
        variant: 'success',
      });
    } catch (err) {
      enqueueSnackbar('Nieporawne dane logowania!', {
        variant: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const validators: { [name: string]: IValidator } = {
    login: form.validate([required], 'login'),
    password: form.validate([required], 'password'),
  };

  return (
    <Grid container justify="center">
      <Loader visible={loading} />
      <Grid md={12} lg={5}>
        <Paper>
          <Box p={5}>
            <Grid container justify="center">
              <Avatar>
                <PersonAddIcon />
              </Avatar>
            </Grid>
            <Typography component="h1" variant="h5">
              Logowanie
            </Typography>
            <form noValidate onSubmit={handleSubmit}>
              <Input
                id="login"
                label="Login"
                form={form}
                validators={validators}
              />
              <Input
                id="password"
                label="Hasło"
                form={form}
                validators={validators}
                type="password"
              />
              <br />
              <br />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Zaloguj
              </Button>
            </form>
            <RegisterLinkContainer>
              <Link to="/user/register" variant="body2" component={RouterLink}>
                Nie posiadasz konta? Zarejestruj się!
              </Link>
            </RegisterLinkContainer>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LoginForm;
