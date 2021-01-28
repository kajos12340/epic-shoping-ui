import React, { FormEvent, useMemo } from 'react';
import { IconButton, MenuItem } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import useForm from '../../../hooks/useForm/useForm';
import Input, { IValidator } from '../../Input/Input';
import { required } from '../../../validators/Validators';

import {
  Form, Buttons, Name, Quantity, Unit,
} from './NewItemForm.styles';

const NewItemForm = () => {
  const form = useForm();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (e: FormEvent) => {
    const values = form.submit(e, validators);

    try {
      if (!values) {
        return;
      }

      enqueueSnackbar('Zalogowano!', {
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
    quantity: form.validate([required], 'quantity'),
    unit: form.validate([required], 'unit'),
  }), [form]);

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <Name>
        <Input
          id="name"
          label="Nazwa produktu"
          form={form}
          validators={validators}
        />
      </Name>
      <Quantity>
        <Input
          id="quantity"
          label="Ilość"
          form={form}
          validators={validators}
          type="number"
        />
      </Quantity>
      <Unit>
        <Input
          id="unit"
          label="Jednostka"
          form={form}
          validators={validators}
          type="select"
        >
          <MenuItem value="szt">sztuki</MenuItem>
          <MenuItem value="kg">kg</MenuItem>
          <MenuItem value="g">g</MenuItem>
          <MenuItem value="l">l</MenuItem>
          <MenuItem value="ml">ml</MenuItem>
          <MenuItem value="packs">paczki</MenuItem>
        </Input>
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
