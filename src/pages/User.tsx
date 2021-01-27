import React from 'react';

import UserActions from '../components/UserActions/UserActions';
import useAuthorize from '../hooks/useAuthorize/useAuthorize';

const User = () => {
  useAuthorize();
  return (
    <UserActions />
  );
};

export default User;
