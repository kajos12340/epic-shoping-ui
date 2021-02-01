import React, {
  ChangeEvent, useCallback, useEffect, useState,
} from 'react';
import {
  Box, Grid, TextField, IconButton,
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import moment from 'moment';

import { useSelector } from 'react-redux';
import Message, { IMessage } from './Message/Message';
import useSocket from '../../hooks/useSocket/useSocket';

import {
  Container, Input, Content, Messages,
} from './Communicator.styles';
import Loader from '../Loader/Loader';
import { RootReducerState } from '../../store/store';

interface IMessageFromBE {
  author: {
    login: string,
    _id: string,
    color: string,
  },
  date: Date,
  text: string,
}

const Communicator = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState<IMessage[]>([]);

  const socket = useSocket();
  const userId = useSelector((state: RootReducerState) => state.user?.id);

  const handleMessageChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    setMessage(e.target.value);
  }, []);

  const handleMessageSend = useCallback(() => {
    if (!message) return;

    socket.current?.emit('newMessage', message);
    setMessage('');
  }, [message, socket]);

  useEffect(() => {
    if (messages.length) {
      // @ts-ignore
      document.getElementById('scrollAnchor').scrollIntoView();
    }
  }, [messages]);

  useEffect(() => {
    setTimeout(() => {
      socket.current?.emit('getMessages');
    }, 500);

    socket.current?.on('messagesList', (newMessages: IMessageFromBE[]) => {
      const mapMessage = (newMessage: IMessageFromBE): IMessage => ({
        author: newMessage.author,
        date: moment(newMessage.date).format('HH:mm DD.MM.YYYY'),
        text: newMessage.text,
      });

      setLoading(false);
      setMessages(newMessages.map((messageFromBE) => mapMessage(messageFromBE)));
    });
  }, [socket]);

  return (
    <Grid container justify="center">
      <Loader visible={loading} />
      <Grid xs={12} sm={10} md={8} lg={6} xl={5} justify="center">
        <Container>
          <Box p={2} height="100%" boxSizing="border-box">
            <Content>
              <Messages>
                {messages.map((item) => (
                  <Message
                    author={item.author}
                    isOwn={item.author._id === userId}
                    text={item.text}
                    date={item.date}
                    key={item.date}
                  />
                ))}
                <div id="scrollAnchor" />
              </Messages>
              <form onSubmit={(e) => e.preventDefault()}>
                <Input>
                  <TextField
                    value={message}
                    onChange={handleMessageChange}
                    placeholder="Wpisz wiadomość"
                    variant="outlined"
                    label="Wiadomość"
                    fullWidth
                  />
                  <IconButton onClick={handleMessageSend} type="submit">
                    <SendIcon color="primary" fontSize="large" />
                  </IconButton>
                </Input>
              </form>
            </Content>
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Communicator;
