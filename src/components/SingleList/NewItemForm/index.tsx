import React, { FormEvent, useMemo } from 'react';
import { IconButton, MenuItem } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useParams } from 'react-router-dom';

import useForm from '../../../hooks/useForm';
import Index, { IValidator } from '../../Input';
import { required, positive } from '../../../validators';
import useSocket from '../../../hooks/useSocket';

import {
  Form, Buttons, Name, Quantity, Unit,
} from './styles';

const NewItemForm = () => {
  const form = useForm();
  const { enqueueSnackbar } = useSnackbar();
  const { id } = useParams<{ id: string }>();
  const socket = useSocket();

  const handleSubmit = async (e: FormEvent) => {
    const values = form.submit(e, validators);

    try {
      if (!values) {
        return;
      }

      socket.current?.emit('addProduct', {
        ...values,
        shoppingListId: id,
      });

      form.resetForm();
      enqueueSnackbar('Dodano produkt do listy!', {
        variant: 'success',
      });
    } catch (err) {
      enqueueSnackbar('Nie udało się dodać produktu!', {
        variant: 'error',
      });
    }
  };

  const validators: { [name: string]: IValidator } = useMemo(() => ({
    name: form.validate([required], 'name'),
    quantity: form.validate([required, positive], 'quantity'),
    unit: form.validate([required], 'unit'),
  }), [form]);

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <Name>
        <Index
          id="name"
          label="Nazwa produktu"
          formState={form}
          validators={validators}
        />
      </Name>
      <Quantity>
        <Index
          id="quantity"
          label="Ilość"
          formState={form}
          validators={validators}
          type="number"
        />
      </Quantity>
      <Unit>
        <Index
          id="unit"
          label="Jednostka"
          formState={form}
          validators={validators}
          type="select"
        >
          <MenuItem value="szt">sztuki</MenuItem>
          <MenuItem value="kg">kg</MenuItem>
          <MenuItem value="g">g</MenuItem>
          <MenuItem value="l">l</MenuItem>
          <MenuItem value="ml">ml</MenuItem>
          <MenuItem value="packs">paczki</MenuItem>
        </Index>
      </Unit>
      <Buttons>
        <IconButton type="submit">
          <AddCircleIcon color="primary" />
        </IconButton>
      </Buttons>
    </Form>
  );
};

export default NewItemForm;
