import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

import { setupAxiosBaseUrl } from './helpers/axios';
import Router from './Router/Router';

setupAxiosBaseUrl(process.env.REACT_APP_BE_ADDRESS);

const App = () => (
  <BrowserRouter>
    <header>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/register">Rejestracja</Link>
        <Link to="/shopping-lists">Moje listy zakupów</Link>
        <Link to="/shopping-list/123123123">Lista zakupów 123123123</Link>
        <Link to="/shopping-sadadasd">Jakaś 404</Link>
      </nav>
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
