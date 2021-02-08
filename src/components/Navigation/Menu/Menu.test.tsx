import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import { Badge } from '@material-ui/core';

import Menu from './index';
import { menuOptions } from '../index';

const mockStore = configureMockStore([]);

describe('Menu', () => {
  const createWrapper = () => mount(
    <BrowserRouter>
      <Provider
        store={mockStore({
          messageCounter: 22,
        })}
      >
        <Menu
          currentActiveTab="user"
          menuOptions={menuOptions}
        />
      </Provider>
    </BrowserRouter>,
  );

  it('should show proper number of messages', () => {
    const wrapper = createWrapper();

    const badge = wrapper.find(Badge);
    expect(badge.prop('badgeContent')).toBe(22);
  });

  it('should match snapshot', () => {
    const wrapper = createWrapper();
    expect(wrapper).toMatchSnapshot();
  });
});
