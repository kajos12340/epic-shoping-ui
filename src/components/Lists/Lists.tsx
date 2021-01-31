import React, { useEffect, useState } from 'react';
import {
  Box, Grid, Paper, Button,
} from '@material-ui/core';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import moment from 'moment';

import Fab from '../Fab/Fab';
import Dialog from '../Dialog/Dialog';
import NewListForm from './NewListForm/NewListForm';
import SimpleList, { ISimpleListItem } from './SimpleList/SimpleList';
import useSocket from '../../hooks/useSocket/useSocket';

import { Filters } from './Lists.styles';
import Loader from '../Loader/Loader';

const Lists = () => {
  const [newListDialogOpen, setNewListDialogOpen] = useState(false);
  const [filterActive, setFilterActive] = useState(true);
  const [filterInActive, setFilterInActive] = useState(false);
  const [lists, setLists] = useState<ISimpleListItem[]>([]);
  const [filteredLists, setFilteredLists] = useState<ISimpleListItem[]>([]);
  const [loading, setLoading] = useState(true);

  const socket = useSocket();

  useEffect(() => {
    setTimeout(() => {
      socket.current?.emit('getLists');
      setLoading(false);
    }, 500);

    socket.current?.on('shoppingLists', (newLists: any) => {
      setLists(newLists);
    });
  }, []);

  useEffect(() => {
    const newFilteredData = lists.filter((item) => {
      if (filterActive && item.isActive) {
        return true;
      }
      if (filterInActive && !item.isActive) {
        return true;
      }
      return false;
    });
    setFilteredLists(newFilteredData);
  }, [filterActive, filterInActive, lists]);

  const openNewListDialog = () => {
    setNewListDialogOpen(true);
  };

  const closeNewListDialog = () => {
    setNewListDialogOpen(false);
  };

  return (
    <Box mb={8}>
      <Loader visible={loading} />
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
        {filteredLists.map((item) => (
          <Grid xs={12} md={6} lg={4} key={item._id}>
            <Box p={1}>
              <Paper>
                <SimpleList
                  name={item.name}
                  date={moment(item.date).format('DD.MM.YYYY')}
                  isActive={item.isActive}
                  productsNumber={item.productsNumber}
                  _id={item._id}
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
          <NewListForm closeNewListDialog={closeNewListDialog} />
        </Dialog>
      </Grid>
    </Box>
  );
};

export default Lists;
