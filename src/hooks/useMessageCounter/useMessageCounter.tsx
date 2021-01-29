import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import useSocket from '../useSocket/useSocket';
import { increaseCounter } from '../../store/messageCounter/actions';

const UseMessageCounter = () => {
  const socket = useSocket();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    // eslint-disable-next-line no-debugger
    debugger;
    socket.current?.on('newMessage', () => {
      if (history.location.pathname !== '/messages') {
        dispatch(increaseCounter());
      }
    });
  }, [socket, history]);

  return null;
};

export default UseMessageCounter;