import React, { ChangeEvent } from 'react';
import { mount } from 'enzyme';
import { Select } from '@material-ui/core';

import useForm from '../../hooks/useForm';
import Index, { IValidator } from './index';

interface ISimpleInputProps {
  id: string,
  label: string,
  validators: {
    [name: string]: IValidator,
  },
  type?: string,
  onChange(e: ChangeEvent<HTMLInputElement>): void,
}

describe('Input', () => {
  const createWrapper = ({
    id, label, validators, type = 'text', onChange,
  }: ISimpleInputProps) => {
    const Component = () => {
      const form = useForm();
      return (
        <Index
          id={id}
          label={label}
          formState={{
            ...form,
            onChange,
          }}
          validators={validators}
          type={type}
        />
      );
    };

    return mount(<Component />);
  };

  it('should render select', () => {
    const wrapper = createWrapper({
      id: 'id',
      label: 'Select',
      validators: {
        id: () => '',
      },
      type: 'select',
      onChange: () => null,
    });

    const select = wrapper.find(Select);
    expect(select).toHaveLength(1);
  });

  it('should render input', () => {
    const wrapper = createWrapper({
      id: 'id',
      label: 'Select',
      validators: {
        id: () => '',
      },
      onChange: () => null,
    });

    const input = wrapper.find('input[type="text"]');
    expect(input).toHaveLength(1);
  });

  it('should change value', () => {
    const onChange = jest.fn();
    const wrapper = createWrapper({
      id: 'id',
      label: 'Select',
      validators: {
        id: () => '',
      },
      onChange,
    });

    const input = wrapper.find('input[type="text"]');
    input.simulate('change', { target: { value: 'Hello' } });
    expect(onChange).toHaveBeenCalled();
  });
});
