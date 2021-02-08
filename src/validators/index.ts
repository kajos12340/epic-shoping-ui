import { IFormData } from '../hooks/useForm';

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
  if (value && Number.isNaN(+value)) {
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
  // Significantly simplified
  if (value && !/^\S+@\S+/.test(value.toString())) {
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

export const positive: IValidator = (value) => {
  if (!Number.isNaN(+value) && +value <= 0) {
    return 'Podana wartość musi być > 0!';
  }

  return '';
};
