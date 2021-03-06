import React from 'react';

import withAuthorize from '@hoc/withAuthorize';
import Lists from '@components/Lists';

const ShoppingLists = () => (
  <Lists />
);

export default withAuthorize(ShoppingLists);
