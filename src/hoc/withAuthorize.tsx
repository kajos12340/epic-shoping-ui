import React, { ComponentType } from 'react';

import useAuthorize from '@hooks/useAuthorize';

const WithAuthorize = (Component: ComponentType, allowAnonymous: boolean = false) => () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const authorized = useAuthorize(allowAnonymous);

  if (authorized) return <Component />;

  return null;
};

export default WithAuthorize;
