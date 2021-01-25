import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';
import ShoppingLists from '../pages/ShoppingLists';
import ShoppingList from '../pages/ShoppingList';
import NotFound from '../pages/NotFound';

const Router = () => (
  <Switch>
    <Route exact path="/">
      <ShoppingLists />
    </Route>
    <Route exact path="/login">
      <Login />
    </Route>
    <Route exact path="/register">
      <Register />
    </Route>
    <Route exact path="/shopping-lists">
      <ShoppingLists />
    </Route>
    <Route exact path="/shopping-list/:id">
      <ShoppingList />
    </Route>
    <Route>
      <NotFound />
    </Route>
  </Switch>
);

export default Router;
