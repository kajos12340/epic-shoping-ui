import React, { FocusEvent, ReactNode, HTMLProps } from 'react';
import {
  TextField, FormControl, InputLabel, Select, FormHelperText,
} from '@material-ui/core';

import { IForm } from '../../hooks/useForm';

export interface IValidator {
  (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement> | null): void,
}

export interface IInputProps {
  formState: IForm,
  validators: {
    [name: string]: IValidator,
  },
  autoFocus?: boolean,
  children?: ReactNode,
  id: string,
}

const Index = ({
  label, id, formState, validators, autoFocus = false, type = 'text', defaultValue, children,
}: HTMLProps<HTMLInputElement> & IInputProps) => {
  if (type === 'select') {
    return (
      <FormControl variant="outlined" error={!!formState.getValidationResult(id)} fullWidth>
        <InputLabel id={`select-label-${id}`}>{label}</InputLabel>
        <Select
          labelId={`select-label-${id}`}
          id={`select-${id}`}
          variant="outlined"
          value={formState.getValue(id) || ''}
          onChange={formState.onSelectChange}
          label={label}
          onBlur={validators[id]}
          name={id}
          autoComplete={id}
          autoFocus={autoFocus}
          error={!!formState.getValidationResult(id)}
          fullWidth
        >
          {children}
        </Select>
        <FormHelperText>{formState.getValidationResult(id)}</FormHelperText>
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
      value={formState.getValue(id) || ''}
      onChange={formState.onChange}
      onBlur={validators[id]}
      error={!!formState.getValidationResult(id)}
      helperText={formState.getValidationResult(id)}
      type={type}
      InputLabelProps={type === 'date' ? {
        shrink: true,
      } : undefined}
      defaultValue={defaultValue}
    />
  );
};

export default Index;
