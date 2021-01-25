import React from 'react';
import { useParams } from 'react-router-dom';

const ShoppingList = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      List
      {` ${id}`}
    </div>
  );
};

export default ShoppingList;
