import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { increaseCounter } from '@store/messageCounter/actions';
import useSocket from './useSocket';

const UseMessageCounter = () => {
  const socket = useSocket();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    socket.current?.on('newMessage', () => {
      if (history.location.pathname !== '/messages') {
        dispatch(increaseCounter());
      }
    });
  }, [socket, history]);

  return null;
};

export default UseMessageCounter;
