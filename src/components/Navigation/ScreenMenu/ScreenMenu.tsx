import React, { useState } from 'react';
import {
  Drawer, ListItemIcon, ListItemText,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

import { IMenuOption } from '../Navigation';

import { Fab, List, ListItem } from './ScreenMenu.styles';

interface ScreenMenuProps {
  menuOptions: IMenuOption[],
  currentActiveTab: string,
}

const ListItemLink = (props: any) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <ListItem button component={Link} {...props} />
);

const ScreenMenu = ({ menuOptions, currentActiveTab }:ScreenMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <Fab color="primary" size="large" onClick={toggleDrawer}>
        <MenuIcon />
      </Fab>
      <Drawer open={isOpen} anchor="right" onClose={toggleDrawer}>
        <List>
          {menuOptions.map((menuItem) => (
            <ListItemLink
              button
              to={menuItem.to}
              key={menuItem.to}
              isActive={currentActiveTab === menuItem.tabName}
            >
              <ListItemIcon>{menuItem.icon}</ListItemIcon>
              <ListItemText primary={menuItem.label} />
            </ListItemLink>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default ScreenMenu;
