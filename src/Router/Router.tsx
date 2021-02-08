import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '@pages/Login';
import Register from '@pages/Register';
import ShoppingLists from '@pages/ShoppingLists';
import ShoppingList from '@pages/ShoppingList';
import NotFound from '@pages/NotFound';
import Messages from '@pages/Messages';
import User from '@pages/User';

const Router = () => (
  <Switch>
    <Route exact path="/">
      <Login />
    </Route>
    <Route exact path="/user/login">
      <Login />
    </Route>
    <Route exact path="/user/register">
      <Register />
    </Route>
    <Route exact path="/shopping/lists">
      <ShoppingLists />
    </Route>
    <Route exact path="/messages">
      <Messages />
    </Route>
    <Route exact path="/user">
      <User />
    </Route>
    <Route exact path="/shopping/list/:id">
      <ShoppingList />
    </Route>
    <Route>
      <NotFound />
    </Route>
  </Switch>
);

export default Router;
