import React from 'react';

import withAuthorize from '@hoc/withAuthorize';
import SingleList from '@components/SingleList';

const ShoppingList = () => (
  <SingleList />
);

export default withAuthorize(ShoppingList);
