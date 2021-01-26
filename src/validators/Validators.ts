export interface IValidator {
  (value: string | boolean): string
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
  if (!value) {
    return 'Podane hasło nie spełnia wymagań!';
  }
  return '';
};
