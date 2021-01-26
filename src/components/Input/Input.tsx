import React, { FocusEvent } from 'react';
import { TextField } from '@material-ui/core';

import { IForm } from '../../hooks/useForm/useForm';

export interface IValidator {
  (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement> | null): void,
}

interface IInputProps {
  id: string,
  label: string,
  form: IForm,
  validators: {
    [name: string]: IValidator,
  },
  autoFocus?: boolean,
  type?: string,
}

const Input = ({
  label, id, form, validators, autoFocus = false, type = 'text',
}: IInputProps) => (
  <TextField
    variant="outlined"
    margin="normal"
    fullWidth
    id={id}
    label={label}
    name={id}
    autoComplete={id}
    autoFocus={autoFocus}
    value={form.getValue(id) || ''}
    onChange={form.onChange}
    onBlur={validators[id]}
    error={!!form.getValidationResult(id)}
    helperText={form.getValidationResult(id)}
    type={type}
  />
);

export default Input;
