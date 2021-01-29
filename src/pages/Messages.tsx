import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Communicator from '../components/Communicator/Communicator';
import withAuthorize from '../hoc/withAuthorize';
import { resetCounter } from '../store/messageCounter/actions';

const Messages = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetCounter());
  }, []);

  return (
    <Communicator />
  );
};

export default withAuthorize(Messages);
