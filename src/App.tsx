import React, { useState } from 'react';
import axios from 'axios';

import { setToken, setupAxiosBaseUrl } from './helpers/axios';

setupAxiosBaseUrl(process.env.REACT_APP_BE_ADDRESS);
setToken('tokeniszce');

const App = () => {
  const [response, setResponse] = useState<Object>();

  const basicFetch = async () => {
    const resp = await axios.get('/test');
    console.log(resp);
    setResponse(resp);
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
          {JSON.stringify(response, null, 2)}
        </code>
      </pre>
    </header>
  );
};

export default App;
