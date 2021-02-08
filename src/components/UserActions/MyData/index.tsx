import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

import { getUser } from '@store/selectors';

import {
  Container, Logo, Login, Email, LastLoginDate, RegisterDate,
} from './styles';

const MyData = () => {
  const userData = useSelector(getUser);

  return (
    <Container>
      <Logo>
        <AccountCircleIcon color="primary" />
      </Logo>
      <Login>
        <Typography variant="h5">
          {userData.login}
        </Typography>
      </Login>
      <Email>
        <div>Email:</div>
        <div>{userData.email}</div>
      </Email>
      <LastLoginDate>
        <div>Ostatnie logowanie:</div>
        <div>{userData.lastLoginDate}</div>
      </LastLoginDate>
      <RegisterDate>
        <div>Data rejestracji:</div>
        <div>{userData.registrationDate}</div>
      </RegisterDate>
    </Container>
  );
};

export default MyData;
