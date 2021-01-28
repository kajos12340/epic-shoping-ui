import React from 'react';

import withAuthorize from '../hoc/withAuthorize';
import UserActions from '../components/UserActions/UserActions';

const User = () => (
  <UserActions />
);

export default withAuthorize(User);
