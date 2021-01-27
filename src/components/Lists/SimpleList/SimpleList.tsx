import React from 'react';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Typography from '@material-ui/core/Typography';

import { Button } from '@material-ui/core';
import {
  Container, Icon, Date, Title, Navigation, ListState,
} from './SimpleList.styles';

export interface ISimpleListItem {
  name: string,
  date: string,
  isActive: boolean,
  productsNumber: number,
  id: string,
}

const SimpleList = ({
  name, date, isActive, productsNumber,
}: ISimpleListItem) => (
  <Container>
    <Icon>
      <ShoppingCartOutlinedIcon />
    </Icon>
    <Date>
      {date}
    </Date>
    <Title>
      <Typography variant="h6">{name}</Typography>
      <Typography variant="subtitle2">{`${productsNumber} produktów na liście`}</Typography>
    </Title>
    <Navigation>
      <ListState isActive={isActive}>
        {isActive ? 'Lista aktywna' : 'Lista zakończona'}
      </ListState>
      <Button
        variant="contained"
        color={isActive ? 'secondary' : 'inherit'}
      >
        {isActive ? 'Przejdź do listy' : 'Szczegóły'}
      </Button>
    </Navigation>
  </Container>
);

export default SimpleList;
