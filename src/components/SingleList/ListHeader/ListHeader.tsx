import React from 'react';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Typography from '@material-ui/core/Typography';

import { Container } from './ListHeader.styles';
import { Date, Icon, Title } from '../../Lists/SimpleList/SimpleList.styles';

interface IListHeaderProps {
  counter: number,
  count: number,
  name: string,
  date: string,
  author: string,
}

const ListHeader = ({
  counter, count, name, date, author,
}: IListHeaderProps) => (
  <Container>
    <Icon>
      <ShoppingCartOutlinedIcon />
    </Icon>
    <Date>
      {`${date} - ${author}`}
    </Date>
    <Title>
      <Typography variant="h6" style={{ wordBreak: 'break-word' }}>{name}</Typography>
      <Typography variant="subtitle2">{`W koszyku: ${counter} / ${count}`}</Typography>
    </Title>
  </Container>
);

export default ListHeader;
