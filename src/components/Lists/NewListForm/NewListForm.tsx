import React, { FormEvent, useState } from 'react';
import { useSnackbar } from 'notistack';
import { Button } from '@material-ui/core';

import useForm from '../../../hooks/useForm/useForm';
import Input, { IValidator } from '../../Input/Input';
import { required } from '../../../validators/Validators';
import Loader from '../../Loader/Loader';
import useSocket from '../../../hooks/useSocket/useSocket';

import { ButtonContainer } from './NewListForm.styles';

interface NewListFormProps {
  closeNewListDialog(): void,
}

const NewListForm = ({ closeNewListDialog }: NewListFormProps) => {
  const [loading, setLoading] = useState(false);
  const form = useForm();
  const { enqueueSnackbar } = useSnackbar();
  const socket = useSocket();

  const handleSubmit = async (e: FormEvent) => {
    setLoading(true);
    const values = form.submit(e, validators);

    try {
      if (!values) {
        return;
      }

      await socket.current?.emit('addList', values);

      enqueueSnackbar('Dodano listę!', {
        variant: 'success',
      });
      closeNewListDialog();
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
          formState={form}
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
