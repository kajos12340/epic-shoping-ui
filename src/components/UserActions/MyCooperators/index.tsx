import React, { useEffect, useState, Fragment } from 'react';
import {
  ListItem, ListItemAvatar, ListItemText, Avatar, Divider,
} from '@material-ui/core';
import axios from 'axios';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

import Loader from '../../Loader';

import { Container } from './styles';

interface IUserSimple {
  login: string,
  registrationDate: string,
  isConfirmed: string,
}

const MyCooperators = () => {
  const [users, setUsers] = useState<IUserSimple[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get('/auth/get-users');
      setUsers(data.users);
      setLoading(false);
    };
    fetchUsers();
  }, []);

  return (
    <Container>
      <Loader visible={loading} absolute />
      {users.map((user, idx) => (
        <Fragment key={user.login}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                {user.login[0]}
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={user.login} secondary={`Data rejestracji: ${user.registrationDate}`} />
            {user.isConfirmed ? <CheckIcon color="primary" /> : <CloseIcon color="error" />}
          </ListItem>
          {(idx < users.length) && <Divider />}
        </Fragment>
      ))}
    </Container>
  );
};

export default MyCooperators;
