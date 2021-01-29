import React from 'react';

import RegisterForm from '../components/RegisterForm/RegisterForm';
import withAuthorize from '../hoc/withAuthorize';

const Register = () => (
  <RegisterForm />
);

export default withAuthorize(Register, true);
