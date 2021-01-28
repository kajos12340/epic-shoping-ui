import React from 'react';

import useAuthorize from '../hooks/useAuthorize/useAuthorize';
import Communicator from '../components/Communicator/Communicator';

const Messages = () => {
  useAuthorize();

  return (
    <Communicator />
  );
};

export default Messages;
