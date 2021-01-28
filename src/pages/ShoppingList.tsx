import React from 'react';

import useAuthorize from '../hooks/useAuthorize/useAuthorize';
import SingleList from '../components/SingleList/SingleList';

const ShoppingList = () => {
  useAuthorize();

  return (
    <SingleList />
  );
};

export default ShoppingList;
