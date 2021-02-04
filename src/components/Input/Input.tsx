import React, { FocusEvent, ReactNode } from 'react';
import {
  TextField, FormControl, InputLabel, Select, FormHelperText,
} from '@material-ui/core';

import { IForm } from '../../hooks/useForm/useForm';

export interface IValidator {
  (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement> | null): void,
}

export interface IInputProps {
  id: string,
  label: string,
  form: IForm,
  validators: {
    [name: string]: IValidator,
  },
  autoFocus?: boolean,
  type?: string,
  defaultValue?: string,
  children?: ReactNode,
}

const Input = ({
  label, id, form, validators, autoFocus = false, type = 'text', defaultValue, children,
}: IInputProps) => {
  if (type === 'select') {
    return (
      <FormControl variant="outlined" error={!!form.getValidationResult(id)} fullWidth>
        <InputLabel id={`select-label-${id}`}>{label}</InputLabel>
        <Select
          labelId={`select-label-${id}`}
          id={`select-${id}`}
          variant="outlined"
          value={form.getValue(id) || ''}
          onChange={form.onSelectChange}
          label={label}
          onBlur={validators[id]}
          name={id}
          autoComplete={id}
          autoFocus={autoFocus}
          error={!!form.getValidationResult(id)}
          fullWidth
        >
          {children}
        </Select>
        <FormHelperText>{form.getValidationResult(id)}</FormHelperText>
      </FormControl>
    );
  }

  return (
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
      InputLabelProps={type === 'date' ? {
        shrink: true,
      } : undefined}
      defaultValue={defaultValue}
    />
  );
};

export default Input;
