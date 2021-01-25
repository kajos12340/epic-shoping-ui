import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { setupAxiosBaseUrl } from './helpers/axios';
import Router from './Router/Router';
import Navigation from './components/Navigation/Navigation';

setupAxiosBaseUrl(process.env.REACT_APP_BE_ADDRESS);

const App = () => (
  <BrowserRouter>
    <header>
      <Navigation />
    </header>
    <main>
      <Router />
    </main>
    <footer>
      footer
    </footer>
  </BrowserRouter>
);

export default App;
