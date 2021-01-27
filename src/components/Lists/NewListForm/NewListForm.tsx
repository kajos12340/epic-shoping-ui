import React, { FormEvent, useState } from 'react';
import { useSnackbar } from 'notistack';
import axios from 'axios';
import { Button } from '@material-ui/core';
import moment from 'moment';

import useForm from '../../../hooks/useForm/useForm';
import Input, { IValidator } from '../../Input/Input';
import { required } from '../../../validators/Validators';
import Loader from '../../Loader/Loader';

import { ButtonContainer } from './NewListForm.styles';

const defaultValues = {
  date: moment().format('YYYY-MM-DD'),
};

const NewListForm = () => {
  const [loading, setLoading] = useState(false);
  const form = useForm(defaultValues);
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (e: FormEvent) => {
    setLoading(true);
    const values = form.submit(e, validators);

    try {
      if (!values) {
        return;
      }

      const { data } = await axios.post('/auth/login', {
        login: values.login,
        password: values.password,
      });

      console.log(data);
      enqueueSnackbar('Dodano listę!', {
        variant: 'success',
      });
    } catch (err) {
      enqueueSnackbar('Nie udało się dodać listy!', {
        variant: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const validators: { [name: string]: IValidator } = {
    name: form.validate([required], 'name'),
    date: form.validate([required], 'password'),
  };

  return (
    <>
      <Loader visible={loading} />
      <form onSubmit={handleSubmit}>
        <Input
          id="name"
          label="Nazwa"
          form={form}
          validators={validators}
        />
        <Input
          id="date"
          label="Data"
          type="date"
          form={form}
          validators={validators}
        />
        <ButtonContainer>
          <Button
            type="submit"
            variant="contained"
            color="primary"
          >
            Dodaj nową listę
          </Button>
        </ButtonContainer>
      </form>
    </>
  );
};

export default NewListForm;
