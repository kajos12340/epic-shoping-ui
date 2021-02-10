import React, { ComponentType } from 'react';
import { Redirect } from 'react-router-dom';

import useAuthorize from '@hooks/useAuthorize';

const WithAuthorize = (Component: ComponentType, allowAnonymous: boolean = false) => () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const authorized = useAuthorize(allowAnonymous);

  if (authorized) return <Component />;

  if (authorized === null) return null;

  return <Redirect to="/shopping/lists" />;
};

export default WithAuthorize;
