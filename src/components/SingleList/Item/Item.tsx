import React, { useCallback, useState } from 'react';
import {
  ListItem, ListItemText, ListItemSecondaryAction, IconButton, ListItemIcon, Switch,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '../../Dialog/Dialog';

export interface IItem {
  name: string,
  unit: string,
  quantity: number,
}

const Item = ({
  name, unit, quantity,
}: IItem) => {
  const [deleteConfirmationModelOpen, setDeleteConfirmationModalOpen] = useState(false);

  const handleModalClose = useCallback(() => {
    setDeleteConfirmationModalOpen(false);
  }, []);

  const openConfirmationModal = useCallback(() => {
    setDeleteConfirmationModalOpen(true);
  }, []);

  const handleDelete = useCallback(() => {
    setDeleteConfirmationModalOpen(false);
  }, [name]);

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
          // onChange={handleToggle('wifi')}
          // checked={checked.indexOf('wifi') !== -1}
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
