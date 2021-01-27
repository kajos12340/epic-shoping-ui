import React from 'react';
import { useParams } from 'react-router-dom';

import useAuthorize from '../hooks/useAuthorize/useAuthorize';

const ShoppingList = () => {
  useAuthorize();
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      List
      {` ${id}`}
    </div>
  );
};

export default ShoppingList;
