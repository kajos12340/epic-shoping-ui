import React from 'react';

import {
  Content, Container, Icon, OwnContent, Date, Text,
} from './Message.styles';

export interface IMessage {
  author: string,
  isOwn: boolean,
  text: string,
  date: string
}

const Message = ({
  author, isOwn, text, date,
}: IMessage) => {
  const ContentWrapper = isOwn ? OwnContent : Content;

  return (
    <Container isOwn={isOwn}>
      <ContentWrapper>
        <Icon>
          {author[0]}
        </Icon>
        <Date>{`${author} - ${date}`}</Date>
        <Text>{text}</Text>
      </ContentWrapper>
    </Container>
  );
};

export default Message;
