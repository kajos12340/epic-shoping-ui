import React from 'react';

import LoginForm from '@components/LoginForm';
import withAuthorize from '@hoc/withAuthorize';

const Login = () => (
  <LoginForm />
);

export default withAuthorize(Login, true);
