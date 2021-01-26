import React, { FormEvent } from 'react';
import {
  Typography, Button, Link, Grid,
} from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { Link as RouterLink } from 'react-router-dom';

import useForm from '../../hooks/useForm/useForm';
import { password, required } from '../../validators/Validators';
import Input, { IValidator } from '../Input/Input';

import { RegisterLinkContainer, FormContainer, Avatar } from './LoginForm.styles';

const formInitialValues = {
  login: 'pkajka',
  password: 'test1234',
};

const LoginForm = () => {
  const form = useForm(formInitialValues);

  const handleSubmit = (e: FormEvent) => {
    const formValues = form.submit(e, validators);

    if (!formValues) return;

    const values = form.getFormValues();

    // TODO: request to BE and set Token
    console.log(values);
  };

  const validators: { [name: string]: IValidator } = {
    login: form.validate([required], 'login'),
    password: form.validate([password, required], 'password'),
  };

  return (
    <FormContainer container justify="center">
      <Grid md={12} lg={5}>
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
            autoFocus
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
          <RegisterLinkContainer>
            <Link to="/user/register" variant="body2" component={RouterLink}>
              Nie posiadasz konta? Zarejestruj się!
            </Link>
          </RegisterLinkContainer>
        </form>
      </Grid>
    </FormContainer>
  );
};

export default LoginForm;
