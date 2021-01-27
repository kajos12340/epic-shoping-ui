import React, { useState } from 'react';
import {
  Box, Grid, Paper,
} from '@material-ui/core';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';

import Fab from '../Fab/Fab';
import Dialog from '../Dialog/Dialog';
import NewListForm from './NewListForm/NewListForm';

import SimpleList, { ISimpleListItem } from './SimpleList/SimpleList';

const listsMock: ISimpleListItem[] = [
  {
    productsNumber: 45,
    date: '22.05.2020',
    name: 'Sobotnie zakupy',
    isActive: false,
    id: 'asdasdasdas1',
  },
  {
    productsNumber: 5,
    date: '24.05.2020',
    name: 'Zapomniane rzeczy',
    isActive: true,
    id: 'asdasdasdas2',
  },
  {
    productsNumber: 45,
    date: '14.05.2020',
    name: 'Niedzielne zakupy',
    isActive: true,
    id: 'asdasdasdas3',
  },
  {
    productsNumber: 45,
    date: '02.05.2020',
    name: 'Poniedziałkowe zakupy',
    isActive: false,
    id: 'asdasdasdas4',
  },
  {
    productsNumber: 45,
    date: '21.06.2020',
    name: 'Sobotnie zakupy',
    isActive: false,
    id: 'asdasdasdas',
  },
];

const Lists = () => {
  const [newListDialogOpen, setNewListDialogOpen] = useState(false);

  const openNewListDialog = () => {
    setNewListDialogOpen(true);
  };

  const closeNewListDialog = () => {
    setNewListDialogOpen(false);
  };

  return (
    <Box mb={8}>
      <Grid container>
        {listsMock.map((item) => (
          <Grid xs={12} md={6} lg={4} key={item.id}>
            <Box p={1}>
              <Paper>
                <SimpleList
                  name={item.name}
                  date={item.date}
                  isActive={item.isActive}
                  productsNumber={item.productsNumber}
                  id={item.id}
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
