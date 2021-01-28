import React from 'react';
import {
  ListItem, ListItemText, ListItemSecondaryAction, IconButton,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

export interface IItem {
  name: string,
  unit: string,
  quantity: number,
}

interface IItemProps extends IItem {
  onClick?(): void,
}

const Item = ({
  name, unit, onClick, quantity,
}: IItemProps) => (
  <ListItem button onClick={onClick}>
    <ListItemText
      primary={name}
      secondary={`${quantity} ${unit}`}
    />
    <ListItemSecondaryAction>
      <IconButton edge="end">
        <DeleteIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);

export default Item;
