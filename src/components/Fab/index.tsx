import React, { ReactElement } from 'react';

import { PositionedFab } from './styles';

export interface IFabProps {
  onClick(): void,
  children: ReactElement,
}

const Fab = ({ onClick, children }: IFabProps) => (
  <PositionedFab variant="round" color="primary" onClick={onClick}>
    {children}
  </PositionedFab>
);

export default Fab;
