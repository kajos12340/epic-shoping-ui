import React, {
  ChangeEvent, useCallback, useEffect, useState,
} from 'react';
import {
  Box, Grid, TextField, IconButton,
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

import {
  Container, Input, Content, Messages,
} from './Communicator.styles';
import Message, { IMessage } from './Message/Message';

const messagesMock: IMessage[] = [
  {
    isOwn: false,
    author: 'Maja',
    date: '28.01.2021 18:40',
    text: 'Hej, pamiętaj o bułkach, maśle, płatkach i mleku, i mleku, i mleku, i mleku, i mleku, i mleku, i mleku, i mleku, i mleku, i mleku, i mleku, i mleku, i mleku, i mleku, i mleku, i mleku, i mleku, i mleku, i mleku, i mleku, i mleku, i mleku, i mleku, i mleku, i mleku,! :)',
  },
  {
    isOwn: false,
    author: 'Maja',
    date: '28.01.2021 18:41',
    text: 'a i o Almette',
  },
  {
    isOwn: true,
    author: 'Piotrek',
    date: '28.01.2021 18:43',
    text: 'Oki, wszystko kupię',
  },
  {
    isOwn: true,
    author: 'Piotrek',
    date: '28.01.2021 18:44',
    text: 'Wziąłem też monte :D',
  },
  {
    isOwn: false,
    author: 'Maja',
    date: '28.01.2021 18:45',
    text: 'Mniam',
  },
  {
    isOwn: false,
    author: 'Maja',
    date: '28.01.2021 18:46',
    text: ':D',
  },
  {
    isOwn: true,
    author: 'Piotrek',
    date: '28.01.2021 18:48',
    text: 'Haha :D',
  },
];

const Communicator = () => {
  const [message, setMessage] = useState('');

  const handleMessageChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    setMessage(e.target.value);
  }, []);

  const handleMessageSend = useCallback(() => {
    console.log('sendMessage', message);
    setMessage('');
  }, [message]);

  useEffect(() => {
    // @ts-ignore
    document.getElementById('scrollAnchor').scrollIntoView();
  }, []);

  return (
    <Grid container justify="center">
      <Grid xs={12} sm={10} md={8} lg={6} xl={5} justify="center">
        <Container>
          <Box p={2} height="100%" boxSizing="border-box">
            <Content>
              <Messages>
                {messagesMock.map((item) => (
                  <Message
                    author={item.author}
                    isOwn={item.isOwn}
                    text={item.text}
                    date={item.date}
                    key={item.date}
                  />
                ))}
                <div id="scrollAnchor" />
              </Messages>
              <Input>
                <TextField
                  value={message}
                  onChange={handleMessageChange}
                  placeholder="Wpisz wiadomość"
                  variant="outlined"
                  label="Wiadomość"
                  fullWidth
                />
                <IconButton onClick={handleMessageSend}>
                  <SendIcon color="primary" fontSize="large" />
                </IconButton>
              </Input>
            </Content>
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Communicator;
