import React from 'react';

import {
  Content, Container, Icon, OwnContent, Date, Text,
} from './Message.styles';

export interface IMessage {
  author: {
    login: string,
    _id: string,
    color: string,
  },
  isOwn?: boolean,
  text: string,
  date: string,
}

interface IMessageProps extends IMessage{
  isOwn: boolean,
}

const Message = ({
  author, isOwn, text, date,
}: IMessageProps) => {
  const ContentWrapper = isOwn ? OwnContent : Content;

  return (
    <Container isOwn={isOwn}>
      <ContentWrapper bgColor={`#${author.color}`}>
        <Icon bgColor={`#${author.color}`}>
          {author.login[0]}
        </Icon>
        <Date>{`${author.login} - ${date}`}</Date>
        <Text>{text}</Text>
      </ContentWrapper>
    </Container>
  );
};

export default Message;
