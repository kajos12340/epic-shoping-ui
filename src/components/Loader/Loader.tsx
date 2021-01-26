import React from 'react';

import { Container, Icon } from './Loader.styled';

interface ILoaderProps {
  visible: boolean,
}

const Loader = ({ visible }: ILoaderProps) => {
  if (!visible) return null;

  return (
    <Container>
      <Icon color="primary" style={{ fontSize: 80 }} />
    </Container>
  );
};

export default Loader;
