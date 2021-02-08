import React, { FormEvent, useState } from 'react';
import {
  Typography, Button, Link, Grid, Paper, Box,
} from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import axios from 'axios';
import { useSnackbar } from 'notistack';

import useForm from '../../hooks/useForm/useForm';
import {
  password, required, email, sameAs,
} from '../../validators/Validators';
import Input, { IValidator } from '../Input/Input';
import Loader from '../Loader/Loader';

import { LoginLinkContainer, Avatar } from './RegisterForm.styles';

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const form = useForm();
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  const handleSubmit = async (e: FormEvent) => {
    setLoading(true);
    const values = form.submit(e, validators);

    try {
      if (!values) {
        return;
      }

      await axios.post('/auth/register', {
        login: values.login,
        password: values.password,
        repassword: values.repassword,
        email: values.email,
      });

      enqueueSnackbar('Zarejestrowano! Możesz się zalogować.', {
        variant: 'success',
      });
      history.push('/user/login');
    } catch (err) {
      let message = 'Nieporawne dane rejestracji!';
      if (err.response?.status === 409) {
        message = 'Użytkownik z podanym adresem email lub loginem już istnieje.';
      }
      enqueueSnackbar(message, {
        variant: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const validators: { [name: string]: IValidator } = {
    email: form.validate([required, email], 'email'),
    login: form.validate([required], 'login'),
    password: form.validate([password, required], 'password'),
    repassword: form.validate([required, password, sameAs('password')], 'repassword'),
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
              Rejestracja
            </Typography>
            <form noValidate onSubmit={handleSubmit}>
              <Input
                id="login"
                label="Login"
                formState={form}
                validators={validators}
              />
              <Input
                id="email"
                label="Adres email"
                formState={form}
                validators={validators}
              />
              <Input
                id="password"
                label="Hasło"
                formState={form}
                validators={validators}
                type="password"
              />
              <Input
                id="repassword"
                label="Powtórz hasło"
                formState={form}
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
                Zarejestruj
              </Button>
            </form>
            <LoginLinkContainer>
              <Link to="/user/login" variant="body2" component={RouterLink}>
                Posiadasz konto? Zaloguj się!
              </Link>
            </LoginLinkContainer>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default RegisterForm;
