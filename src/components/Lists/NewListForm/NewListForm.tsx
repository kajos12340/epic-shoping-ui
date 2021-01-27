import React, { FormEvent, useState } from 'react';
import { useSnackbar } from 'notistack';
import axios from 'axios';
import { Button } from '@material-ui/core';

import useForm from '../../../hooks/useForm/useForm';
import Input, { IValidator } from '../../Input/Input';
import { required } from '../../../validators/Validators';
import Loader from '../../Loader/Loader';

import { ButtonContainer } from './NewListForm.styles';

const NewListForm = () => {
  const [loading, setLoading] = useState(false);
  const form = useForm();
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
