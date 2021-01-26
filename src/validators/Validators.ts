import { IFormData } from '../hooks/useForm/useForm';

export interface IValidator {
  (value: string | boolean, values?: IFormData): string
}

export const required: IValidator = (value) => {
  if (!value) {
    return 'Pole jest wymagane!';
  }
  return '';
};

export const number: IValidator = (value) => {
  if (!value) {
    return 'Pole przyjmuje tylko całkowite wartości liczbowe!';
  }
  return '';
};

export const password: IValidator = (value) => {
  if (value && value.toString().length < 8) {
    return 'Hasło musi mieć minimum 8 znaków!';
  }
  return '';
};

export const email: IValidator = (value) => {
  // Just for the most obvious syntax
  if (value && !/^\w+@\w+\.\w+$/.test(value.toString())) {
    return 'Proszę podać prawiłowy adres email!';
  }
  return '';
};

export const sameAs = (fieldName: string): IValidator => (value, values) => {
  if (value && values && values[fieldName]?.value !== value) {
    return 'Podane hasła muszę być ientyczne!';
  }
  return '';
};
