import React from 'react';

import Communicator from '../components/Communicator/Communicator';
import withAuthorize from '../hoc/withAuthorize';

const Messages = () => (
  <Communicator />
);

export default withAuthorize(Messages);
