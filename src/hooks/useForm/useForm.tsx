import {
  useState, ChangeEvent, FormEvent, useEffect,
} from 'react';

import { IValidator } from '../../components/Input/Input';

interface IFormDataItem {
  value: string,
  error: string,
  checked: boolean,
}

export type IFormData = {
  [name: string]: IFormDataItem
}

export interface IForm {
  onChange(e: ChangeEvent<HTMLInputElement>): void,
  validate(validators: Function[], name: string): IValidator,
  getValue(name: string): string | boolean,
  hasAnyError(): boolean,
  getFormValues(): IFormData,
  getFlatFormValues(): { [name: string]: string | boolean } | null,
  getValidationResult(name: string): string,
  submit: (e: FormEvent, validators: { [name: string]: IValidator }) =>
    null | { [name: string]: string | boolean },
}

interface IInitialValues {
  [name: string]: string | boolean | number,
}

const UseForm = (initialValues?: IInitialValues): IForm => {
  const [formData, setFormData] = useState<IFormData>({});

  useEffect(() => {
    if (initialValues) {
      const parsedInitialValues: IFormData = Object.entries(initialValues)
        .reduce((acc, [key, value]) => {
          let newValue;
          let checked;
          if (typeof value === 'boolean') {
            checked = value;
          } else {
            newValue = `${value}`;
          }
          return {
            ...acc,
            [key]: {
              value: newValue || '',
              error: '',
              checked: checked || false,
            },
          };
        }, {});
      setFormData(parsedInitialValues);
    }
  }, [initialValues]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target) return;

    const fieldName = e.target.name;
    const { value } = e.target;
    const { checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [fieldName]: {
        value,
        checked,
        error: '',
      },
    }));
  };

  const validate = (validators: Function[], name: string): IValidator => (e) => {
    const validationResult = validators
      .map((validator) => validator(formData[name]?.value, formData))
      .find((i) => i);
    setFormData((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        error: validationResult,
      },
    }));
    return validationResult;
  };

  const getValidationResult = (name: string): string => (
    formData[name]?.error
  );

  const getValue = (name: string): string | boolean => (
    formData[name]?.value || formData[name]?.checked
  );

  const hasAnyError = (): boolean => Object.values(formData).some((item) => item.error);

  const getFormValues = () => formData;

  const getFlatFormValues = () => {
    const result = Object.entries(formData).reduce((acc, [key, value]) => ({
      ...acc,
      [key]: value.value,
    }), {});

    if (!Object.entries(result).length) return null;

    return result;
  };

  const submit = (e: FormEvent, validators: { [name: string]: Function }) => {
    e.preventDefault();

    let hasError = false;
    Object.entries(validators).forEach(([name, validator]) => {
      hasError = !!validator(formData[name]?.value, formData) || hasError;
    });
    if (hasError) {
      return null;
    }

    return getFlatFormValues();
  };

  return {
    getFlatFormValues,
    onChange,
    validate,
    getValue,
    hasAnyError,
    getFormValues,
    getValidationResult,
    submit,
  };
};

export default UseForm;
