import React, { useCallback, useEffect, useState } from 'react';
import {
  Paper, List, Divider, Grid, Button,
} from '@material-ui/core';
import { useParams, useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import ListHeader from './ListHeader/ListHeader';
import Item, { IItem } from './Item/Item';
import NewItemForm from './NewItemForm/NewItemForm';
import useSocket from '../../hooks/useSocket/useSocket';
import Dialog from '../Dialog/Dialog';
import Loader from '../Loader/Loader';

import { ListContainer } from './SingleList.styles';

const SingleList = () => {
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState<IItem[]>([]);
  const { id: listId } = useParams<{ id: string }>();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const socket = useSocket();

  useEffect(() => {
    if (listId) {
      setTimeout(() => {
        socket.current?.emit('getProducts', listId);
      }, 500);
    }

    socket.current?.on('products', (newProducts: any) => {
      setProductList(newProducts);
      setLoading(false);
    });

    socket.current?.on('listClosed', (closedBy: string) => {
      enqueueSnackbar(`Lista została zamknięta przez użytkownika ${closedBy}`, {
        variant: 'success',
      });
      history.push('/shopping/lists');
    });
  }, [listId]);

  const handleConfirmDialogOpen = useCallback(() => {
    setConfirmDialogOpen(true);
  }, []);

  const handleConfirmDialogClose = useCallback(() => {
    setConfirmDialogOpen(false);
  }, []);

  const handleListCancellation = useCallback(() => {
    socket.current?.emit('closeList', listId);
    setConfirmDialogOpen(false);
  }, []);

  return (
    <>
      <Paper>
        <Loader visible={loading} />
        <ListHeader
          counter={12}
          count={45}
          author="Pioter"
          name="Super lista"
          date="22.01.2021"
        />
        <ListContainer>
          <List dense>
            {productList.map((item) => (
              <>
                <Item
                  name={item.name}
                  unit={item.unit}
                  quantity={item.quantity}
                  _id={item._id}
                  inCart={item.inCart}
                />
                <Divider />
              </>
            ))}
          </List>
          <NewItemForm />
          <Grid container justify="flex-end">
            <Button variant="contained" onClick={handleConfirmDialogOpen}>
              Zakończ zakupy
            </Button>
          </Grid>
        </ListContainer>
      </Paper>
      <Dialog
        open={confirmDialogOpen}
        onClose={handleConfirmDialogClose}
        title="Uwaga!"
        confirmFooter
        okCallback={handleListCancellation}
        cancelCallback={handleConfirmDialogClose}
      >
        Jesteś pewien, że chcesz zamknąć listę?
        Spowoduje to utratę możliwości wyświetlania
        i modyfikacji jej danych dla Ciebie i wszystkich użytkowników.
      </Dialog>
    </>
  );
};

export default SingleList;
