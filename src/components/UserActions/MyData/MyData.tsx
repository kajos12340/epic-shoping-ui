import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Typography } from '@material-ui/core';

import {
  Container, Logo, Login, Email, LastLoginDate, RegisterDate,
} from './MyData.styles';

const MyData = () => (
  <Container>
    <Logo>
      <AccountCircleIcon color="primary" />
    </Logo>
    <Login>
      <Typography variant="h5">
        Piotru
      </Typography>
    </Login>
    <Email>
      <label>Email:</label>
      piotru@superpoczta.pl
    </Email>
    <LastLoginDate>
      <label>Ostatnie logowanie:</label>
      24.05.2020 11:45
    </LastLoginDate>
    <RegisterDate>
      <label>Data rejestracji:</label>
      23.05.2020 11:45
    </RegisterDate>
  </Container>
);

export default MyData;
