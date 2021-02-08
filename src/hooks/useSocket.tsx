import React, { useEffect, useRef } from 'react';
import socketIOClient, { Socket } from 'socket.io-client';

const endpoint = process.env.REACT_APP_BE_ADDRESS || '';

const UseSocket = () => {
  const socket = useRef<typeof Socket>();

  useEffect(() => {
    socket.current = socketIOClient(endpoint, {
      // @ts-ignore
      auth: {
        token: localStorage.getItem('token'),
      },
    });

    return () => {
      socket.current?.disconnect();
    };
  }, []);

  return socket;
};

export default UseSocket;
