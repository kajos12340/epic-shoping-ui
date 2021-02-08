import React from 'react';
import { mount } from 'enzyme';
import { Button } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';

import SimpleList, { ISimpleListItem } from './index';

describe('SimpleList', () => {
  const propsBase = {
    name: 'test name',
    isActive: true,
    productsNumber: 45,
    date: '12:33 24.05.2020',
    _id: 'list_id',
    author: {
      _id: 'idd2',
      login: 'login',
    },
  };

  const createWrapper = ({
    name, isActive, productsNumber, date, _id, author,
  }: ISimpleListItem) => mount(
    <BrowserRouter>
      <SimpleList
        name={name}
        date={date}
        isActive={isActive}
        productsNumber={productsNumber}
        _id={_id}
        author={author}
      />
    </BrowserRouter>,
  );

  it('should match snapshot for active list', () => {
    const wrapper = createWrapper({
      ...propsBase,
      isActive: true,
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot for inactive list', () => {
    const wrapper = createWrapper({
      ...propsBase,
      isActive: false,
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('should redirect to singleList', () => {
    const wrapper = createWrapper({
      ...propsBase,
      isActive: true,
    });
    // @ts-ignore
    global.window = { location: { pathname: '/shopping/lists' } };

    const button = wrapper.find(Button);
    button.simulate('click');

    expect(global.location.pathname).toBe('/shopping/list/list_id');
  });
});
