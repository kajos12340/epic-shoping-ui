import React from 'react';

import useAuthorize from '../hooks/useAuthorize/useAuthorize';

const Messages = () => {
  useAuthorize();

  return (
    <div>
      Messages
    </div>
  );
};

export default Messages;
