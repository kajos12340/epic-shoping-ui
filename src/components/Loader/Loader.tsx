import React from 'react';

import { Container, Icon } from './Loader.styled';

interface ILoaderProps {
  visible: boolean,
  absolute?: boolean
}

const Loader = ({ visible, absolute = false }: ILoaderProps) => {
  if (!visible) return null;

  return (
    <Container absolute>
      <Icon color="primary" style={{ fontSize: 80 }} />
    </Container>
  );
};

export default Loader;
