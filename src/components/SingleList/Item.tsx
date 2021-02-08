import React, { useCallback, useState } from 'react';
import {
  ListItem, ListItemText, ListItemSecondaryAction, IconButton, ListItemIcon, Switch,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useParams } from 'react-router-dom';

import Dialog from '../Dialog';
import useSocket from '../../hooks/useSocket';

export interface IItem {
  _id: string,
  name: string,
  unit: string,
  quantity: number,
  inCart: boolean,
}

const Item = ({
  name, unit, quantity, _id, inCart,
}: IItem) => {
  const [deleteConfirmationModelOpen, setDeleteConfirmationModalOpen] = useState(false);
  const { id: listId } = useParams<{ id: string }>();
  const socket = useSocket();

  const handleModalClose = useCallback(() => {
    setDeleteConfirmationModalOpen(false);
  }, []);

  const openConfirmationModal = useCallback(() => {
    setDeleteConfirmationModalOpen(true);
  }, []);

  const handleDelete = useCallback(() => {
    socket.current?.emit('removeProduct', {
      listId,
      productId: _id,
    });
    setDeleteConfirmationModalOpen(false);
  }, [_id, listId, socket]);

  const toggleItem = useCallback(() => {
    socket.current?.emit('changeInCartState', {
      newValue: !inCart,
      productId: _id,
      listId,
    });
    setDeleteConfirmationModalOpen(false);
  }, [_id, listId, inCart, socket]);

  return (
    <ListItem role={undefined} dense>
      <ListItemIcon>
        <IconButton edge="start" onClick={openConfirmationModal}>
          <DeleteIcon />
        </IconButton>
      </ListItemIcon>
      <ListItemText
        primary={name}
        secondary={`${quantity} ${unit}`}
      />
      <ListItemSecondaryAction>
        <Switch
          edge="end"
          onChange={toggleItem}
          checked={inCart}
        />
      </ListItemSecondaryAction>
      <Dialog
        open={deleteConfirmationModelOpen}
        onClose={handleModalClose}
        title="Uwaga!"
        confirmFooter
        cancelCallback={handleModalClose}
        okCallback={handleDelete}
      >
        {`Jesteś pewien, że chcesz usunąć produkt ${name}?`}
      </Dialog>
    </ListItem>
  );
};

export default Item;
