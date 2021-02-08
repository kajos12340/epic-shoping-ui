import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import {
  Paper, List, Divider, Grid, Button, LinearProgress,
} from '@material-ui/core';
import { useParams, useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import moment from 'moment';

import ListHeader from './ListHeader';
import Item, { IItem } from './Item';
import NewItemForm from './NewItemForm';
import useSocket from '../../hooks/useSocket';
import Dialog from '../Dialog';
import Loader from '../Loader';

import { ListContainer } from './styles';

interface IListSimple {
  author: {
    _id: string,
    login: string,
  },
  creationDate: string,
  name: string,
  _id: string,
  isActive: boolean,
}

const SingleList = () => {
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState<IItem[]>([]);
  const [listData, setListData] = useState<IListSimple>();
  const { id: listId } = useParams<{ id: string }>();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const socket = useSocket();

  useEffect(() => {
    if (listId) {
      setTimeout(() => {
        socket.current?.emit('getProducts', listId);
        socket.current?.emit('getList', listId);
      }, 500);
    }

    socket.current?.on('shoppingList', (data: IListSimple) => {
      setListData(data);
    });

    socket.current?.on('products', (newProducts: IItem[]) => {
      setProductList(newProducts);
      setLoading(false);
    });

    socket.current?.on('listClosed', (closedBy: string) => {
      enqueueSnackbar(`Lista została zamknięta przez użytkownika ${closedBy}`, {
        variant: 'success',
      });
      history.push('/shopping/lists');
    });
  }, [listId, enqueueSnackbar, history, socket]);

  const handleConfirmDialogOpen = useCallback(() => {
    setConfirmDialogOpen(true);
  }, []);

  const handleConfirmDialogClose = useCallback(() => {
    setConfirmDialogOpen(false);
  }, []);

  const handleListCancellation = useCallback(() => {
    socket.current?.emit('closeList', listId);
    setConfirmDialogOpen(false);
  }, [listId, socket]);

  const progressValue = useMemo(() => {
    const inCartLength = productList.filter((item) => item.inCart).length;
    return {
      percentage: (inCartLength * 100) / productList.length,
      inCartLength,
      length: productList.length,
    };
  }, [productList]);

  return (
    <>
      <Paper>
        <Loader visible={loading} />
        {listData && (
          <ListHeader
            counter={progressValue.inCartLength}
            count={progressValue.length}
            author={listData.author?.login}
            name={listData.name}
            date={moment(listData.creationDate).format('DD.MM.YYYY')}
          />
        )}
        <LinearProgress variant="determinate" value={progressValue.percentage} />
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
