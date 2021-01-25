import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SocketIOClient, { Socket } from 'socket.io-client';

import { setToken, setupAxiosBaseUrl } from './helpers/axios';

setupAxiosBaseUrl(process.env.REACT_APP_BE_ADDRESS);
setToken('tokeniszce');

const endpoint = process.env.REACT_APP_BE_ADDRESS;

let socket: typeof Socket;

// const roomName = `room-${+(new Date())}`;
const roomName = 'room-123';

const App = () => {
  const [name, setName] = useState('');
  const [response1, setResponse1] = useState<Object>();
  const [responseWS, setResponseWS] = useState<Object>();
  const [responseWS2, setResponseWS2] = useState<(string | null)[]>([]);

  useEffect(() => {
    socket = SocketIOClient();
  }, []);

  const basicFetch = async () => {
    const resp = await axios.post('/auth/login', {
      login: 'pkajka',
      password: 'test1234',
    });
    console.log(resp);
    setResponse1(resp.data);
  };

  useEffect(() => {
    // @ts-ignore
    socket = SocketIOClient(endpoint);
    socket.on('FromAPI', (data: any) => {
      setResponseWS(data);
    });
    socket.on('addedUser', (data: any) => {
      console.log('addedUser!!!, data:', data);
      setResponseWS2(data.currentUsers);
    });
  }, []);

  const click = () => {
    socket.emit('joinRoom', { name, roomName });
  };

  return (
    <header>
      <div>
        Hello world! x
      </div>
      <br />
      <button type="button" onClick={basicFetch}>
        Fetch
      </button>
      <pre>
        <code>
          {JSON.stringify(response1, null, 2)}
        </code>
      </pre>
      <br />
      <div>
        Response from websocket:
        {' '}
        {responseWS}
      </div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button type="button" onClick={click}>
        join room
      </button>
      {responseWS2.map((i) => <div>{i}</div>)}
    </header>
  );
};

export default App;
