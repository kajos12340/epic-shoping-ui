import React, { FormEvent, useState } from 'react';
import {
  Typography, Button, Link, Grid, CircularProgress, Box, Paper,
} from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { Link as RouterLink } from 'react-router-dom';

import useForm from '../../hooks/useForm/useForm';
import { required } from '../../validators/Validators';
import Input, { IValidator } from '../Input/Input';
import Loader from '../Loader/Loader';

import { RegisterLinkContainer, Avatar } from './LoginForm.styles';

const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm();

  const handleSubmit = (e: FormEvent) => {
    setLoading(true);
    const formValues = form.submit(e, validators);

    if (!formValues) return;

    const values = form.getFormValues();

    // TODO: request to BE and set Token and message!
    setLoading(false);
    console.log(values);
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
