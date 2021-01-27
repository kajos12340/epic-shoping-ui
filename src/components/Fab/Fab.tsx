import React, { ReactElement } from 'react';

import { PositionedFab } from './Fab.styles';

interface IFabProps {
  onClick(): any,
  children: ReactElement,
}

const Fab = ({ onClick, children }: IFabProps) => (
  <PositionedFab variant="round" color="primary" onClick={onClick}>
    {children}
  </PositionedFab>
);

export default Fab;
