import React from 'react';
import { shallow } from 'enzyme';

import { Icon, Container } from './Message.styles';
import Message, { IMessageProps } from './index';

describe('Message', () => {
  const createWrapper = ({
    isOwn, author, text, date,
  }: IMessageProps) => shallow(
    <Message isOwn={isOwn} author={author} text={text} date={date} />,
  );

  it('should match snapshot', () => {
    const wrapper = createWrapper({
      isOwn: true,
      text: 'test message',
      date: '12:33 24.05.2020',
      author: {
        _id: 'testId',
        color: '123456',
        login: 'testLogin',
      },
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('should generate icon in proper color', () => {
    const bgColor = '123456';
    const wrapper = createWrapper({
      isOwn: true,
      text: 'test message',
      date: '12:33 24.05.2020',
      author: {
        _id: 'testId',
        color: bgColor,
        login: 'testLogin',
      },
    });

    const icon = wrapper.find(Icon);
    expect(icon.prop('bgColor')).toBe(`#${bgColor}`);
  });

  it('should proper style own messages', () => {
    const bgColor = '123456';
    const wrapper = createWrapper({
      isOwn: true,
      text: 'test message',
      date: '12:33 24.05.2020',
      author: {
        _id: 'testId',
        color: bgColor,
        login: 'testLogin',
      },
    });

    const container = wrapper.find(Container);
    expect(container.prop('isOwn')).toBeTruthy();
  });
});
