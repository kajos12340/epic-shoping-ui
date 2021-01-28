import React, { ComponentType } from 'react';
import useAuthorize from '../hooks/useAuthorize/useAuthorize';

const WithAuthorize = (Component: ComponentType) => () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const authorized = useAuthorize();

  if (authorized) return <Component />;

  return null;
};

export default WithAuthorize;
