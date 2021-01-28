import React, { useEffect, useState } from 'react';
import {
  Box, Grid, Paper, Button,
} from '@material-ui/core';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';

import Fab from '../Fab/Fab';
import Dialog from '../Dialog/Dialog';
import NewListForm from './NewListForm/NewListForm';
import SimpleList, { ISimpleListItem } from './SimpleList/SimpleList';

import { Filters } from './Lists.styles';

const listsMock: ISimpleListItem[] = [
  {
    productsNumber: 45,
    date: '22.05.2020',
    name: 'Sobotnie zakupy',
    isActive: false,
    id: 'asdasdasdas1',
    author: 'Majak',
  },
  {
    productsNumber: 5,
    date: '24.05.2020',
    name: 'Zapomniane rzeczy',
    isActive: true,
    id: 'asdasdasdas2',
    author: 'Pioter',
  },
  {
    productsNumber: 45,
    date: '14.05.2020',
    name: 'Niedzielne zakupy',
    isActive: true,
    id: 'asdasdasdas3',
    author: 'Majak',
  },
  {
    productsNumber: 45,
    date: '02.05.2020',
    name: 'Poniedziałkowe zakupy',
    isActive: false,
    id: 'asdasdasdas4',
    author: 'Pioter',
  },
  {
    productsNumber: 45,
    date: '21.06.2020',
    name: 'Sobotnie zakupy',
    isActive: false,
    id: 'asdasdasdas',
    author: 'Majak',
  },
];

const Lists = () => {
  const [newListDialogOpen, setNewListDialogOpen] = useState(false);
  const [filterActive, setFilterActive] = useState(true);
  const [filterInActive, setFilterInActive] = useState(false);
  const [filteredData, setFilteredData] = useState<ISimpleListItem[]>([]);

  useEffect(() => {
    const newFilteredData = listsMock.filter((item) => {
      if (filterActive && item.isActive) {
        return true;
      }
      if (filterInActive && !item.isActive) {
        return true;
      }
      return false;
    });
    setFilteredData(newFilteredData);
  }, [filterActive, filterInActive]);

  const openNewListDialog = () => {
    setNewListDialogOpen(true);
  };

  const closeNewListDialog = () => {
    setNewListDialogOpen(false);
  };

  return (
    <Box mb={8}>
      <Filters>
        <Button
          onClick={() => setFilterActive((prev) => !prev)}
          color={filterActive ? 'primary' : 'inherit'}
          variant="contained"
        >
          Aktywne
        </Button>
        <Button
          onClick={() => setFilterInActive((prev) => !prev)}
          color={filterInActive ? 'primary' : 'inherit'}
          variant="contained"
        >
          Nieaktywne
        </Button>
      </Filters>
      <Grid container>
        {filteredData.map((item) => (
          <Grid xs={12} md={6} lg={4} key={item.id}>
            <Box p={1}>
              <Paper>
                <SimpleList
                  name={item.name}
                  date={item.date}
                  isActive={item.isActive}
                  productsNumber={item.productsNumber}
                  id={item.id}
                  author={item.author}
                />
              </Paper>
            </Box>
          </Grid>
        ))}
        <Fab onClick={openNewListDialog}>
          <AddOutlinedIcon />
        </Fab>
        <Dialog open={newListDialogOpen} onClose={closeNewListDialog} title="Nowa lista zakupów">
          <NewListForm />
        </Dialog>
      </Grid>
    </Box>
  );
};

export default Lists;
