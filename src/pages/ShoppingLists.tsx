import React from 'react';

import Lists from '../components/Lists/Lists';
import useAuthorize from '../hooks/useAuthorize/useAuthorize';

const ShoppingLists = () => {
  useAuthorize();

  return (
    <Lists />
  );
};

export default ShoppingLists;
