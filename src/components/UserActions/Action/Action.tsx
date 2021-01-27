import { Typography } from '@material-ui/core';
import React, { ReactNode } from 'react';

import { Container, IconContainer } from './Actions.styles';

interface IActionProps {
  name: string,
  icon: ReactNode,
  onClick(): void,
}

const Action = ({ name, icon, onClick }: IActionProps) => (
  <Container onClick={onClick}>
    <IconContainer>
      {icon}
    </IconContainer>
    <Typography variant="h6">
      {name}
    </Typography>
  </Container>
);

export default Action;
