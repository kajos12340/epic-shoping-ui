import React from 'react';
import { mount } from 'enzyme';
import { Dialog as DialogDefault, DialogActions } from '@material-ui/core';

import Dialog, { IDialogProps } from './index';

describe('Dialog', () => {
  const createWrapper = ({
    open, onClose = () => null, title = 'Test title', okCallback = () => null,
    cancelCallback = () => null, confirmFooter, children,
  }: IDialogProps) => mount(
    <Dialog
      open={open}
      onClose={onClose}
      title={title}
      cancelCallback={cancelCallback}
      okCallback={okCallback}
      confirmFooter={confirmFooter}
    >
      {children}
    </Dialog>,
  );

  it('should match snapshot', () => {
    const wrapper = createWrapper({
      children: 'Some child',
      open: true,
      confirmFooter: false,
      title: 'Test title',
      onClose: () => null,
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('should appear when open prop equals true', () => {
    const wrapper = createWrapper({
      children: 'Some child',
      open: true,
      confirmFooter: false,
      title: 'Test title',
      onClose: () => null,
    });

    const dialog = wrapper.find(DialogDefault);
    expect(dialog.prop('open')).toBe(true);
  });

  it('should call onClose prop on close button click', () => {
    const onClose = jest.fn();
    const wrapper = createWrapper({
      children: 'Some child',
      open: true,
      confirmFooter: false,
      title: 'Test title',
      onClose,
    });

    const closeButton = wrapper.find('button[aria-label="close"]');
    closeButton.simulate('click');
    expect(onClose).toHaveBeenCalled();
  });

  it('should render confirm footer', () => {
    const wrapper = createWrapper({
      children: 'Some child',
      confirmFooter: true,
      title: 'Test title',
      onClose: () => null,
      open: true,
    });

    const footer = wrapper.find(DialogActions);
    expect(footer).toHaveLength(1);
  });

  it('should not render confirm footer', () => {
    const wrapper = createWrapper({
      children: 'Some child',
      confirmFooter: false,
      title: 'Test title',
      onClose: () => null,
      open: false,
    });

    const footer = wrapper.find(DialogActions);
    expect(footer).toHaveLength(0);
  });
});
