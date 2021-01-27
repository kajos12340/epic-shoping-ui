import React from 'react';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

import { Button } from '@material-ui/core';
import {
  Container, Icon, Date, Title, Navigation, ListInactive,
} from './SimpleList.styles';

export interface ISimpleListItem {
  name: string,
  date: string,
  isActive: boolean,
  productsNumber: number,
  id: string,
}

const SimpleList = ({
  name, date, isActive, productsNumber, id,
}: ISimpleListItem) => {
  const history = useHistory();

  const handleListRedirect = () => {
    history.push(`/shopping/list/${id}`);
  };

  return (
    <Container>
      <Icon>
        <ShoppingCartOutlinedIcon />
      </Icon>
      <Date>
        {date}
      </Date>
      <Title>
        <Typography variant="h6" style={{ wordBreak: 'break-word' }}>{name}</Typography>
        <Typography variant="subtitle2">{`${productsNumber} produktów na liście`}</Typography>
      </Title>
      <Navigation>
        {isActive
          ? (
            <Button
              variant="contained"
              color="secondary"
              onClick={handleListRedirect}
            >
              {isActive ? 'Przejdź do listy' : 'Szczegóły'}
            </Button>
          )
          : (
            <ListInactive>
              Lista nieaktywna
            </ListInactive>
          )}
      </Navigation>
    </Container>
  );
};

export default SimpleList;
