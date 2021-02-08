import React from 'react';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

import { Button } from '@material-ui/core';
import {
  Container, Icon, Date, Title, Navigation, ListInactive,
} from './styles';

export interface ISimpleListItem {
  name: string,
  date: string,
  isActive: boolean,
  productsNumber: number,
  _id: string,
  author: {
    _id: string,
    login: string,
  },
}

const SimpleList = ({
  name, date, isActive, productsNumber, _id, author,
}: ISimpleListItem) => {
  const history = useHistory();

  const handleListRedirect = () => {
    history.push(`/shopping/list/${_id}`);
  };

  return (
    <Container>
      <Icon>
        <ShoppingCartOutlinedIcon />
      </Icon>
      <Date>
        {`${date} - ${author.login}`}
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
