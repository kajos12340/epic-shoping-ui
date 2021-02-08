import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Typography, IconButton, Badge } from '@material-ui/core';

import { IMenuOption } from '../Navigation';
import { RootReducerState } from '../../../store/store';

import {
  Toolbar, ButtonsContainer, AppBar,
} from './Menu.styles';

interface ScreenMenuProps {
  menuOptions: IMenuOption[],
  currentActiveTab: string,
}

const Menu = ({ menuOptions, currentActiveTab }:ScreenMenuProps) => {
  const messageCounter = useSelector((state: RootReducerState) => state.messageCounter);

  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" noWrap>
          Epic shopper
        </Typography>
        <ButtonsContainer>
          {menuOptions.map((menuItem) => (
            <IconButton
              component={Link}
              to={menuItem.to}
              key={menuItem.tabName}
              color={currentActiveTab === menuItem.tabName ? 'inherit' : 'secondary'}
              size="medium"
            >
              {menuItem.tabName === 'messages'
                ? (
                  <Badge badgeContent={messageCounter} color="error">
                    {menuItem.icon}
                  </Badge>
                ) : menuItem.icon}
            </IconButton>
          ))}
        </ButtonsContainer>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;
