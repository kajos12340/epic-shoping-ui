import React from 'react';
import axios from 'axios';

import { setupAxiosBaseUrl } from './helpers/axios';

setupAxiosBaseUrl(process.env.REACT_APP_BE_ADDRESS);

const App = () => {
  const basicFetch = async () => {
    const resp = await axios.get('/test');
    console.log(resp);
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
    </header>
  );
};

export default App;
