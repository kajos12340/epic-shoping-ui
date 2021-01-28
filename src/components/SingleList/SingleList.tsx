import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Paper, List, Divider, Grid, Button,
} from '@material-ui/core';

import ListHeader from './ListHeader/ListHeader';
import Item, { IItem } from './Item/Item';
import NewItemForm from './NewItemForm/NewItemForm';

import { ListContainer } from './SingleList.styles';

const mockData: IItem[] = [
  {
    name: 'Produkt 1',
    quantity: 500,
    unit: 'szt.',
  },
  {
    name: 'Produkt 2',
    quantity: 34,
    unit: 'g',
  },
  {
    name: 'Produkt 3',
    quantity: 66,
    unit: 'kg',
  },
  {
    name: 'Produkt 4',
    quantity: 1,
    unit: 'ml',
  },
  {
    name: 'Produkt 5',
    quantity: 43,
    unit: 'szt.',
  },
  {
    name: 'Produkt 16',
    quantity: 5,
    unit: 'ml',
  },
];

const SingleList = () => {
  const { id } = useParams<{ id: string }>();

  console.log(id);
  return (
    <>
      <Paper>
        <ListHeader
          counter={12}
          count={45}
          author="Pioter"
          name="Super lista"
          date="22.01.2021"
        />
        <ListContainer>
          <List dense>
            {mockData.map((item, idx) => (
              <>
                <Item name={item.name} unit={item.unit} quantity={item.quantity} />
                {idx < mockData.length - 1 && <Divider />}
              </>
            ))}
          </List>
          <NewItemForm />
          <Grid container justify="flex-end">
            <Button variant="contained">Zakończ zakupy</Button>
          </Grid>
        </ListContainer>
      </Paper>
    </>
  );
};

export default SingleList;
