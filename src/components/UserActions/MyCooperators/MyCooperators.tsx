import React from 'react';
import {
  List, ListItem, ListItemAvatar, ListItemText, Avatar, Divider,
} from '@material-ui/core';

const MyCooperators = () => (
  <List>
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          M
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Majaczek" secondary="Data rejestracji: 24.09.2020" />
    </ListItem>
    <Divider />
    <ListItem>
      <ListItemAvatar>
        <Avatar color="primary">
          P
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Piotraczek" secondary="Data rejestracji: 24.11.2020" />
    </ListItem>
    <Divider />
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          T
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Testowy" secondary="Data rejestracji: 25.09.2020" />
    </ListItem>
  </List>
);

export default MyCooperators;
