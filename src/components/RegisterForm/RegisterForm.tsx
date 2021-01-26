import React, { FormEvent } from 'react';
import {
  Typography, Button, Link, Grid, Paper, Box,
} from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { Link as RouterLink } from 'react-router-dom';

import useForm from '../../hooks/useForm/useForm';
import {
  password, required, email, sameAs,
} from '../../validators/Validators';
import Input, { IValidator } from '../Input/Input';

import { LoginLinkContainer, Avatar } from './RegisterForm.styles';

const RegisterForm = () => {
  const form = useForm();

  const handleSubmit = (e: FormEvent) => {
    const formValues = form.submit(e, validators);

    if (!formValues) return;

    const values = form.getFormValues();

    // TODO: request to BE and redirect to Login And message!
    console.log(values);
  };

  const validators: { [name: string]: IValidator } = {
    email: form.validate([required, email], 'email'),
    login: form.validate([required], 'login'),
    password: form.validate([password, required], 'password'),
    rePassword: form.validate([required, password, sameAs('password')], 'rePassword'),
  };

  return (
    <Grid container justify="center">
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
                form={form}
                validators={validators}
              />
              <Input
                id="email"
                label="Adres email"
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
              <Input
                id="rePassword"
                label="Powtórz hasło"
                form={form}
                validators={validators}
                type="password"
              />
              <Input
                id="rePassword"
                label="Powtórz hasło"
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
                Zarejestruj
              </Button>
            </form>
            <LoginLinkContainer>
              <Link to="/user/login" variant="body2" component={RouterLink} onClick={() => console.log('click')}>
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
